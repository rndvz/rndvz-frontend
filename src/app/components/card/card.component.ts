import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../../util/person';
import {Message} from '../chat/chat.component';
import {RestFullService} from '../../services/rest-full.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../common.css']
})
export class CardComponent implements OnInit {
  @Input() person: Person;

  constructor(private restService: RestFullService) { }

  ngOnInit() { }

  sendBlock(event: any): void {
    this.restService.blockUser(22, 14);
    // this.restService.blockUser(22, 14);
  }

  sendAcceppt(event: any): void {   // CROS agaidn :(
    this.restService.accepptUser(22, 14);
  }
}
