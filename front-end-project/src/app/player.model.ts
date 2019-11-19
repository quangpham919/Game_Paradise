import { game } from './game.model';

export interface player{
  id: String;
  name: String;
  ranking : Number;
  score: Number;
  time: String;
  status: String;
  favGame:String;
  gamePlayed: String[];
}
