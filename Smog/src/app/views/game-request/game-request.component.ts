import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';
import { DataService } from '../../services/dataservice.service';
//ref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-apiref: https://www.mtutorial.com/angular-login-logout-registration-example-php-api
@Component({
  selector: 'app-game-request',
  templateUrl: './game-request.component.html',
  styleUrls: ['./game-request.component.css']
})
export class GameRequestComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder,private gameRequestService: RequestService, private router:Router) {
 
    this.angForm = this.fb.group({
      title: ['', [Validators.required,Validators.minLength(1)]],
      desc: ['', [Validators.required,Validators.minLength(2), Validators.maxLength(500)]],
    });
   }
 
  ngOnInit() {
  }
  gamerequest(angForm1)
  {
    this.gameRequestService.gamerequest(angForm1.value.title, angForm1.value.desc)
      .subscribe(
          data => {
              this.router.navigate(['dashboard']);
          },
          error => {
            alert("Make the description a bit shorter")
          });
  }
  get title() { return this.angForm.get('title'); }
  get desc() { return this.angForm.get('desc'); }

}
