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
  password: string;
  birthDate: Date;
  userSex: boolean;  // 0 -men 1 - women | can simply change to 3 posibilities (extra one initialized - unchecked)
  userSexPreference: boolean;  // same as above
  description: string;
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  submit(e) {
    e.preventDefault();
    this.login =  e.target.querySelector('#loginNameInput').value;
    const pass1 = e.target.querySelector('#passwordInput').value;
    const pass2 = e.target.querySelector('#passsword2Input').value;
    this.birthDate = e.target.querySelector('#birthdateInput').value;
    const userSexMale = e.target.querySelector('#sexGenderMale').checked;
    const userSexFemale = e.target.querySelector('#sexGenderFemale').checked;
    const userSexPreferenceMale = e.target.querySelector('#sexPreferenceGenderMale').checked;
    const userSexPreferenceFemale = e.target.querySelector('#sexPreferenceGenderFemale').checked;
    this.description = e.target.querySelector('#infoInput').value;

    if (userSexMale) { this.userSex = false; } else if (userSexFemale) { this.userSex = true; }
    if (userSexPreferenceMale) { this.userSexPreference = false; } else if (userSexPreferenceFemale) { this.userSexPreference = true; }

    if (!this.isLoginTaken(this.login) && pass1 === pass2) {
      this.password = pass1;
      console.log(this.login, this.password, this.birthDate, this.userSex, this.userSexPreference, this.description);
      this.registerUser();
    }

    // console.log(this.userSex);
    // console.log(this.userSexPreference);
    // console.log(this.description );  dodanie endpointu
    this.router.navigate(['/login']);
  }



  private registerUser() {
    return true; // TODO registering user in backend
  }

  private isLoginTaken(login: string) {
    return false;  // TODO checking if login is already taken
  }

}
