import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodPage } from './food.page';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FoodPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FoodPage]
})
export class FoodPageModule {}
