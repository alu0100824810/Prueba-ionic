import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { ButtonStartFormPage } from './button-start-form.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonStartFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ButtonStartFormPage]
})
export class ButtonStartFormPageModule {}
