import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule}from '@angular/forms';

import {MatToolbarModule,MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule,MatIconModule,MatButtonModule, MatCardModule,MatTableModule,MatDividerModule,MatSnackBarModule,MatTabsModule} from '@angular/material';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerRankingComponent } from './components/guest/player-ranking/player-ranking.component';
import { JoinGameComponent } from './components/guest/join-game/join-game.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminMainPageComponent } from './components/admin/admin-main-page/admin-main-page.component';
import { AddPlayerComponent } from './components/admin/add-player/add-player.component';
import { EditPlayerComponent } from './components/admin/edit-player/edit-player.component';
import { GameConfigureComponent } from './components/admin/game-configure/game-configure.component';

import{PlayerService} from './player.service';
import{GameService} from './game.service';

const routes: Routes= [

  {path: 'add_player', component:AddPlayerComponent},
  {path: 'update_player/:id',component:EditPlayerComponent},
  {path:'adminMainPage', component:AdminMainPageComponent},
  {path: '', redirectTo: 'adminMainPage',pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    PlayerRankingComponent,
    JoinGameComponent,
    AdminLoginComponent,
    AdminMainPageComponent,
    AddPlayerComponent,
    EditPlayerComponent,
    GameConfigureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
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
    MatDividerModule,
    MatSnackBarModule,
    MatTabsModule

  ],

  providers: [PlayerService,
              GameService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
