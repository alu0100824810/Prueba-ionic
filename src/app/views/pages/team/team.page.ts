import { Component, OnInit, ViewChild } from '@angular/core';
import { Player } from 'app/shared/models/TeamModel';
import * as datos from 'app/shared/mock/team.mock.json';
import { SidebarMenuComponent } from 'app/shared/components/sidebar-menu/sidebar-menu.component';


@Component({
  selector: 'app-team',
  templateUrl: './team.page.html',
  styleUrls: ['./team.page.scss'],
})
export class TeamPage implements OnInit {

  data: Array<Player> = (datos as any).default[0]; // TODO: PROVISIONAL
  constructor() { }

  @ViewChild('menu') sideBar: SidebarMenuComponent;

  ngOnInit() {}

  openSideBar() {
    this.sideBar.openSideBar();
  }

}
