import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome';
import { faUserLock, faUserShield } from '@fortawesome/fontawesome-free-solid';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import set = Reflect.set;
import {RestFullService} from '../../services/rest-full.service';

library.add(faUserLock, faUserShield);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../common.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router, private userService: UserService, private testService: RestFullService) { }

  ngOnInit() {
  }

  loginUser(e) {
    e.preventDefault();
    this.username = e.target.elements[0].value;
    this.password = e.target.elements[1].value;
    this.testService.getAllUsers();
    // mock_start
    if (this.username === 'admin' && this.password === 'admin') {
      this.userService.username = this.username;
      this.userService.LogIn();
      // console.log(this.username, this.password);
      this.router.navigate(['/refresh']);

    }// mock_end


  }

}
