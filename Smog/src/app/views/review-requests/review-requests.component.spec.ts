import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRequestsComponent } from './review-requests.component';

describe('ReviewRequestsComponent', () => {
  let component: ReviewRequestsComponent;
  let fixture: ComponentFixture<ReviewRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
