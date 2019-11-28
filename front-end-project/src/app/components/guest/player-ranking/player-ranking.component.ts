import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MatTableDataSource,MatPaginator} from '@angular/material';
import {JoinGameComponent} from '../join-game/join-game.component';
import {MatSort} from '@angular/material/sort';
import {player} from '../../../player.model';
import {game} from '../../../game.model';
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
  Player_to_display: any=[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor( private playerService : PlayerService, private gameService: GameService , private router: Router, private route: ActivatedRoute) {
    this.fetchTable();
    
    
    
  }
 
  ngOnInit() {
    
  }
  
  fetchTable(){
    this.playerService
        .getPlayers()
        .subscribe((data: player[])=>{
        this.Player_to_display = data; 
        this.dataSource = new MatTableDataSource(this.Player_to_display as any);
        this.dataSource.paginator = this.paginator;
        this.sort.active="ranking";
        this.sort.direction ='asc';
        this.dataSource.sort = this.sort;
    });
  }

  applyFilter(value: String){
    this.dataSource.filter = value.trim().toLowerCase();
  }

  joinGame(id){
    this.router.navigate([`/join_game/${id}`]);
  }

  
}
