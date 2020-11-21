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

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    CommonModule,
    BsDropdownModule,
  ],
  declarations: [ DashboardComponent, GameCardsComponent, GameFilterPipe, CommentComponent ],
  exports: [GameFilterPipe]
})
export class DashboardModule { }
