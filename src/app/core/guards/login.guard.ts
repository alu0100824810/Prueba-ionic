import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { LoginService } from '@core/services/login.service';
// import { NativeStorage } from '@ionic-native/native-storage/ngx';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { NetworkService } from '@core/services/network.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivateChild {

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router,
   // private readonly localStorage: NativeStorage,
   // private readonly splashScreen: SplashScreen,
  ) { }


  /**
   * 1) Si es la primera que entras mostrar la página de welcome
   * 2) Cuando está loggeado o no devuelve true
   */
  async canActivateChild() {

    if (localStorage.getItem('welcome') === '') {
      localStorage.setItem('welcome', 'true');
      this.router.navigateByUrl('/welcome');
      return true;
    } else {
      /*if (!this.loginService.isLogged()) {
            console.log('No estás logueado');
            try {
              const user = await this.localStorage.getItem('user');
            //  await this.loginService.login_sap(user); // TODO: LOGIN APP
            } catch (error) {
              console.log('no stored user');
            }
          }
          this.themeService.updateTheme();
         // this.splashScreen.hide();
          if (!this.loginService.isLogged()) {
            return this.router.parseUrl('/login');
          }
          return true;*/
    }
  }
}
