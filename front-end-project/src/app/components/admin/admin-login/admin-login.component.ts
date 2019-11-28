import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {LoginService} from '../../../login.service';
import { Router } from '@angular/router';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';


export class CustomErrorMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})


export class AdminLoginComponent implements OnInit {
  hide = true;
  // Create an email form control
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
   // Create an password form control
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.minLength(8)
  ]);

  // Create an instance of CustomErrorMatcher class
  matcher = new CustomErrorMatcher();


  email: String;
  password: String;
  constructor(private router: Router, private loginService:LoginService) { }

  ngOnInit() {
  }

  login(email, password){
    console.log(email + ' ' + password);
    this.loginService.login(email,password)
    this.router.navigate(['/admin/main'])
  };
}
