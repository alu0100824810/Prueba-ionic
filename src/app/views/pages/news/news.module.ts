import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { NewsPage } from './news.page';


const routes: Routes = [
  {
    path: '',
    component: NewsPage
  }
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NewsPage]
})
export class NewsPageModule {}
