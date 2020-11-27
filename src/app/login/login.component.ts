import { Component, OnInit,Input } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  password: any;
  username: string ;


  constructor(public common: CommonService, public formBuilder: FormBuilder, public router: Router) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl([null, [Validators.required]]),
      password: new FormControl([null, [Validators.required]]),
    })

  }

  ngOnInit() {

  }

  get f() {
    return this.loginForm.controls;
  }
  loginAction() {
     //this.router.navigateByUrl('adminDashboard');
     this.router.navigate(['/adminDashboard', this.username,this.password]);
 
  }
}
