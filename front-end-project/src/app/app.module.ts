import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {MatToolbarModule,MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule,MatIconModule,MatButtonModule, MatButtonToggle, MatCardModule,MatTableModule,MatDividerModule,MatSnackBarModule} from '@angular/material';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerRankingComponent } from './components/guest/player-ranking/player-ranking.component';
import { JoinGameComponent } from './components/guest/join-game/join-game.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminMainPageComponent } from './components/admin/admin-main-page/admin-main-page.component';
import { AddPlayerComponent } from './components/admin/add-player/add-player.component';
import { EditPlayerComponent } from './components/admin/edit-player/edit-player.component';
import { GameConfigureComponent } from './components/admin/game-configure/game-configure.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import{PlayerService} from './player.service';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    PlayerRankingComponent,
    JoinGameComponent,
    AdminLoginComponent,
    AdminMainPageComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    GameConfigureComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    AppRoutingModule
  ],

  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }