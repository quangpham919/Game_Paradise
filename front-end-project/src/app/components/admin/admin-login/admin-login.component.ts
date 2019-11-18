import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  email: String;
  password: String;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(email, password): void {
    if( email == 'admin@email.com' && password == 'Thong17'){
      this.router.navigate(['/admin/home']);
    }
    else{
      alert('Invalid credentials');
    }
  }

}
