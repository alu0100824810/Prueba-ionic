import { Component, OnInit, ViewChild } from '@angular/core';
import * as datos from 'app/shared/mock/news.mock.json';
import { NewsInfo } from 'app/shared/models/NewsModel';
import { SidebarMenuComponent } from 'app/shared/components/sidebar-menu/sidebar-menu.component';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: Array<NewsInfo> = (datos as any).default; // TODO: PROVISIONAL
  constructor() { }

  @ViewChild('menu') sideBar: SidebarMenuComponent;

  ngOnInit() {}

  openSideBar() {
    this.sideBar.openSideBar();
  }

}
