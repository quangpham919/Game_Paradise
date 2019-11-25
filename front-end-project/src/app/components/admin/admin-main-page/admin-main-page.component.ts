import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';


import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';


import {player} from '../../../player.model'
import {game} from '../../../game.model'

import {GameService} from '../../../game.service';
import {PlayerService} from '../../../player.service';



@Component({
  selector: 'app-admin-main-page',
  templateUrl: './admin-main-page.component.html',
  styleUrls: ['./admin-main-page.component.css']
})
export class AdminMainPageComponent implements OnInit {

  columns_to_display: string[] =['name','ranking', 'score','time','game_played','status','action'];
  dataSource: MatTableDataSource<player>;
  isShow : false;

  constructor(private playerService: PlayerService, private router : Router, private gameService : GameService) {
      
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
    this.router.navigate([`/update_player/${id}`]);
  }

  deletePlayer(id){
    this.playerService.deletePlayer(id).subscribe(()=>{
      this.fetchPlayer();
    });
  }
 
}

