import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, Platform } from '@ionic/angular';
import { BackButtonService } from '@core/services/back-button.service';
import { ThemeService } from '@core/services/theme.service';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private router: Router,
    private modalController: ModalController,
    private location: Location,
    private backButtonService: BackButtonService,
    private readonly themeService: ThemeService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
  this.platform.ready().then(() => {
    SplashScreen.hide();
    this.themeService.updateTheme();
    // Hardware Back button action
    document.addEventListener('backbutton', async (e: any) => {
      e.preventDefault();
      if (this.backButtonService.isDefine()) {
        this.backButtonService.handler();
      } else {
        switch (true) {
          case this.router.config.find(y => y.path === this.router.url.replace('/', '')).data.main:
            (navigator as any).app.exitApp();
            break;
          case await this.modalController.getTop() !== undefined:
            this.modalController.dismiss();
            break;
          default:
            this.location.back();
            break;
        }
      }
    });
  });
}
}
