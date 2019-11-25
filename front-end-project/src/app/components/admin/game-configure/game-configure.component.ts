import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {MatTableDataSource} from '@angular/material'

import{GameService} from '../../../game.service';
import {game} from '../../../game.model';



@Component({
  selector: 'app-game-configure',
  templateUrl: './game-configure.component.html',
  styleUrls: ['./game-configure.component.css']
})
export class GameConfigureComponent implements OnInit {

  columns_to_display = ['Title','Platform','Genre','Rating','Publisher','Release','Status','Action'];
  dataSource: MatTableDataSource<game>;

  constructor(private gameService: GameService, private router : Router) { }

  ngOnInit() {
    this.fetchGame();
  }

  fetchGame(){
    this.gameService  
    .getGames()
    .subscribe((data : MatTableDataSource<game>)=>{
      this.dataSource = data;  
      console.log("Requested game....");
      console.log(this.dataSource);
    });
  }

  editGame(id){
    this.router.navigate([`/update_game/${id}`]);
  }

  deleteGame(id){
    this.gameService.deleteGame(id).subscribe(()=>{
      this.fetchGame();
    });
  }



}
