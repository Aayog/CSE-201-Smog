import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from '../../services/dataservice.service';
//ref: https://www.mtutorial.com/angular-login-logout-registration-example-php-api
/*
Register Component.
Imports infromation from the data base, and the information from the user.
Validates the user given information with the data in the database and then if there is no match, gives the user the ability to log in to the site and adds them to the database.
outputs errors if the email is incorrect.
*/
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
 