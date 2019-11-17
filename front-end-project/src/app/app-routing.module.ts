import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdminMainPageComponent } from './components/admin/admin-main-page/admin-main-page.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddPlayerComponent } from './components/admin/add-player/add-player.component';
import { EditPlayerComponent } from './components/admin/edit-player/edit-player.component';


const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'admin', component: AdminMainPageComponent},
  {path: 'add-player/:id', component: AddPlayerComponent},
  {path: 'update-player/:id', component: EditPlayerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
