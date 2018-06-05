import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../util/person';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../common.css']
})
export class CardComponent implements OnInit {
  @Input() person: Person;

  constructor() { }

  ngOnInit() {
    console.log(this.person);
  }
}
