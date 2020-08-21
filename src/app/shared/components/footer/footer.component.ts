import { Component, OnInit, ViewChild } from '@angular/core';
import { faUsers, faCalendarAlt, faNewspaper, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { SidebarMenuComponent } from '../sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

 // logo = './../assets/logo/logo.png';
  icons = {
    newspaper: faNewspaper,
    matches: faCalendarAlt,
    team: faUsers,
    more: faEllipsisH
  };

  @ViewChild('menu') sideBar: SidebarMenuComponent;

  constructor() { }

  ngOnInit() {}

  openSideBar() {
    this.sideBar.openSideBar();
  }


}
