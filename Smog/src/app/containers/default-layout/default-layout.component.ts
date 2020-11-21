import {Component} from '@angular/core';
import { DataService } from '../../services/dataservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  usertype: string;
  constructor(private dataservice: DataService) {
  }

  ngOnInit(): void {
    this.usertype = this.dataservice.getAdmin();
  }
}
