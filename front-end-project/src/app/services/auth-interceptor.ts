import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    // Interceptor works a lot like middleware
    // Next allows us to leave the interceptor and execute the next code
    constructor(private authService: AuthenticationService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        const authToken = this.authService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('authorization', "Bearer " + authToken)
        });
        return next.handle(authRequest);
     }
}