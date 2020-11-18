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
 
  baseUrl:string = "https://34.204.91.132/api/";

  games: Game[];

  constructor(private httpClient : HttpClient) { }
  
  getAllGames(): Observable<Game[]> {
    return this.httpClient.get(`${this.baseUrl}/game.php`).pipe(
      map((res) => {
          this.games = res['data'];
          return this.games;
        }
      )
    );
  }
}
