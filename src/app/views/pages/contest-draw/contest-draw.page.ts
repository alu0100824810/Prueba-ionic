import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContestDraw } from 'app/shared/models/Contest-Draw.Model';
import { FirebaseAppService } from '@core/services/firebase-app.service';
import { MessagesService } from '@core/services/messages.service';

@Component({
  selector: 'app-contest-draw',
  templateUrl: './contest-draw.page.html',
  styleUrls: ['./contest-draw.page.scss'],
})
export class ContestDrawPage implements OnInit, OnDestroy {

  data: Array<ContestDraw> = [];
  date;

  result: any; // TODO: CAMBIAR NOMBRE

  constructor(private firebaseAppService: FirebaseAppService, private messages: MessagesService) { }

  async ngOnInit() {
    try {
      await this.messages.showSpinner('Cargando...');
      const MyDate = new Date();
      this.date = ('0' + MyDate.getDate()).slice(-2) + '-' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '-' + MyDate.getFullYear();
      const res = await this.firebaseAppService.getAllDraw('27-07-2020');  // TODO: FECHA DE PRUEBA
      this.result = res.subscribe((d: any) => { // ! OJO: CON EL SUBCRIBE- DESUCRBIBE
        d.forEach(item => {
          this.data.push(item.payload.doc.data());
        });
      });
    } catch (error) {
      console.error(error);
      await this.messages.hideSpinner();
    } finally {
      await this.messages.hideSpinner();
    }
  }

  ngOnDestroy() {
    this.result.unsubscribe();
  }

}
