import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let h2: HTMLElement;

  beforeEach(() => {
      TestBed.configureTestingModule({
          declarations: [LoginComponent],
      });
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      h2 = fixture.nativeElement.querySelector('h2');
  });
  it('should display sign-up', () => {
      fixture.detectChanges();
      expect(h2.textContent).toContain('Sign up');
  })