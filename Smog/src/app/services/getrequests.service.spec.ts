import { TestBed } from '@angular/core/testing';

import { GetrequestsService } from './getrequests.service';

describe('GetrequestsService', () => {
  let service: GetrequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetrequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
