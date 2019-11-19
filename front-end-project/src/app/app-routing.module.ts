import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerRankingComponent } from './components/guest/player-ranking/player-ranking.component';
import { JoinGameComponent } from './components/guest/join-game/join-game.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminMainPageComponent } from './components/admin/admin-main-page/admin-main-page.component';
import { AddPlayerComponent } from './components/admin/add-player/add-player.component';
import { EditPlayerComponent } from './components/admin/edit-player/edit-player.component';
import { GameConfigureComponent } from './components/admin/game-configure/game-configure.component';


const appRoutes: Routes = [
  {path: '**', redirectTo: '404'},
  {path: 'admin/add-player', component: AddPlayerComponent},
  {path: 'admin/login', component: AdminLoginComponent},
  {path: 'admin/update_player/:id', component: EditPlayerComponent},
  {path: 'admin/main', component: AdminMainPageComponent},
  {path: '', redirectTo: '/admin/main', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
