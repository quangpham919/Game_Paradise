import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';


import {MatTableDataSource,MatPaginator,MatSort} from '@angular/material';



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
  Player : any =[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private playerService: PlayerService, private router : Router, private gameService : GameService) {
    this.fetchPlayer();
  } 

  ngOnInit() {
    
    
    }

  fetchPlayer(){
    this.playerService
        .getPlayers()
        .subscribe((data : player[])=>{
          this.Player = data;
          this.dataSource = new MatTableDataSource<player>(this.Player as any);
          this.dataSource.paginator = this.paginator;
          this.sort.active="ranking";
          this.sort.direction ='asc';
          this.dataSource.sort = this.sort;
        });
  }


  applyFilter(value: String){
    this.dataSource.filter = value.trim().toLowerCase();
  }
  
  editPlayer(id){
    this.router.navigate([`admin/update_player/${id}`]);
  }

  deletePlayer(id){
    this.playerService.deletePlayer(id).subscribe(() => {
      this.fetchPlayer();
    });
  }
}

