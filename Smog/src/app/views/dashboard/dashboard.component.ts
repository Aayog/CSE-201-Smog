import { Component, OnInit } from '@angular/core';
/*
Dashboard Components
Inputs the OnInit components,a style sheet, and custom CustomTooltips
uses these to create a visual interface for the user. This dashboard will be underneath all of the other components. This class definition will be used in the dashboard module class.
Exports the class so that it visible in the dashboard module class.
*/
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  
  ngOnInit(): void {
    
  }
}
