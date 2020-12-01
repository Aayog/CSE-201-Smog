import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Game } from '../models/Game';

// Filter games https://stackoverflow.com/questions/40678206/angular-2-filter-search-list

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {
  redirectUrl: string;
 
  baseUrl:string = "https://100.24.132.17/api/";

  games: Game[];

  constructor(private httpsClient : HttpClient) { }
  
  getAllGames(): Observable<Game[]> {
    return this.httpsClient.get(`${this.baseUrl}game.php`).pipe(
      map((res) => {
          this.games = res['data'];
          return this.games;
        }
      )
    );
  }
}
