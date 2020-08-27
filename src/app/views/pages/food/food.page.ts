import { Component, OnInit } from '@angular/core';
import { MessagesService } from '@core/services/messages.service';
import { FirebaseAppService } from '@core/services/firebase-app.service';
import { generateDateNow } from 'app/shared/utils/functionsUtils';

@Component({
  selector: 'app-food',
  templateUrl: './food.page.html',
  styleUrls: ['./food.page.scss'],
})
export class FoodPage implements OnInit {

  data: any = null;

  constructor(private firebaseAppService: FirebaseAppService, private messages: MessagesService) {
    this.getData();
  }

  ngOnInit() { }


  /**
   * Obtener datos
   */
  async getData() {
    try {
      await this.messages.showSpinner();
      const res = await this.firebaseAppService.getFoodOffersOfUser(generateDateNow());
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
