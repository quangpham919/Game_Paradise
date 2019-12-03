import { Component, OnInit, OnDestroy } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {MatSnackBar} from '@angular/material';
import { Subscription } from 'rxjs';

export class CustomErrorMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;
  hide = true;
  // Create name form control
  nameFormControl = new FormControl('',[
    Validators.required
  ])

  // Create an email form control
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
   // Create a password form control
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})')
  ]);

  constructor(private router: Router, private authService: AuthenticationService, private snackBar : MatSnackBar) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );
  }

  register(name, email, password){
      this.isLoading = true;
      this.authService.register(name, email ,password);
  };

  ngOnDestroy() {
    this.authStatusSub.unsubscribe();
  }
}
