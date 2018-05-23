import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swipe',
  templateUrl: './swipe.component.html',
  styleUrls: ['./swipe.component.css']
})
export class SwipeComponent implements OnInit {
  firstname = 'name';
  bio = 'bio';
  photo = '';

  constructor() { }

  ngOnInit() {
  }

}
