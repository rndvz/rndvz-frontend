import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login: string;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  registerUser(e) {
    e.preventDefault();
    console.log(e);
    this.login = e.target.elements[0].value;
    console.log(this.login);
    this.router.navigate(['/login']);
  }

}
