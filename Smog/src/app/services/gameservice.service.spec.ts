import { TestBed } from '@angular/core/testing';

import { GameserviceService } from './gameservice.service';

describe('GameserviceService', () => {
  let service: GameserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
