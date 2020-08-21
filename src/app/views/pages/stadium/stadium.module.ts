import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StadiumPage } from './stadium.page';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StadiumPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StadiumPage]
})
export class StadiumPageModule {}
