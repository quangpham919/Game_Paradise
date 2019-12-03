import { CanActivate, ActivatedRouteSnapshot,Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthenticationService, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const isAuth = this.authService.getAuthStatus();
        if (!isAuth){
            this.router.navigate(['/admin/login']);
        }
        return true
    }

}