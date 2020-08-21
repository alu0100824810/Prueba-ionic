import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@core/services/login.service';
import { MessagesService } from '@core/services/messages.service';

import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { BasicUser } from '@core/models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

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

  ngOnInit() {}


  async login(event?: any) {
    if (event !== undefined) { event.preventDefault(); }
    let { user } = this;
    try {
      await this.messages.showSpinner('Iniciando sesión...');
      await this.loginService.logIn(user.email, user.password);
      this.router.navigateByUrl('/home'); // TODO: PROVISONAL
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
