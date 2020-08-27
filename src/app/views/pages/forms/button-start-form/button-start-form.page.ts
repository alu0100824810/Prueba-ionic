import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { MessagesService } from '@core/services/messages.service';
import { FirebaseAppService } from '@core/services/firebase-app.service';
import { FormInfo } from 'app/shared/models/FormModel';
import { LoginService } from '@core/services/login.service';
import { Observable } from 'rxjs';
import { generateDateNow } from 'app/shared/utils/functionsUtils';


@Component({
  selector: 'app-button-start-form',
  templateUrl: './button-start-form.page.html',
  styleUrls: ['./button-start-form.page.scss'],
})
export class ButtonStartFormPage implements OnInit , OnDestroy {

  infoService = {
    category: '',
    dateToday: '',
    uid: '',
    done: null,
  };

  result: any; // TODO: CAMBIAR NOMBRE

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    private messages: MessagesService,
    private firebaseAppService: FirebaseAppService,
    private navCtrl: NavController,
    private readonly loginService: LoginService,
  ) {
    this.checkForm();
   }

  ngOnInit() {}

  async checkForm() {
    try {
      await this.messages.showSpinner();
      this.infoService.dateToday = generateDateNow();
      this.infoService.category = this.activatedRoute.snapshot.params.category;
      this.infoService.uid = this.loginService.user.uid;
      let prueba = await this.firebaseAppService.getFormByID(this.infoService.category, generateDateNow(), this.infoService.uid);
      this.result = prueba.subscribe( async (res: any) => {
        const r: FormInfo =  await res.payload.data();
        this.infoService.done = r.info.done;
        if (this.infoService.done) {
          await this.showAlert('Esta encuesta ya ha sido realizada.', 'Aviso');
         }
        await this.ngOnDestroy();
      });
    } catch (error) {
      console.error(error);
      await this.messages.hideSpinner();
      await this.showAlert('Se ha producido un error.', 'Error');
    } finally {
      await this.messages.hideSpinner();
    }

  }


  /**
   * Mostrar mensaje de error
   * @param message mensaje de error
   */
  async showAlert(message: string, header: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert-error',
      header,
      message,
      backdropDismiss: false,
      buttons: [
        {
          text: 'Atrás',
          cssClass: 'secondary',
          handler: () => {
            this.navCtrl.back();
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnDestroy() {
    this.result.unsubscribe();
  }

}
