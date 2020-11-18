import { Injectable, Output, EventEmitter } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Request } from '../models/Request';
import { DataService } from './dataservice.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  redirectUrl: string;
 
  baseUrl:string = "https://34.204.91.132/api/";
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  constructor(private httpClient : HttpClient, private dataService: DataService) { }
  
  public gamerequest(title, desc) {
    const username = this.dataService.getToken();
    return this.httpClient.post<any>(this.baseUrl + 'gamerequests.php', { title, desc, username });
  }
}
