import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../../player.service';
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

  constructor(private playerService : PlayerService, private router: Router,private route: ActivatedRoute, private snackBar : MatSnackBar, private formBuilder: FormBuilder ) { 
    this.player_ranking=[1,2,3,4,5,6,7,8,9,10];
    this.createForm();
    
  }
  
  createForm(){
    this.updateForm = this.formBuilder.group({
      name: ['',Validators.required],
      ranking:['',Validators.required],
      score: ['', Validators.required]
    });
  }
  

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params.id;
      console.log(this.id);
      this.playerService.getPlayerById(this.id).subscribe(res =>{
        console.log(res);
        this.Player = res;
        console.log(this.Player);
        this.updateForm.get('name').setValue(this.Player.name);
        this.updateForm.get('ranking').setValue(this.Player.ranking);
        this.updateForm.get('score').setValue(this.Player.score);

      });
    });
  }

  updatePlayer(name,ranking,score){
    this.playerService.updatePlayer(name,ranking,score,this.id).subscribe(()=>{
      this.snackBar.open("Player has been updated successfully!!!", "OK", {
        duration: 3000
      });
    });
  }
}
