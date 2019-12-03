import { Component, OnInit } from '@angular/core';
import {GameService} from '../../../services/game.service';
import {FormGroup,FormBuilder, Validator, Validators} from '@angular/forms';
import {Router} from'@angular/router';
import { game } from '../../../game.model';



@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {
  createForm : FormGroup;
  constructor(private gameService : GameService, private router: Router, private formBuilder: FormBuilder) {
    this.createForm = this.formBuilder.group({
      title: ['',Validators.required],
      platform:['',Validators.required],
      genre: ['',Validators.required ],
      rating:['',Validators.required],
      publisher : ['',Validators.required],
      release:['',Validators.required],
      status:['',Validators.required]
  });
   }

  ngOnInit() {
  }
  addGame(title, platform, genre, rating, publisher, release, status){
    this.gameService.addGame(title,platform, genre, rating, publisher, release, status);
  }
}
