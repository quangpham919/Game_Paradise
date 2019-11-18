import {game} from './game.model';

export interface player{
  id: String;
  name: String;
  ranking: Number;
  score: Number;
  duration: String;
  games: game[];
  status: String;
}
