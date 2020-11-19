import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Comment } from '../models/Comment';

// Filter games https://stackoverflow.com/questions/40678206/angular-2-filter-search-list

@Injectable({
  providedIn: 'root'
})
export class CommentserviceService {
  redirectUrl: string;
 
  baseUrl:string = "https://34.204.91.132/api";

  comments: Comment[];

  constructor(private httpClient : HttpClient) { }
  
  getAllComments(): Observable<Comment[]> {
    return this.httpClient.get(`${this.baseUrl}/comments.php`).pipe(
      map((res) => {
          this.comments = res['data'];
          return this.comments;
        }
      )
    );
  }
}