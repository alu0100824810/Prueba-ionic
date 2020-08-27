import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '@core/services/login.service';
import { faUsers, faCalendarAlt, faNewspaper, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { SidebarMenuComponent } from 'app/shared/components/sidebar-menu/sidebar-menu.component';
import { BeaconsService } from '@core/services/beacons.service';
import { LocalNotificationService } from '@core/services/localNotification.service';
import * as datos from 'app/shared/mock/beacons.mock.json';
import { BeaconInfo } from '@core/models/iBeaconModel';

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

  beacons: Array<BeaconInfo> = (datos as any).default;

  @ViewChild('menu') sideBar: SidebarMenuComponent;

  constructor(
    public readonly loginService: LoginService,
    public readonly beaconService: BeaconsService,
    private localNotificationService: LocalNotificationService) {
  }

  async ngOnInit() {
     await this.beaconService.isEnabledLocation();
     await this.beaconService.isEnabledBluetooth();
     await this.localNotificationService.isEnabledNotifications();
     await this.beacons.forEach( async item => {
        await this.beaconService.startSearchOfBeacons(item);
     });
  }

  /**
   * Cerrar menu lateral
   */
  openSideBar() {
    this.sideBar.openSideBar();
  }
}
