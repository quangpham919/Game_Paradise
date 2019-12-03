import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'front-end-project';
  userIsAuthenticated = false;
  private authListenerSubs: Subscription;
  

  // Inject authService
  constructor(private authService: AuthenticationService) {}

    ngOnInit(){
      this.authService.autoAuthUser();
      this.userIsAuthenticated = this.authService.getAuthStatus();
      this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
        this.userIsAuthenticated = isAuthenticated;
      });
    }
    
    onLogout(){
      this.authService.logout();
    }

    ngOnDestroy(){
      this.authListenerSubs.unsubscribe();
    }

}
