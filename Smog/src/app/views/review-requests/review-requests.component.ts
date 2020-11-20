import { Component, OnInit } from '@angular/core';
import { GetrequestsService } from '../../services/getrequests.service';
import { Request } from '../../models/Request';

@Component({
  selector: 'app-review-requests',
  templateUrl: './review-requests.component.html',
  styleUrls: ['./review-requests.component.css']
})
export class ReviewRequestsComponent implements OnInit {
  requests: Request[];
  error: string;

  constructor(private getrequestService: GetrequestsService) { }

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
    console.log("hmm..")
    this.getrequestService.deleteRequest(id);
    this.getAllRequests();
  }
  requestApprove(id: string) {
    console.log("approving..")
    this.getrequestService.approveRequest(id);
    this.getAllRequests();
  }
}
