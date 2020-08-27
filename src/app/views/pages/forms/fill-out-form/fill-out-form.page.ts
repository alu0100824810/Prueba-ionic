import { Component, OnInit } from '@angular/core';
import { FormInfo } from 'app/shared/models/FormModel';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from '@core/services/messages.service';
import { FirebaseAppService } from '@core/services/firebase-app.service';
import { LoginService } from '@core/services/login.service';
import { AlertController, NavController } from '@ionic/angular';
import { generateDateNow } from 'app/shared/utils/functionsUtils';

@Component({
  selector: 'app-fill-out-form',
  templateUrl: './fill-out-form.page.html',
  styleUrls: ['./fill-out-form.page.scss'],
})
export class FillOutFormPage implements OnInit {

  infoService = {
    category: '',
    dateToday: '',
    uid: ''
  };

  form: FormInfo;
  data = [];

  constructor(
    private firebaseAppService: FirebaseAppService,
    private readonly activatedRoute: ActivatedRoute,
    private messages: MessagesService,
    private readonly loginService: LoginService,
    public alertController: AlertController,
    private router: Router,
    private navCtrl: NavController) {
    this.getData();
  }

  ngOnInit() {}

  /**
   * IMPORTAR FORMULARIO
   */
  async getData() {   // TODO: FECHA PRUEBA
    try {
      await this.messages.showSpinner('Cargando...');
      this.infoService.dateToday = generateDateNow();
      this.infoService.category = this.activatedRoute.snapshot.params.category;
      this.infoService.uid = this.loginService.user.uid;
      const result = await this.firebaseAppService.getFormByID(this.infoService.category, generateDateNow(), this.infoService.uid);
      result.subscribe((res: any) => {
        this.form = res.payload.data();
        const r: FormInfo = JSON.parse(JSON.stringify(this.form));
        r.data.forEach(item => {
          this.data.push(item);
        });
      });
    } catch (error) {
      console.error(error);
      await this.messages.hideSpinner();
      await this.showAlertError('No se ha podido obtener los datos del formulario.');
      this.form = null;
      this.data = [];
    } finally {
      await this.messages.hideSpinner();
    }
  }



  /**
   * ENVIAR FORMULARIO CON RESPUESTAS
   */
  async sendAnswersForms() {
    let copyData = JSON.parse(JSON.stringify(this.data)); // ! OJO Si se está usando ecmascript5 la COPIA del ARRAY es así, si es6 es asi [...dataArray]
    copyData.map(x => {
      x.value = +x.value;
      return x;
    });
    this.form.data = [...copyData];
    this.form.info.done = true;
    try {
      await this.messages.showSpinner('Enviado respuestas...');
      await this.firebaseAppService.postFormAnswers(this.infoService.category, '27-07-2020', this.infoService.uid, this.form);
      await this.messages.showToast('Formulario enviado correctamente');
      this.data = null;
      this.form = null;
      await this.router.navigateByUrl('/category-forms');
    } catch (error) {
      await this.messages.hideSpinner();
      console.error(error);
      copyData = null;
      await this.showAlertError('No se ha podido enviar las respuestas.'); // TODO: MEJORA -> Si da error no volver atrás, sino dar la opción de volver intentarlo
    } finally {
      await this.messages.hideSpinner();
    }
  }



  /**
   * Mostrar mensaje de error
   * @param message mensaje de error
   */
  async showAlertError(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert-error',
      header: 'Error',
      message,
      backdropDismiss: false, // TODO: PROVISIONAL
      buttons: [ // TODO: AÑADIR BOTÓN INTENTAR DE NUEVO
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


  onClick(e) {
    console.log('item', e);
  }
}
