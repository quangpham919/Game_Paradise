import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private token: string;
  private isAuthenticated = false;
  private authStatusListener = new Subject<boolean>();
  private tokenTimer: any;

  getToken(){
    return this.token;
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }

  getAuthStatus(){
    return this.isAuthenticated;
  }

  uri = 'http://localhost:4000/api/admin';
  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {
    return this.http.post<{token: string, expiresIn: number}>(`${this.uri}/login`, {email, password})
                    .subscribe(res => {
                      const token = res.token;
                      this.token = token;
                      if(token){
                        const expiresInDuration = res.expiresIn;
                        this.setAuthTimer(expiresInDuration);
                        this.isAuthenticated = true;
                        this.authStatusListener.next(true);
                        const now = new Date();
                        const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                        this.saveAuthData(token, expirationDate);
                        console.log(expirationDate);
                        this.router.navigate(['/admin/main']);
                      }
                    }, error => {
                      this.authStatusListener.next(false);
                    });      
  }

  register(name, email, password){
    return this.http.post(`${this.uri}/login`,{name, email, password}).subscribe(() =>{
        this.router.navigate(['/admin/main']);
    }, error => {
      this.authStatusListener.next(false);
    });              
  }

  autoAuthUser(){
    const authInformation = this.getAuthData();
    if(!authInformation){
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    // Check if token is already expired
    if(expiresIn > 0){
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }

  logout(){
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.router.navigate(['/']);
    this.clearAuthData();
    clearTimeout(this.tokenTimer);
  }

private setAuthTimer(duration: number){
  console.log("Setting timer: "+duration);
  this.tokenTimer = setTimeout(() => {
    this.logout();
 },duration * 1000); //setTimeOut works with millisecond
}

  private saveAuthData(token: string, expirationDate: Date){
    localStorage.setItem('token',token);
    localStorage.setItem('expiration', expirationDate.toISOString())
  }

  private clearAuthData(){
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
  }

  private getAuthData(){
    const token = localStorage.getItem('token');
    const expirationDate = localStorage.getItem('expiration');
    if(!token || !expirationDate){
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expirationDate)
    }
  }
}
