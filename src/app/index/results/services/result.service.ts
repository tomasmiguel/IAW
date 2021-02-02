import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { Result } from '../models/results';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResultService {//implements Resolve<Observable<Result>>{


  constructor(private http: HttpClient) { }


  // public resolve(): Observable<Result> {
  //   return this.analizeSong();
  // }

  //TODO: 1) Ver que el Resolve sirve para usar un gif de carga
  //  2) usar Observable<Result> en vez de any
  analizeSong(): Observable<any> {
    return this.http.get<any>("https://reqres.in/api/users/2");
  }

}
