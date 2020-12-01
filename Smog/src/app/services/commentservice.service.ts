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
 
  baseUrl:string = "https://100.24.132.17/api";

  comments: Comment[];

  constructor(private httpsClient : HttpClient) { }
  
  getAllComments(title: string): Observable<Comment[]> {
    const body = JSON.stringify(title);
    return this.httpsClient.post<any>(this.baseUrl+ '/comments.php', body).pipe(
      map((res) => {
          this.comments = res['data'];
          return this.comments;
        }
      )
    );
  }
  postComment(comment: Comment){
    const body = JSON.stringify(comment);
    return this.httpsClient.post<any>(this.baseUrl+ '/addcomment.php', body)
      .subscribe();
  }
}
