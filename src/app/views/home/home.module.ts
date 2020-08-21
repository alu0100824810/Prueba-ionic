import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';



const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        loadChildren: () => import('app/views/pages/news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'team',
        loadChildren: () => import('app/views/pages/team/team.module').then(m => m.TeamPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('app/views/pages/news/news.module').then(m => m.NewsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
