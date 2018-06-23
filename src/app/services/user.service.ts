import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Person} from '../util/person';
import {User} from '../util/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get username(): string {
    return this._username;
  }// localhost/users/id_users
  //

  set username(value: string) {
    this._username = value;
  }

  private _username: string;
  private isLogged: boolean;

  constructor() {this.isLogged = false; }

  public isLoggedIn(): boolean {
    return this.isLogged;
  }

  public LogIn(): void {
    this.isLogged = true;
  }

  public LogOut(): void {
    this.isLogged = false;
  }


}
