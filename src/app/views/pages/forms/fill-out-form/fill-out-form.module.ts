import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FillOutFormPage } from './fill-out-form.page';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FillOutFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FillOutFormPage]
})
export class FillOutFormPageModule {}
