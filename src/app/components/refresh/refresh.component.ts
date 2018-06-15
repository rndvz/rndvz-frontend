import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome';
import { faSpinner } from '@fortawesome/fontawesome-free-solid';

library.add(faSpinner);

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css', '../../common.css']
})
export class RefreshComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
