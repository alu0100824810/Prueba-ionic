import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersShopTicketsPage } from './offers-shop-tickets.page';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: OffersShopTicketsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OffersShopTicketsPage]
})
export class OffersShopTicketsPageModule {}
