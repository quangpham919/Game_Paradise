import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';

import {MatTableDataSource,MatPaginator} from '@angular/material'
import {MatSort} from '@angular/material/sort';
import{GameService} from '../../../services/game.service';
import {game} from '../../../game.model';



@Component({
  selector: 'app-game-configure',
  templateUrl: './game-configure.component.html',
  styleUrls: ['./game-configure.component.css']
})
export class GameConfigureComponent implements OnInit {

  game_to_display : any = [];
  columns_to_display = ['Title','Platform','Genre','Rating','Publisher','Release','Status','Action'];
  dataSource: MatTableDataSource<game>;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  
  constructor(private gameService: GameService, private router : Router) { 
  this.fetchGame();
  }
  ngOnInit() {
   
  }

  fetchGame(){
    this.gameService  
    .getGames()
    .subscribe((data : game[])=>{
      this.game_to_display = data;
      this.dataSource = new MatTableDataSource<game>(this.game_to_display as any);
      this.dataSource.paginator =this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  editGame(id){
    this.router.navigate([`/admin/update_game/${id}`]);
  }

 

  deleteGame(id){
    this.gameService.deleteGame(id).subscribe(()=>{
      this.fetchGame();
    });
  }

  //Apply filter for filter bar in html page
  applyFilter(value: String){
    this.dataSource.filter = value.trim().toLowerCase();
  }

}
