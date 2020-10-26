import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  redirectUrl: string;
 
  baseUrl:string = "http://localhost:8000";

@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }

  public userlogin(username, password) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { username, password })
        .pipe(map(Usermodule => {
            this.setToken(User[0].username);
            this.getLoggedInName.emit(true);
            return User;
            }
        )
    );
}

public userregistration(username, password, email) {
  return this.httpClient.post<any>(this.baseUrl + '/registration.php', { username, password, email })
      .pipe(map(User => {
          return User;
      }));
}
//token
setToken(token: string) {
  localStorage.setItem('token', token);
}
 
getToken() {
  return localStorage.getItem('token');
}
 
deleteToken() {
  localStorage.removeItem('token');
}
 
isLoggedIn() {
  const usertoken = this.getToken();
  if (usertoken != null) {
    return true
  }
  return false;
}
 
}
 