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
import { AdminRegisterComponent } from './components/admin/admin-register/admin-register.component';
import { UpdateGameComponent } from './components/admin/update-game/update-game.component';
import { AddGameComponent } from './components/admin/add-game/add-game.component';
import { AuthGuard } from './services/auth.guard';


const appRoutes: Routes = [
  {path: '**', redirectTo: '404'},
  {path: 'admin/login', component: AdminLoginComponent},
  {path:'admin/register',component:AdminRegisterComponent, canActivate: [AuthGuard]},
  {path:'admin/add_game',component:AddGameComponent, canActivate: [AuthGuard]},
  {path: 'admin/update_game/:id',component: UpdateGameComponent, canActivate: [AuthGuard]},
  {path: 'admin/add-player', component: AddPlayerComponent, canActivate: [AuthGuard]},
  {path: 'admin/update_player/:id', component: EditPlayerComponent, canActivate: [AuthGuard]},
  {path: 'admin/main', component: AdminMainPageComponent, canActivate: [AuthGuard]},
  {path:'join_game/:id',component:JoinGameComponent},
  {path:'gamelobby',component:PlayerRankingComponent},

  {path: '', redirectTo: '/gamelobby', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  exports:[ RouterModule ]
})
export class AppRoutingModule { }
