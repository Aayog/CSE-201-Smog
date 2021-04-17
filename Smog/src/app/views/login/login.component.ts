import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/dataservice.service';
import { first } from 'rxjs/operators';


//ref: https://www.mtutorial.com/angular-login-logout-registration-example-php-api
/*
LoginComponent
imports information from the database, and create a form for users to put their login information into.
Exports nothing, unless there is an error with the login information.
*/

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{
  angForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) {
    this.angForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.pattern("[A-Za-z0-9!@#$^&*]*")]]
    });
  }

  ngOnInit(){}

  postdata(angForm1){
    this.dataService.userlogin(angForm1.value.username, angForm1.value.password)
      .pipe(first())
      .subscribe(
          data => {
          const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
            this.router.navigate([redirect]);
          },
          error => {
            alert("Username or password incorrect")
          }
      );
  }
  get username() { return this.angForm.get('username');}
  get password() { return this.angForm.get('password');}
 }
