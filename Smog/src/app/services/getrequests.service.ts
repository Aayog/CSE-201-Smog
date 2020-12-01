import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { Request } from '../models/Request';

// Filter games https://stackoverflow.com/questions/40678206/angular-2-filter-search-list

@Injectable({
  providedIn: 'root'
})
export class GetrequestsService {
  redirectUrl: string;
 
  baseUrl:string = "https://100.24.132.17/api/";
  // baseUrl:string = "https://localhost:8000/";

  requests: Request[];

  constructor(private httpsClient : HttpClient) { }
  
  getAllRequests(): Observable<Request[]> {
    return this.httpsClient.get(this.baseUrl + 'getrequests.php').pipe(
      map((res) => {
          this.requests = res['data'];
          return this.requests;
        }
      )
    );
  }

  deleteRequest(Id: string) {
    const body = JSON.stringify(Id);
    this.httpsClient.post<any>(this.baseUrl + 'deleterequest.php', body)
      .subscribe(
        msg => console.log(msg)
      );
  }

  approveRequest(Id: string) {
    const body = JSON.stringify(Id.trim());
    this.httpsClient.post<any>(this.baseUrl + 'approverequest.php', body)
      .subscribe(
        msg => console.log(msg)
      );
  }
}
