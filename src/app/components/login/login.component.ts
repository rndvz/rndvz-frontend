import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome';
import { faUserLock, faUserShield } from '@fortawesome/fontawesome-free-solid';

library.add(faUserLock, faUserShield);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../common.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
