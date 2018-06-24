import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Bool, Liczba, User} from '../util/user';
import {Gender} from '../util/gender.enum';
import {Observable} from 'rxjs';
import {RegisterUser} from '../util/registerUser';
import {RequestOptions, ResponseContentType} from '@angular/http';
import {catchError, map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class RestFullService {
  httpOptions;
  constructor(private http: HttpClient) {}

  // getAllUsers() {
  //   return this.http.get(`http://localhost:8080/users/`)
  //     .subscribe(data => {
  //       console.log('GOT IT!', data);
  //     });
  // }

  getUserWithId(id: number) { // return user for his id in db
    return this.http.get<User>(`http://localhost:8080/users/` + id);
  }
  getUserWithName(name: string) {  // return user by his login
    return this.http.get<User>(`http://localhost:8080/users/search/findByLogin/` + name);
  }


  getExistsUserWithId(id: number) { // return true/false
    return this.http.get<Bool>(`http://localhost:8080/exists/` + id);
  }
  getExistsUserWithName(name: string) { // return true/false
    return this.http.get<Bool>(`http://localhost:8080/users/loginExists/` + name);
  }


  getIDforUser(name: string): Observable<Liczba> {  // return id in db for user_login
    return this.http.get<Liczba>(`http://localhost:8080/users/search/getIDbyLogin/` + name);
  }



  getCanLogInWithCredentials(login: string, password: string) {
    return this.http.get(`http://localhost:8080/users/login/`)
      .subscribe(data => {
        console.log('GOT IT!', data);
      });
  }

  registerUser(user: RegisterUser) {   // registers new User in DB
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('http://localhost:8080/users',  JSON.stringify(user), this.httpOptions)
      .subscribe(data => console.log(data));
  }



  // updateUser(user: User) {   // updates user id with new User values
  //   return this.http.put(`http://localhost:8080/users/`  + user.id, user)
  //     .subscribe(data => {
  //       console.log('PUT IT!', data);
  //     });
  // }
  //
  // delete(id: number) {
  //   return this.http.delete(`http://localhost:8080/users/` + id)
  //     .subscribe(data => {
  //     console.log('DELETE IT!', data);
  //   });
  // }
}
