import { Component, OnInit, Input } from '@angular/core';
import { ListFormsCategory } from '../../models/FormModel';

@Component({
  selector: 'app-view-list-forms',
  templateUrl: './view-list-forms.component.html',
  styleUrls: ['./view-list-forms.component.scss'],
})
export class ViewListFormsComponent implements OnInit {

  @Input() data: Array<ListFormsCategory>;

  constructor() { }

  ngOnInit() {}

}
