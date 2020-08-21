import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class WelcomeInfoGuard implements CanActivate {

  constructor( private readonly router: Router) { }

  async canActivate() {
    const res = await Storage.get({ key: 'welcome'});
    if (JSON.parse(res.value) === null) {
      await Storage.set({
        key: 'welcome',
        value: 'true'
      });
      return true;
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}
