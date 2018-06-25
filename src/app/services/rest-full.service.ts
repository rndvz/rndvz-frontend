import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Bool, Liczba, User} from '../util/user';
import {Gender} from '../util/gender.enum';
import {Observable} from 'rxjs';
import {RegisterUser} from '../util/registerUser';
import {RequestOptions, ResponseContentType} from '@angular/http';
import {catchError, map} from 'rxjs/operators';
import {copyObj} from '@angular/animations/browser/src/util';


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



  // getCanLogInWithCredentials(login: string, password: string) {
  //   this.httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   return this.http.post(`http://localhost:8080/users/login/`, JSON.stringify({login: 'a', password: 'b'}), this.httpOptions)
  //     .subscribe(data => console.log(data));
  // }

  registerUser(user: RegisterUser) {   // registers new User in DB
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('http://localhost:8080/users',  JSON.stringify(user), this.httpOptions)
      .subscribe(data => console.log(data));
  }

  uploadPhoto(id: number, photo: string[]) {   // registers new User in DB
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('http://localhost:8080/users' + id + 'upload',  JSON.stringify(photo), this.httpOptions)
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


@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
    console.log(JSON.stringify(req.headers));
    return next.handle(req);
  }
}
