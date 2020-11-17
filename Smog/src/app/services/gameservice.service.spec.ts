import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GameserviceService } from './gameservice.service';

describe('GameserviceService', () => {
  let service: GameserviceService;
  TestBed.configureTestingModule({
    providers: 
    [GameserviceService,
     HttpClient]
  });

  beforeEach(() => {
    service = TestBed.inject(GameserviceService);
    TestBed.resetTestEnvironment();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
