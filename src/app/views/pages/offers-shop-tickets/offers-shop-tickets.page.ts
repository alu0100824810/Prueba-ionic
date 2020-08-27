import { Component, OnInit } from '@angular/core';
import { FirebaseAppService } from '@core/services/firebase-app.service';
import { MessagesService } from '@core/services/messages.service';
import { generateDateNow } from 'app/shared/utils/functionsUtils';

@Component({
  selector: 'app-offers-shop-tickets',
  templateUrl: './offers-shop-tickets.page.html',
  styleUrls: ['./offers-shop-tickets.page.scss'],
})
export class OffersShopTicketsPage implements OnInit {

  data: any = null;

  constructor(private firebaseAppService: FirebaseAppService, private messages: MessagesService) {
    this.getData();
  }
  ngOnInit() {}


  /**
   * Obtener datos
   */
  async getData() {
   try {
      await this.messages.showSpinner();
      const res = await this.firebaseAppService.getShopTicketOffersOfUser(generateDateNow());  // ! FECHA DE PRUEBA
      console.log(res);
      await res.subscribe(async (d: any) => { // ! OJO: CON EL SUBCRIBE- DESUCRBIBE
        this.data = d.payload.data();
      });
      console.log(this.data);
    } catch (error) {
      console.error(error);
      await this.messages.hideSpinner();
    } finally {
      await this.messages.hideSpinner();
    }
  }

}
