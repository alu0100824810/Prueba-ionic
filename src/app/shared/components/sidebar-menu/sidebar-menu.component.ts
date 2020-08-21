import { Component, OnInit} from '@angular/core';
import { MenuController } from '@ionic/angular';
import { faShoppingCart, faCog , faSignOutAlt, faTicketAlt, faFileAlt, faUtensils, faAward, faFutbol, faTag} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from '@core/services/login.service';
import { MessagesService } from '@core/services/messages.service';
import { UserInfo } from '@core/models/User';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {

  icons = {
    shop: faShoppingCart,
    settings: faCog,
    exit: faSignOutAlt,
    tickets: faTicketAlt,
    quiz: faFileAlt,
    food: faUtensils,
    award: faAward,
    club: faFutbol,
    offers: faTag
  };

  constructor(private messages: MessagesService, private menu: MenuController, private router: Router, public alertController: AlertController, private loginService: LoginService) { }

  ngOnInit() {}

  openSideBar() {
      this.menu.enable(true, 'first');
      this.menu.open('first');
  }

  closeMenu(router?: string) {
    this.menu.close('first');
    this.router.navigateByUrl(router);
  }


  /**
   * Cerra sesión
   */
  async logOut() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message: '¿Está seguro que desea cerrar sesión?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Cancelar',
        }, {
          text: 'Aceptar',
          handler: async () => {
            try {
              await this.messages.showSpinner();
              await this.loginService.logout();
              this.router.navigateByUrl('/login');
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
}
