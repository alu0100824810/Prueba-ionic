import { Component, OnInit } from '@angular/core';
import { faMapMarkedAlt, faPlaneDeparture, faBus, faParking } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stadium',
  templateUrl: './stadium.page.html',
  styleUrls: ['./stadium.page.scss'],
})
export class StadiumPage implements OnInit {

  icons = {
    map: faMapMarkedAlt,
    airport: faPlaneDeparture,
    bus: faBus,
    parking: faParking
  };

  constructor() { }

  ngOnInit() {
  }

}
