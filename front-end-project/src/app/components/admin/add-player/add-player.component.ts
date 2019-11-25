import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../../player.service';
import {GameService} from '../../../game.service';
import {FormGroup,FormBuilder, Validator, Validators} from '@angular/forms';
import {Router} from'@angular/router';
import { game } from '../../../game.model';




@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

    createForm: FormGroup;
    player_ranking: Number[];
    listOfGames: game[];
  
  constructor(private gameService : GameService, private playerService: PlayerService, private formBuilder: FormBuilder, private router: Router) {
     this.player_ranking = [1,2,3,4,5,6,7,8,9,10];
     this.fetchGame();
     this.createForm = this.formBuilder.group({
        name: ['',Validators.required],
        ranking:['',Validators.required],
        score: ['', ],
        favGame:['',Validators.required],
        time : [''],
        status:['',]
    });
   }
  
   addPlayer(name,ranking,score,time,status,favGame){
     this.playerService.addPlayer(name,ranking,score,time,status,favGame).subscribe(()=>{
     this.router.navigate(['/adminMainPage']);
     });
   }
   
   fetchGame(){
    this.gameService  
    .getGames()
    .subscribe((data : game[])=>{
      this.listOfGames = data;  
      console.log("Requested game....");
      console.log(this.listOfGames);
    });
  }
  ngOnInit() {
  }

}
