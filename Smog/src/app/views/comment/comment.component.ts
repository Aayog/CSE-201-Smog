import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Comment } from '../../models/Comment';
import { Game } from '../../models/Game';
import { DataService } from '../../services/dataservice.service'
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
  comment: string;
  commentSubmission: Comment;
  
  constructor(public commentService: CommentserviceService, game: GameCardsComponent, private dataService: DataService) { }
  @Input() title: string;
  ngOnInit(): void {
    this.getComments();
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
  submitComment(){
    this.commentSubmission = new Comment(this.comment, this.dataService.getToken(), this.title);
    this.commentService.addComment(this.commentSubmission);
    this.getComments();
  }
}

