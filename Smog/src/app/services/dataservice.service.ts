import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';
 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  redirectUrl: string;
 
  baseUrl:string = "localhost/";

@Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient) { }

  public userlogin(userName, Password) {
    return this.httpClient.post<any>(this.baseUrl + '/login.php', { userName, Password })
        .pipe(map(User => {
            this.setToken(User[0].userName);
            this.getLoggedInName.emit(true);
            return User;
            }
        )
    );
}

public userregistration(userName, Password, Email) {
  return this.httpClient.post<any>(this.baseUrl + '/registration.php', { userName, Password, Email })
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
 