import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  uri = 'http://localhost:4000/api/game';
  constructor(private http: HttpClient, private router: Router) { }

  getGames(){
    return this.http.get(`${this.uri}/all`);
  }

  getGameById(id){
    return this.http.get(`${this.uri}/${id}`);
  }

  addGame(title, platform, genre, rating, publisher, release, status) {
    const game_to_add = {
        title: title,
        platform: platform,
        genre: genre,
        rating: rating,
        publisher: publisher,
        release: release,
        status: status
    };
    return this.http.post(`${this.uri}/add`, game_to_add)
    .subscribe(()=>{
      this.router.navigate(['/admin/main']);
    });
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
    return this.http.post(`${this.uri}/update/${id}`, game_to_update);
  }

  deleteGame(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }
}
