import { JokeService } from './joke.service';

import { Component } from '@angular/core';
import { Joke } from './joke.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storeJoke: Joke;

  constructor(private jokeService: JokeService){}

  fetchJoke(){
    this.jokeService.getJoke().subscribe(response =>{
      this.storeJoke = response
      console.log(response);
    });
  }

}
