import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamPage } from './team.page';
import { SharedModule } from 'app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TeamPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeamPage]
})
export class TeamPageModule {}
