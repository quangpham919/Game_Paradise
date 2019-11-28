import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../../player.service';
import {GameService} from '../../../game.service';
import {game} from '../../../game.model';
import {player} from '../../../player.model';
import {Router,ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  id:String;
  Player : any={};
  updateForm: FormGroup;
  player_ranking: Number[];
  old_ranking: Number;
  old_favGame: String;
  old_status: String;
  old_gamePlayed: String;
  listOfGames:game[];
  
  
  constructor(private gameService : GameService, private playerService : PlayerService, private router: Router,private route: ActivatedRoute, private snackBar : MatSnackBar, private formBuilder: FormBuilder ) { 
    this.player_ranking=[1,2,3,4,5,6,7,8,9,10];
    this.createForm();
    this.fetchGame();
  }

  createForm(){
    this.updateForm = this.formBuilder.group({
      name: ['',Validators.required],
      ranking:['',Validators.required],
      score: ['', Validators.required],
      favGame:['',Validators.required],
      time : ['',Validators.required],
      game_played:['',Validators.required],
      status:['',Validators.required]
    });
  }


  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params.id;
      this.playerService.getPlayerById(this.id).subscribe(res =>{
        console.log(res);
        this.Player = res;
        this.updateForm.get('name').setValue(this.Player.name);
        this.updateForm.get('ranking').setValue(this.Player.ranking);
        this.updateForm.get('score').setValue(this.Player.score);
        this.updateForm.get('time').setValue(this.Player.time);
        this.updateForm.get('favGame').setValue(this.Player.favGame);
        this.updateForm.get('status').setValue(this.Player.status);
        this.updateForm.get('game_played').setValue(this.Player.status);
        this.old_ranking = this.Player.ranking;
        this.old_status = this.Player.status;
        this.old_favGame = this.Player.favGame;
        this.old_gamePlayed = this.Player.gamePlayed;
      });
      
    });

    
  }

  fetchGame(){
    this.gameService  
    .getGames()
    .subscribe((data : game[])=>{
      this.listOfGames = data;  
    });
  }

  updatePlayer(name,ranking,score,time,status,favGame,gamePlayed){
    
    this.playerService.updatePlayer(name,ranking,score,time,status,favGame,this.id,gamePlayed).subscribe(()=>{
      this.snackBar.open("Player has been updated successfully!!!", "OK", {
        duration: 3000
      });
      this.router.navigate(['/adminMainPage']);
    });
  }
}
