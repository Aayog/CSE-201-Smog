import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Comment } from '../../models/Comment';
import { Game } from '../../models/Game';
import { CommentserviceService } from '../../services/commentservice.service';
import { GameCardsComponent } from '../game-cards/game-cards.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  comments: Comment[];
  error: string;
  
  constructor(public commentService: CommentserviceService, game: GameCardsComponent) { }
  @Input() title: string;
  ngOnInit(): void {
    this.reload();
  }
  getComments(): void {
    this.commentService.getAllComments(this.title).subscribe(
      (res: Comment[]) => {
          this.comments = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  reload(){
    this.getComments();
  }
}

