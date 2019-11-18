import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../../player.service';
import {FormGroup,FormBuilder, Validator, Validators} from '@angular/forms';
import {Router} from'@angular/router';




@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

    createForm: FormGroup;
    player_ranking: Number[];
    player_status: String[];
    today = Date.now();

  constructor(private playerService: PlayerService, private formBuilder: FormBuilder, private router: Router) {
     this.player_ranking = [1,2,3,4,5,6,7,8,9,10];
     this.player_status = ['Available','Unavailable'];
     this.createForm = this.formBuilder.group({
      name: ['',Validators.required],
      ranking:['',Validators.required],
      score: ['', Validators.required]
    });
   }

   addPlayer(name,ranking,score,time,favoGame,status){
     console.log(name);
     console.log(score);
     console.log(ranking);
     this.playerService.addPlayer(name, ranking, score, time, favoGame, status).subscribe(()=>{
     this.router.navigate(['/adminMainPage']);
     });
   }


  ngOnInit() {
  }

}
