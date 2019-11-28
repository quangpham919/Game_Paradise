import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../../player.service';
import {GameService} from '../../../game.service';
import {game} from '../../../game.model';
import {player} from '../../../player.model';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-join-game',
  templateUrl: './join-game.component.html',
  styleUrls: ['./join-game.component.css']
})
export class JoinGameComponent implements OnInit {
  id : String;
  Player : any ={};
  joinGame: FormGroup;
  listOfGames: game[];

  constructor(private gameService: GameService, private playerService: PlayerService, private router: Router, private route: ActivatedRoute, private snackBar : MatSnackBar, private formBuilder: FormBuilder) {
      this.fetchGame();
      this.joinGame = this.formBuilder.group({
          name:[''],
          ranking:[''],
          score:[''],
          time:[''],
          favGame:[''],
          game_played:['',Validators.required]
      })
   }
   
  ngOnInit() {
    
    this.route.params.subscribe(params =>{
        this.id = params.id;
        this.playerService.getPlayerById(this.id).subscribe(res =>{
            this.Player = res;
        })

    })
  }

  fetchGame(){
       this.gameService  
       .getGames()
       .subscribe((data : game[])=>{
       this.listOfGames = data;  
      
    })

  }

  JoinGame(gameTitle){
    let status = "Unavailable";
    this.playerService.joinGame(status,gameTitle,this.id).subscribe(()=>{
      this.router.navigate(['/gamelobby']);
      this.snackBar.open("Please waitting to load game !!!","OK", {
        duration : 3000
      });
    });
  }

}

