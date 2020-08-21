import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContestDrawPage } from './contest-draw.page';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ContestDrawPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContestDrawPage]
})
export class ContestDrawPageModule {}
