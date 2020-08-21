import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { WelcomeInfoGuard } from './guards/welcome-info.guard';
import { LoginGuard } from './guards/login.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IonicModule
  ],
  providers: [
    LoginGuard,
    WelcomeInfoGuard
  ],
  entryComponents: [],
  exports: []
})
export class CoreModule {}
