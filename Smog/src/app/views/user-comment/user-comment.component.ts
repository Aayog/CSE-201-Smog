import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../services/dataservice.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentserviceService } from '../../services/commentservice.service';
import { Comment } from '../../models/Comment';
import { Router } from '@angular/router';
import { GameCardsComponent } from '../game-cards/game-cards.component';
@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.css']
})
export class UserCommentComponent implements OnInit {
  userName: string;
  comment: string;
  @Input() title: string;
  @Input() parent: GameCardsComponent;

  constructor(private dataService: DataService, private commentService: CommentserviceService, private router: Router) { }

  ngOnInit(): void {
    this.userName = this.dataService.getToken();
  }
  submitComment(){
    this.commentService.postComment(new Comment(this.comment, this.userName, this.title));
    this.comment = ''; 
    this.parent.ngOnInit();
  }

}
