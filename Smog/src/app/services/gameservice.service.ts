import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameserviceService {
  redirectUrl: string;
 
  baseUrl:string = "http://localhost:8000";

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
