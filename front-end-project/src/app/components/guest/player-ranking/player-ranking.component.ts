import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';
import {player} from '../../../player.model'
import {game} from '../../../game.model'
import {GameService} from '../../../game.service';
import {PlayerService} from '../../../player.service';


@Component({
  selector: 'app-player-ranking',
  templateUrl: './player-ranking.component.html',
  styleUrls: ['./player-ranking.component.css']
})
export class PlayerRankingComponent implements OnInit {
  columns_to_display : String[] = ['name', 'ranking', 'score', 'time', 'game_played', 'status','button'];
  dataSource: MatTableDataSource<player>;
  player:any={};
  

  constructor(private playerService : PlayerService, private gameService: GameService , private router: Router, private route: ActivatedRoute) {

  }
 
  ngOnInit() {
    this.fetchTable();
  }

  fetchTable(){
    this.playerService.getPlayers().subscribe((data: MatTableDataSource<player>)=>{
        this.dataSource = data;
        console.log("Requested players....");
        console.log(this.dataSource);
    });
  }

  joinGame(id){
    this.router.navigate([`/join_game/${id}`]);
  }

  
}
