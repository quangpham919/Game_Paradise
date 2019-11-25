import { Component, OnInit, RootRenderer } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormGroup, FormBuilder, Validators, Form} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { GameService } from 'src/app/game.service';
import {game} from '../../../game.model';

@Component({
  selector: 'app-update-game',
  templateUrl: './update-game.component.html',
  styleUrls: ['./update-game.component.css']
})
export class UpdateGameComponent implements OnInit {

  Game: any={};
  id: String;
  updateForm : FormGroup;
  old_status: String;
  

  constructor(private gameService: GameService, private router : Router, private route: ActivatedRoute, private snackBar : MatSnackBar, private formBuilder : FormBuilder  ) {
      this.createFrom();
      
   }

   createFrom() {
     this.updateForm = this.formBuilder.group({
      title: ['',],
      platform:['',],
      genre: ['', ],
      rating:['',],
      publisher : ['',],
      release:['',],
      status : ['',]
     })
   }
  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = params.id;
      this.gameService.getGameById(this.id).subscribe(res =>{
        this.Game = res;
        this.updateForm.get('title').setValue(this.Game.title);
        this.updateForm.get('platform').setValue(this.Game.platform);
        this.updateForm.get('genre').setValue(this.Game.genre);
        this.updateForm.get('rating').setValue(this.Game.rating);
        this.updateForm.get('publisher').setValue(this.Game.publisher);
        this.updateForm.get('release').setValue(this.Game.release);
        this.updateForm.get('status').setValue(this.Game.status);
        this.old_status = this.Game.status;  
      });
    });

  }

  updateGame(title,platform, genre, rating, publisher, release, status){
     this.gameService.updateGame(title,platform, genre, rating, publisher, release, status,this.id).subscribe(()=>{
       this.router.navigate(['/adminMainPage']);
       this.snackBar.open("Game has been updated successfully!!!", "OK", {
          duration: 3000
     });
    });
  }
}




