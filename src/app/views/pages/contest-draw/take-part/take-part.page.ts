import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContestDraw, Participating } from 'app/shared/models/Contest-Draw.Model';
import { ActivatedRoute } from '@angular/router';
import { FirebaseAppService } from '@core/services/firebase-app.service';
import { MessagesService } from '@core/services/messages.service';
import { LoginService } from '@core/services/login.service';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-take-part',
  templateUrl: './take-part.page.html',
  styleUrls: ['./take-part.page.scss'],
})
export class TakePartPage implements OnInit, OnDestroy {

  data: ContestDraw = null;
  date;
  result: any; // TODO: CAMBIAR NOMBRE
  checking: any; // TODO: CAMBIAR NOMBRE
  participated = false;

  user: Participating = {
    winner: false,
    email: null,
    uid: null,
  };

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private firebaseAppService: FirebaseAppService,
    private messages: MessagesService,
    private loginService: LoginService,
    public alertController: AlertController,
    private navCtrl: NavController) {
    this.getInfo();
  }

  ngOnInit() { }

  /**
   * OBTENER DATOS DEL SORTEO SELECCIONADO
   */
  async getInfo() {
    try {
      await this.messages.showSpinner();
      const MyDate = new Date();
      this.date = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + MyDate.getFullYear();
      const res = await this.firebaseAppService.getDataUniqueDraw('27-07-2020', this.activatedRoute.snapshot.params.id);  // ! OJO: FECHA DE PRUEBA
      const r = await this.firebaseAppService.checkUserHasParticipated('27-07-2020', this.activatedRoute.snapshot.params.id);
      this.checking = await r.subscribe(async (datos: any) => { // ! OJO: CON EL SUBCRIBE- DESUCRBIBE

        await datos.forEach(item => {
          const check = item.payload.doc.data();
          if (check.uid && check.uid === this.loginService.user.uid) {
            this.participated = true;
          }
        });

      });
      this.result = await res.subscribe(async (d: any) => { // ! OJO: CON EL SUBCRIBE- DESUCRBIBE
        this.data = await d.payload.data();
      });
    } catch (error) {
      console.error(error);
      await this.messages.hideSpinner();
    } finally {
      await this.messages.hideSpinner();
    }
  }

  /**
   * APUNTARSE A UN SORTEO
   */
  async takePartDraw() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: '¿Está seguro que desea participar en el sorteo?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancelar',
        }, {
          text: 'Aceptar',
          handler: async () => {
            try {
              await this.messages.showSpinner('Cargando...');
              this.user.email = this.loginService.user.email;
              this.user.uid = this.loginService.user.uid;
              await this.firebaseAppService.takePartOnlyDraw('27-07-2020', this.activatedRoute.snapshot.params.id, this.user);  // ! OJO: FECHA DE PRUEBA
              await this.messages.showToast('Su participación se ha realizado con éxito');
              this.navCtrl.back();
            } catch (error) {
              console.error(error);
              await this.messages.hideSpinner();
            } finally {
              await this.messages.hideSpinner();
            }
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnDestroy() {
    this.result.unsubscribe();
    this.checking.unsubscribe();
  }

}
