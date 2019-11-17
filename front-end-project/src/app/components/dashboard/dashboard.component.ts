import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggle} from '@angular/material/button-toggle';
import {Router} from '@angular/router';

import {player} from '../../player.model';
import {PlayerService} from '../../player.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  columnsToDisplay: string[] =['name', 'ranking', 'score', 'time', 'games_played', 'status', 'join'];
  dataSource: MatTableDataSource<player>;

  constructor(private playerService: PlayerService, private router: Router)
  {

  }

  ngOnInit() {
    this.fetchPlayer();
  }

  fetchPlayer(){
    this.playerService
        .getPlayers()
        .subscribe((data : MatTableDataSource<player>)=>{
          this.dataSource = data;
          console.log("Requested players....");
          console.log(this.dataSource);
        });
  }

  editPlayer(id){
    this.router.navigate([`/updatePlayer/${id}`]);
  }

  deletePlayer(id){
    this.playerService.deletePlayer(id).subscribe(()=>{
      this.fetchPlayer();
    });
  }
  applyFilter(filterValue: String){
    console.log("I got "+filterValue);
    this.dataSource.filter= filterValue.trim().toLowerCase();

  }

}
