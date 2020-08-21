import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@core/services/login.service';
import { MessagesService } from '@core/services/messages.service';

import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { BasicUser } from '@core/models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: BasicUser = {
    userName: null,
    email: null,
    password: null
  };

  icons = {
    email: faEnvelope,
    password: faLock
  };

  constructor(private messages: MessagesService, private router: Router, private loginService: LoginService) { }

  ngOnInit() { }

  async signIn(event?: any) {
    if (event !== undefined) { event.preventDefault(); }
    let { user } = this;
    try {
      await this.messages.showSpinner('Creando cuenta ...');
      await this.loginService.signIn(user.email, user.password);
      await this.messages.showToast('Creación de la cuenta correctamente');
      this.router.navigateByUrl('/login'); // TODO: PROVISONAL
    } catch (error) {
      console.error(error);
      for (const key in user) {
        if (user.hasOwnProperty(key)) {
          user[key] = null;
        }
      }
    } finally {
      await this.messages.hideSpinner();
    }
  }

}
