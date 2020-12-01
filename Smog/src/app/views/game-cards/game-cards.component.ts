import { Component, OnInit, ViewChild } from '@angular/core';
import { Game } from '../../models/Game';
import { GameserviceService } from '../../services/gameservice.service';

@Component({
  selector: 'app-game-cards',
  templateUrl: './game-cards.component.html',
  styleUrls: ['./game-cards.component.css']
})
export class GameCardsComponent implements OnInit {
  games: Game[];
  error: string;
  gameGTitle: string;
  constructor(public gameService: GameserviceService) { }

  ngOnInit(): void {
    this.getGames();
  }
  getGames(): void {
    this.gameService.getAllGames().subscribe(
      (res: Game[]) => {
          this.games = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

}
