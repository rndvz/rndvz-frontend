import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {log} from 'util';
import {User} from '../util/user';

@Injectable({
  providedIn: 'root'
})
export class RestFullService {

  constructor(private http: HttpClient) {
  }


  getAllUsers() {
    return this.http.get(`http://localhost:8080/users/`)
      .subscribe(data => {
        console.log('GOT IT!', data);
      });
  }

  getIDforUserName(name: string) {  // return id in db for user_login
    return this.http.get(`http://localhost:8080/users/` + name)
      .subscribe(data => {
        console.log('GOT IT!', data);
      });
  }

  canLogInWithCredentials(login: string, password: string) {  // return id in db for user_login
    return this.http.get(`http://localhost:8080/login/` + login + `/` + password)
      .subscribe(data => {
        console.log('GOT IT!', data);
      });
  }

  getUserById(id: number) { // return user for his id in db
    return this.http.get(`http://localhost:8080/users/` + id)
      .subscribe(data => {
        console.log('GOT IT!', data);
      });
  }

  registerUser(user: User) {   // registers new User
    return this.http.post(`http://localhost:8080/users/register`, user)
      .subscribe(data => {
      console.log('POST IT!', data);
    });
  }

  updateUser(user: User) {   // updates user id with new User values
    return this.http.put(`http://localhost:8080/users/`  + user.id, user)
      .subscribe(data => {
      console.log('PUT IT!', data);
    });
  }

  delete(id: number) {
    return this.http.delete(`http://localhost:8080/users/` + id)
      .subscribe(data => {
      console.log('DELETE IT!', data);
    });
  }
}
