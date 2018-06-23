import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {s} from '@angular/core/src/render3';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  login: string;
  birthDate: Date;
  userSex: boolean;  // 0 -men 1 - women | can simply change to 3 posibilities (extra one initialized - unchecked)
  userSexPreference: boolean;  // same as above
  description: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  submit(e) {
    e.preventDefault();
    console.log(e);
    this.login = e.target.elements[0].value;
    this.birthDate = e.target.elements[1].value;
    const userSexMale = e.target.elements[2].checked;
    const userSexFemale = e.target.elements[3].checked;
    const userSexPreferenceMale = e.target.elements[4].checked;
    const userSexPreferenceFemale = e.target.elements[5].checked;
    this.description = e.target.elements[6].value;

    if (userSexMale) { this.userSex = false; } else if (userSexFemale) { this.userSex = true; }
    if (userSexPreferenceMale) { this.userSexPreference = false; } else if (userSexPreferenceFemale) { this.userSexPreference = true; }

    if (!this.isLoginTaken(this.login)) {
      this.registerUser();
    }

    // console.log(this.userSex);
    // console.log(this.userSexPreference);
    // console.log(this.description );
    this.router.navigate(['/login']);
  }



  private registerUser() {
    return true; // TODO registering user in backend
  }

  private isLoginTaken(login: string) {
    return false;  // TODO checking if login is already taken
  }

}
