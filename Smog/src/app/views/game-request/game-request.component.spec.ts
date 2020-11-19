import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameRequestComponent } from './game-request.component';

describe('GameRequestComponent', () => {
  let component: GameRequestComponent;
  let fixture: ComponentFixture<GameRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
