import { Component, OnInit } from '@angular/core';
import { MessagesService } from '@core/services/messages.service';
import { FirebaseAppService } from '@core/services/firebase-app.service';
import { generateDateNow } from 'app/shared/utils/functionsUtils';

@Component({
  selector: 'app-polls',
  templateUrl: './polls.page.html',
  styleUrls: ['./polls.page.scss'],
})
export class PollsPage implements OnInit {

  data: any = null;
  done = false;

  constructor(private firebaseAppService: FirebaseAppService, private messages: MessagesService) {
    this.getData();
  }

  ngOnInit() { }

  async getData() {
    try {
      await this.messages.showSpinner();
      const res = await this.firebaseAppService.getDataPollOfUser(generateDateNow());
      console.log(res);
      await res.subscribe(async (d: any) => {
        this.data = d.payload.data();
        this.done = this.data.done ? this.data.done : false;
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
