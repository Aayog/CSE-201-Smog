import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GameCardsComponent } from '../game-cards/game-cards.component';
import { CommonModule } from '@angular/common';
import { GameFilterPipe } from '../game-cards/gamefilterpipe';
import { CommentComponent } from '../comment/comment.component';
import { UserCommentComponent } from '../user-comment/user-comment.component';

/*
DashboardModule
Imports the angular templates, the angular forms, the chart modules, BsDropdownModule, and a ButtonsModule from elsewhere.
Imports the to other Dashboard classes that we wrote earlier to put them all in one location.  Declares a new module and assigns it.
Exports them all as one DashboardModule class
*/
@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    CommonModule,
    BsDropdownModule,
  ],
  declarations: [ DashboardComponent, GameCardsComponent, GameFilterPipe, CommentComponent, UserCommentComponent ],
  exports: [GameFilterPipe]
})
export class DashboardModule { }
