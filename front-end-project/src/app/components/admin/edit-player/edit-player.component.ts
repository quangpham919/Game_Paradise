import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../../player.service';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.css']
})
export class EditPlayerComponent implements OnInit {

  constructor(private playerService : PlayerService) { }

  ngOnInit() {
  }

}
