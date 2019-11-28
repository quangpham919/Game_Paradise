import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  uri = 'http://localhost:4000';
  constructor(private http: HttpClient) { }

  getGames(){
    return this.http.get(`${this.uri}/games`);
  }

  getGameById(id){
    return this.http.get(`${this.uri}/game/${id}`);
  }

  addGame(title, platform, genre, rating, publisher, release, status) {
    const game_to_add = {
        title: title,
        platform: platform,
        genre: genre,
        rating: rating,
        publisher: publisher,
        release: release
    };
    return this.http.post(`${this.uri}/game/add`, game_to_add);
  }


  updateGame(title, platform, genre, rating, publisher, release, status, id){
    const game_to_update = {
        title: title,
        platform: platform,
        genre: genre,
        rating: rating,
        publisher: publisher,
        release: release,
        status: status
    };
    return this.http.post(`${this.uri}/game/update/${id}`, game_to_update);
  }

  deleteGame(id){
    return this.http.get(`${this.uri}/game/delete/${id}`);
  }
}
