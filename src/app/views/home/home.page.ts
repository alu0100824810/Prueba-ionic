import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '@core/services/login.service';
import { faUsers, faCalendarAlt, faNewspaper, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { SidebarMenuComponent } from 'app/shared/components/sidebar-menu/sidebar-menu.component';
import { IBeacon } from '@ionic-native/ibeacon/ngx';
import { AlertController } from '@ionic/angular';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  icons = {
    newspaper: faNewspaper,
    matches: faCalendarAlt,
    team: faUsers,
    more: faEllipsisH
  };

  @ViewChild('menu') sideBar: SidebarMenuComponent;

  constructor(
    public readonly loginService: LoginService,
    private ibeacon: IBeacon,
    public alertController: AlertController,
    private diagnostic: Diagnostic,
  ) {
  }

  ngOnInit() {
    this.ibeacon.requestAlwaysAuthorization();  // ! Request permission to use location on iOS
    this.ibeacon.isBluetoothEnabled().then(    // ! COMPRUEBA SI EL BLUEETOOTH ESTÁ DESACTIVADO
      statusBluetooth => {
        this.diagnostic.isLocationAvailable().then(statusLocation => {   // this.diagnostic.switchToLocationSettings(); // ! NO FUNCIONA EN IOS :( #BUG
          if (!statusBluetooth && !statusLocation) {
            this.showAlert('El Bluetooth y la localización del móvil están desactivados. Para poder interectuar con los Beacons, es necesario activarlos. Por favor, vaya Ajustes y actívelos.');
          } else if (statusBluetooth && !statusLocation) {
            this.showAlert('La Localización está desactivada. Para poder interectuar con los Beacons, es necesario activarla. Por favor, vaya Ajustes y actívela.');
          } else if (!statusBluetooth && statusLocation) {
            this.showAlert('El Bluetooth está desactivado. Para poder interectuar con los Beacons, es necesario activarlo. Por favor, vaya Ajustes y actívelo.');
          }
        });
      }
    );
    let delegate = this.ibeacon.Delegate();

    console.log('DELEGATE !!', delegate);

    // Subscribe to some of the delegate's event handlers
    delegate.didRangeBeaconsInRegion()
      .subscribe(
        data => console.log('didRangeBeaconsInRegion: ', data),
        error => console.error()
      );
    delegate.didStartMonitoringForRegion()
      .subscribe(
        data => console.log('didStartMonitoringForRegion: ', data),
        error => console.error()
      );
    delegate.didEnterRegion()
      .subscribe(
        data => {
          console.log('didEnterRegion: ', data);
        }
      );
  }

  /**
   * Mostrar mensaje de alerta --> Localización desactivada - Bluetooth desactivado
   */
  async showAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Aviso',
      message,
      backdropDismiss: false,
      buttons: ['OK']
    });
    await alert.present();
  }

  /**
   * Cerrar menu lateral
   */
  openSideBar() {
    this.sideBar.openSideBar();
  }
}
