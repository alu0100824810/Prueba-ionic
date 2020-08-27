import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillOutPage } from './fill-out.page';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FillOutPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FillOutPage]
})
export class FillOutPageModule {}
