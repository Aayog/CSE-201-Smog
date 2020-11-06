import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';

  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let gameLibrary: HTMLElement;

  beforeEach(() => {
      TestBed.configureTestingModule({
          declarations: [DashboardComponent],
          imports: [ ReactiveFormsModule ]
      });
      fixture = TestBed.createComponent(DashboardComponent);
      
  });
  it('should display game library', () => {
      component = fixture.componentInstance;
      gameLibrary = fixture.nativeElement.querySelector('#game-library');
      expect(gameLibrary).toBeTruthy();
  })