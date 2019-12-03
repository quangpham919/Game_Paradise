import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MatToolbarModule, MatFormFieldModule, MatInputModule, 
        MatOptionModule, MatSelectModule, MatIconModule,
        MatButtonModule, MatCardModule, MatTableModule,
        MatDividerModule,MatSnackBarModule, MatPaginatorModule, 
        MatTabsModule, MatProgressSpinnerModule} from '@angular/material';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerRankingComponent } from './components/guest/player-ranking/player-ranking.component';
import { JoinGameComponent } from './components/guest/join-game/join-game.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminMainPageComponent } from './components/admin/admin-main-page/admin-main-page.component';
import { AddPlayerComponent } from './components/admin/add-player/add-player.component';
import { EditPlayerComponent } from './components/admin/edit-player/edit-player.component';
import { GameConfigureComponent } from './components/admin/game-configure/game-configure.component';
import { AdminRegisterComponent } from './components/admin/admin-register/admin-register.component'
// import { AddGameComponent } from './components/admin/add-game/add-game.component';
// import { UpdateGameComponent } from './components/admin/update-game/update-game.component';


import {PlayerService} from './services/player.service';
import { AuthenticationService } from './services/authentication.service';
import { GameService } from './services/game.service';
import { AppRoutingModule } from './app-routing.module';
import { UpdateGameComponent } from './components/admin/update-game/update-game.component';
import { AddGameComponent } from './components/admin/add-game/add-game.component';
import { AuthInterceptor } from './services/auth-interceptor';
import { ErrorInterceptor } from './error-interceptor';
import { AuthGuard } from './services/auth.guard';
;


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTabsModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PlayerRankingComponent,
    JoinGameComponent,
    AdminLoginComponent,
    AdminMainPageComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    GameConfigureComponent,
    UpdateGameComponent,
    AdminRegisterComponent,
    AddGameComponent
  ],
  providers: [PlayerService, GameService, AuthenticationService,
              {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}, AuthGuard,
              {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
