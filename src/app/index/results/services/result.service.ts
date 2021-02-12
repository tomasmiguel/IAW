import { Song } from './../../search/models/song';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {//implements Resolve<Observable<Result>>{


  constructor(private http: HttpClient) { }


  analizeSong(): Observable<Song> {
    return this.http.get<any>("https://reqres.in/api/users/2");
  }

}
