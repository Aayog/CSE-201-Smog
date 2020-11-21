import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from '../../services/dataservice.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})

export class RegisterComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: DataService,private router:Router) {
 
    this.angForm = this.fb.group({
      email: ['', [Validators.required,Validators.minLength(5), Validators.email]],
      password: ['', Validators.required, Validators.minLength(5)],
      username: ['', Validators.required, Validators.minLength(5)],
      password_repeat: ['', [Validators.required, Validators.minLength(5)]],
    }
    );
   }
 
  ngOnInit() {
  }
  postdata(angForm1)
  {
    this.dataService.userregistration(angForm1.value.username, angForm1.value.password, angForm1.value.email)
      .pipe(first())
      .subscribe(
          data => {
              this.router.navigate(['login']);
          },
          error => {
            alert("Try a different email")
          });
  }
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get username() { return this.angForm.get('username'); }
  get password_repeat() { return this.angForm.get('password_repeat'); }
}
 