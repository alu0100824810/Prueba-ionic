import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContestDraw, Participating } from 'app/shared/models/Contest-Draw.Model';
import { ActivatedRoute } from '@angular/router';
import { FirebaseAppService } from '@core/services/firebase-app.service';
import { MessagesService } from '@core/services/messages.service';
import { AlertController, NavController } from '@ionic/angular';
import { generateDateNow } from 'app/shared/utils/functionsUtils';

@Component({
  selector: 'app-take-part',
  templateUrl: './take-part.page.html',
  styleUrls: ['./take-part.page.scss'],
})
export class TakePartPage implements OnInit, OnDestroy {

  data: ContestDraw = null;
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
      const res = await this.firebaseAppService.getDataUniqueDraw(generateDateNow(), this.activatedRoute.snapshot.params.id);
      this.result = await res.subscribe(async (d: any) => {
        this.data = await d.payload.data();
        this.participated = this.data.participated ? this.data.participated : false;
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
              this.data.participated = true;
              await this.firebaseAppService.updateParticiped(generateDateNow(), this.activatedRoute.snapshot.params.id, this.data);
              await this.firebaseAppService.takePartOnlyDraw(generateDateNow(), this.activatedRoute.snapshot.params.id);
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
   // this.checking.unsubscribe();
  }

}
