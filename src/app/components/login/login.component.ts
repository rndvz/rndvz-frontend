import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome';
import { faUserLock, faUserShield } from '@fortawesome/fontawesome-free-solid';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import {RestFullService} from '../../services/rest-full.service';
import {Liczba, User} from '../../util/user';

library.add(faUserLock, faUserShield);

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../common.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  user: User;
  existsUserB: boolean;

  constructor(private router: Router, private userService: UserService, private testService: RestFullService) { }

  private async delay(ms: number) {
     await new Promise(resolve => setTimeout(() => resolve(), 1000)).then(() => console.log('fired'));
  }

  ngOnInit() {
    this.userService.LogIn('admin');
    this.router.navigate(['/chat/2']);
  }

  loginUser(e) {
    e.preventDefault();
    this.username = e.target.elements[0].value;
    this.password = e.target.elements[1].value;


    if (this.username.length !== 0) {   // przy pustym loginie sie sypie
      this.testService.getExistsUserWithName(this.username.toString())    // REST!!! 50
        .forEach(x => {
          this.existsUserB = x.value;
        });

      this.delay(50).then(any => {                        //  DELAY 50 START

        if (this.existsUserB === true) {
              this.testService.getUserWithName(this.username.toString())                          //  REST!!! 100
                .forEach(x => {
                  this.user = new User(x.id, x.login, x.password, x.birthDate, x.description, x.sex, x.sexPreference, x.avgRate,
                    x.acceptedRateDifference, x.acceptedYearDifference, x.acceptedDistance, x.latitude, x.longitude, x.photos);
                    console.log('User downloaded: ' + this.user);
                });

              this.delay(100).then(any2 => {                                         //  DELAY 100 START
                if (this.username.toString() === this.user.login.toString() &&
                  this.password.toString() === this.user.password.toString() ) {
                  console.log('<' + this.username + '> LOGGED IN ');
                  this.userService.LogIn(this.username.toString());
                  this.router.navigate(['/refresh']);
                } else {
                  console.log('ERROR: User login and password is incorrect: ' + this.username + ' | ' + this.password);
                }
              });                                                                                  //  DELAY 100 END
          console.log('User: <' + this.username + '> exists.');

        } else {
          console.log('ERROR: User: <' + this.username + '> does not exists.');
        }
      });                                                                //  DELAY 50 END

      // backdoor for admin
      if (this.username === 'admin' && this.password === 'admin') {
        this.userService.username = this.username;
        this.userService.LogIn('admin');
        console.log('<' + this.username + '> LOGGED IN ');
        // console.log(this.username, this.password);
        this.router.navigate(['/refresh']);

      }// backdor_end

    } else {
      console.log('ERROR: Login is not specified');
    }

  }

}
