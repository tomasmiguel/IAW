import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(
    private _http: HttpClient
  ) { }

  getAccessToken = (code: string, redirectUri: string): Observable<any> => {

    const data = new FormData();
    data.set('grant_type', 'authorization_code');
    data.set('code', code);
    data.set('redirect_uri', 'http%3A%2F%2Flocalhost%3A4200%2Fcallback');

    const d = {
      grant_type: 'authorization_code',
      code,
      redirect_uri: 'http%3A%2F%2Flocalhost%3A4200%2Fcallback'
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa('71b5dd25738b487cb5f33c78fcadb596:dcfb1f963fbe4b309176321a9c5b9140'),
    });
    return this._http.post('https://accounts.spotify.com/api/token', JSON.stringify(data), { headers });
  }
}
