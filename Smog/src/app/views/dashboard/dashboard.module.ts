import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { GameCardsComponent } from '../game-cards/game-cards.component';
import { CommonModule } from '@angular/common';
import { GameFilterPipe } from '../game-cards/gamefilterpipe';

@NgModule({
  imports: [
    FormsModule,
    DashboardRoutingModule,
    ChartsModule,
    CommonModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
  ],
  declarations: [ DashboardComponent, GameCardsComponent, GameFilterPipe ],
  exports: [GameFilterPipe]
})
export class DashboardModule { }
