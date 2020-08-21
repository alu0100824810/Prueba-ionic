import { Component, OnInit } from '@angular/core';
import { MessagesService } from '@core/services/messages.service';
import { Router } from '@angular/router';
import { LoginService } from '@core/services/login.service';
import { AlertController } from '@ionic/angular';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  email: null;
  icons = {
    email: faEnvelope
  };

  constructor(private messages: MessagesService, private router: Router, private loginService: LoginService, public alertController: AlertController) { }

  ngOnInit() {}

  async recoverPassword(event?: any) {
    if (event !== undefined) { event.preventDefault(); }
    try {
      await this.messages.showSpinner();
      await this.loginService.forgetPassword(this.email);
      await this.messages.showToast('Correo enviado correctamente');
      const alert = await this.alertController.create({
        header: 'Restablecimiento de contraseña',
        message: `Se ha enviado un correo electrónico a ${this.email}. Sigue las instrucciones para restablecer la contraseña.`,
        buttons: [{
          text: 'Ok',
          handler: () => {
            this.router.navigateByUrl('/login');
          }
        }]
      });
      await alert.present();
    } catch (error) {
      console.error(error);
    } finally {
      await this.messages.hideSpinner();
      this.email = null;
    }
  }

}
