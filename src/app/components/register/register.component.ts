import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {RestFullService} from '../../services/rest-full.service';
import {RegisterUser} from '../../util/registerUser';
import {Gender} from '../../util/gender.enum';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  existsUserB: boolean;

  login: string;
  password: string;
  birthDate: Date;
  userSex: string;  // 'male' -men 'female' - women | can simply change to 3 posibilities (extra one initialized - unchecked)
  userSexPreference: string;  // same as above
  description: string;
  constructor(private router: Router, private userService: UserService, private restfullService: RestFullService) { }

  private async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), 1000)).then(() => console.log('fired'));
  }

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

    if (userSexMale) { this.userSex = 'male'; } else if (userSexFemale) { this.userSex = 'female'; }
    if (userSexPreferenceMale) { this.userSexPreference = 'male'; } else if (userSexPreferenceFemale) { this.userSexPreference = 'female'; }

    if ( pass1 === pass2) {
      if ( pass1.length > 3) {
        this.password = pass1;
        this.restfullService.getExistsUserWithName(this.login)
          .forEach(x => {
            this.existsUserB = x.value;
          });

        this.delay(200).then(any => {

          if (!this.existsUserB) {
            this.registerUser(new RegisterUser(this.login, this.password, this.birthDate,
              this.description, this.userSex, this.userSexPreference, 5, 5, 10,
              200, 50.06147, 19.937085));
          } else {
            console.log('LOGIN: this username is already taken');
          }

        });
      } else {
        console.log('PASSWORD: password is too short');
      }
    } else {
      console.log('PASSWORD: your confirm password is diffrent');
    }
    this.router.navigate(['/login']);
  }



  private registerUser(user: RegisterUser) {
    this.restfullService.registerUser(user);
  }

}
