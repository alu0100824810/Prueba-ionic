import { Component, OnInit } from '@angular/core';
import { FirebaseAppService } from '@core/services/firebase-app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessagesService } from '@core/services/messages.service';
import { AlertController, NavController } from '@ionic/angular';
import { generateDateNow } from 'app/shared/utils/functionsUtils';

@Component({
  selector: 'app-fill-out',
  templateUrl: './fill-out.page.html',
  styleUrls: ['./fill-out.page.scss'],
})
export class FillOutPage implements OnInit {

  data: any;
  form = [];
  date: string;

  constructor(
    private firebaseAppService: FirebaseAppService,
    private messages: MessagesService,
    public alertController: AlertController,
    private router: Router,
    private navCtrl: NavController,
    private readonly activatedRoute: ActivatedRoute) {
    this.getData();
  }

  ngOnInit() {
  }


  async getData() {
    try {
      this.date = generateDateNow();
      await this.messages.showSpinner('Cargando...');
      const result = await this.firebaseAppService.getOnlyPoll(this.date);
      result.subscribe((res: any) => {
        console.log(res.payload.data());
        this.data = res.payload.data();
        res.payload.data().data.forEach(item => {
          this.form.push(item);
        });
      });
    } catch (error) {
      console.error(error);
      await this.messages.hideSpinner();
      await this.showAlertError('No se ha podido obtener los datos del formulario.');
      this.data = null;
      this.form = [];
    } finally {
      await this.messages.hideSpinner();
    }
  }


  async showAlertError(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert-error',
      header: 'Error',
      message,
      backdropDismiss: false,
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


  async sendAnswers() {
    let copyData = JSON.parse(JSON.stringify(this.form)); // ! OJO Si se está usando ecmascript5 la COPIA del ARRAY es así, si es6 es asi [...dataArray]
    copyData.map(x => {
      x.value = +x.value;
      return x;
    });
    this.data.data = [...copyData];
    this.data.done = true;
    try {
      await this.messages.showSpinner('Enviando respuestas...');
      await this.firebaseAppService.updateAnswersPoll(generateDateNow(), this.data);
      await this.firebaseAppService.sendAnswersPoll(generateDateNow(), this.activatedRoute.snapshot.params.id);
      await this.messages.showToast('Formulario enviado correctamente');
      this.data = null;
      this.form = null;
      await this.router.navigateByUrl('/polls');
    } catch (error) {
      await this.messages.hideSpinner();
      console.error(error);
      copyData = null;
      await this.showAlertError('No se ha podido enviar las respuestas.'); // TODO: MEJORA -> Si da error no volver atrás, sino dar la opción de volver intentarlo
    } finally {
      await this.messages.hideSpinner();
    }
  }

}
