import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
// import ( first ) from 'rxjs/operators';
import { Router } from '@angular/router';


//ref: https://www.mtutorial.com/angular-login-logout-registration-example-php-api


@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit{
  angForm: FormGroup;
  // , private dataService: DataserviceService,
  constructor(private fb: FormBuilder, private router: Router) {
    this.angForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern("[A-Za-z0-9!@#$^&*]*")]]
    });
  }

  ngOnInit(){}

  postdata(angForm1: NgForm){
    if (angForm1.value.username === "admin" && angForm1.value.password == "admin"){
      this.router.navigate(["/dashboard"]);
    }
  }
  // {
  //   this.dataService.userlogin(angForm1.value.username, angForm1.value.password)
  //     .pipe(first())
  //     .subscribe(
  //         data => {
  //           const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/dashboard';
  //           this.router.navigate([redirect]);
  //         },
  //         error => {
  //           alert("Username or password incorrect")
  //         }
  //     );
  // // }
  get username() { return this.angForm.get('username');}
  get password() { return this.angForm.get('password');}
 }
