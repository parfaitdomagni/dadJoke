import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Joke } from './joke.model';



@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJoke(){
    return this.http.get('https://icanhazdadjoke.com/')
    .pipe(
      map(responseData =>{
        const jokeArray: Joke[]= [];
        for(const key in responseData){
          if(responseData.hasOwnProperty(key)){
            jokeArray.push({...responseData[key], id:key});
          }
        }
        return jokeArray;
      })
    )
  }
}
