import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TakePartPage } from './take-part.page';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TakePartPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TakePartPage]
})
export class TakePartPageModule {}
