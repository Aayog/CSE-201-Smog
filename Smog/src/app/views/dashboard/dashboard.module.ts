import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
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
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
