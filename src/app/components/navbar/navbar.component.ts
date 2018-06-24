import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { library } from '@fortawesome/fontawesome';
import { faHeartbeat, faCogs, faUsers } from '@fortawesome/fontawesome-free-solid';
import { UserService } from '../../services/user.service';

library.add(faHeartbeat, faCogs, faUsers);

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', '../../common.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
  }

  newLogIn(e) {
    e.preventDefault();
    console.log('<' + this.userService.username + '> LOGGOUT');
    this.userService.LogOut();
    this.router.navigate(['/login']);
  }

}
