import { Component, OnInit } from '@angular/core';
import { GetrequestsService } from '../../services/getrequests.service';
import { Request } from '../../models/Request';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-requests',
  templateUrl: './review-requests.component.html',
  styleUrls: ['./review-requests.component.css']
})
export class ReviewRequestsComponent implements OnInit {
  requests: Request[];
  error: string;

  constructor(private getrequestService: GetrequestsService, private router: Router) { }

  ngOnInit(): void {
    this.getAllRequests();
  }
  getAllRequests() {
    this.getrequestService.getAllRequests().subscribe(
      (res: Request[]) => {
        this.requests = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }
  requestDeny(id: string) {
    this.getrequestService.deleteRequest(id);
    this.getAllRequests();
  }
  requestApprove(id: string) {
    this.getrequestService.approveRequest(id);
    this.getAllRequests();
  }
}
