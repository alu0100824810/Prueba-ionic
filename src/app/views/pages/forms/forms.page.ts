import { Component, OnInit } from '@angular/core';
import { faFutbol, faUsers, faTicketAlt, faUserTie, faCalendarAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { CategoryForm } from 'app/shared/models/FormModel';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  data: Array<CategoryForm> = [
    { grupo: [ { title: 'Partidos', icon: faCalendarAlt, route: './category/partidos' }, { title: 'Equipo', icon: faUsers, route: './category/equipo' }]},
    { grupo: [ { title: 'Servicios', icon: faTicketAlt, route: './category/servicios' }, { title: 'Directiva', icon: faUserTie, route: './category/directiva' }]},
    { grupo: [ { title: 'Estadio', icon: faFutbol, route: './category/estadio' }, { title: 'Información', icon: faInfoCircle, route: './category/información' }]}
  ];

  constructor() { }

  ngOnInit() {
  }

}
