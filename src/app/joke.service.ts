import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Joke } from './joke.model';



@Injectable({
  providedIn: 'root'
})
export class JokeService {

  constructor(private http: HttpClient) { }

  getJoke(){
    return this.http.get<Joke>('https://icanhazdadjoke.com/', {headers: new HttpHeaders().set('Accept', 'application/json')})
  }
}
