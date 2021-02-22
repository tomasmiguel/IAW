import { spotify } from './../../../../global/global';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public spotify: any;

  constructor(
    private _http: HttpClient
  ) {
    this.spotify = spotify;
  }

  getAccessToken = (code: string): Observable<any> => {

    const data: string = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('redirect_uri', this.spotify.redirect_uri)
      .set('code', code)
      .toString();

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + this.spotify.apiKey,
      Accept: '*/*'
    });

    return this._http.post('https://accounts.spotify.com/api/token', data, { headers });
  }

  getRefreshToken = (refresh_token: string): Observable<any> => {

    const data: string = new HttpParams()
      .set('grant_type', 'refresh_token')
      .set('refresh_token', refresh_token)
      .toString();

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + this.spotify.apiKey,
      Accept: '*/*'
    });

    return this._http.post('https://accounts.spotify.com/api/token', data, { headers });
  }

  getTrack = (trackName: string, token: string): Observable<any> => {

    const path = 'https://api.spotify.com/v1/search?q=' + encodeURI(trackName) + '&type=track';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token
    });

    return this._http.get(path, { headers });
  }

  deleteToken = (): void => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('scope');
  }

}
