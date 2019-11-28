import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';


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
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(email, password): void{
    if(email == 'thongnguyen@gmail.com' && password == 'Thongnguyen'){
      this.router.navigate(['/admin/main']);
    }
    else{
      console.log('Login failed');
    }
  }

}
