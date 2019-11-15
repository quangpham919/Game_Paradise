import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../../player.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

}
