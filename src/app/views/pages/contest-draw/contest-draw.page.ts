import { Component, OnInit } from '@angular/core';
import { ContestDraw } from 'app/shared/models/Contest-Draw.Model';
import { FirebaseAppService } from '@core/services/firebase-app.service';
import { MessagesService } from '@core/services/messages.service';
import { generateDateNow } from 'app/shared/utils/functionsUtils';


@Component({
  selector: 'app-contest-draw',
  templateUrl: './contest-draw.page.html',
  styleUrls: ['./contest-draw.page.scss'],
})
export class ContestDrawPage implements OnInit {

  data: Array<ContestDraw> = [];

  constructor(private firebaseAppService: FirebaseAppService, private messages: MessagesService) { 
    this.getData();
  }

   ngOnInit() {}

  async getData() {
    try {
      await this.messages.showSpinner('Cargando...');
      await this.firebaseAppService.getAllDrawFilterByUser(generateDateNow()).then((resul: any) => {
        resul.subscribe(async (dat: any) => {
          await dat.forEach(item => {
            this.data.push(item.payload.doc.data());
          });
        });
      });
    } catch (error) {
      console.error(error);
      await this.messages.hideSpinner();
    } finally {
      await this.messages.hideSpinner();
    }
    console.log(this.data);
  }

}
