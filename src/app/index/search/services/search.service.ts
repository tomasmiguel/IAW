import { Observable } from 'rxjs';
import { lyrics, watson } from './../../../services/global';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private lyrics: any;
  private watson: any;

  constructor(
    private _http: HttpClient
  ) {
    this.lyrics = lyrics;
    this.watson = watson;
  }

  protected getHeaders = () => {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
  }

  public getLyrics = (artist: string, track: string): Observable<any> => {
    return this._http.get(this.lyrics.url + artist + '/' + track + '?apikey=' + this.lyrics.apiKey, { headers: this.getHeaders() });
  }

  public identifyLanguage = (song: string): Observable<any> => {
    const headers = new HttpHeaders()
      .append('Content-Type', 'text/plain')
      .append('Authorization', 'Basic ' + btoa('apikey:' + this.watson.identify.apiKey));
    return this._http.post(this.watson.identify.url, song, { headers });
  }

  public translateText = (text: Array<string>, original: string, translate: string): Observable<any> => {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Basic ' + btoa('apikey:' + this.watson.translate.apiKey));

    const data = {
      text,
      model_id: original + '-' + translate
    };

    return this._http.post(this.watson.translate.url, JSON.stringify(data), { headers });
  }

  public getSentiment = (text: string): Observable<any> => {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Basic ' + btoa('apikey:' + this.watson.sentiment.apiKey));

    const data = {
      text,
      language : 'en',
      features : {
        emotion: {}
      }
    };

    return this._http.post(this.watson.sentiment.url, JSON.stringify(data), { headers });
  }

}
