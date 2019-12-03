import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


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


export class AdminLoginComponent implements OnInit, OnDestroy {
  hide = true;
  isLoading = false;
  private authStatusSub: Subscription;
  // Create an email form control
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
   // Create a password form control
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.{8,})')
  ]);

  // Create an instance of CustomErrorMatcher class
  matcher = new CustomErrorMatcher();


  email: String;
  password: String;
  constructor(private router: Router, private authService:AuthenticationService) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  login(email, password){
    this.isLoading = true;
    this.authService.login(email, password);
  };
  ngOnDestroy(){
    this.authStatusSub.unsubscribe();
  }
}
