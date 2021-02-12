import { PlayerService } from './../player/services/player.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'iaw-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.scss']
})
export class CallbackComponent implements OnInit {

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _spotify: PlayerService
  ) { }

  ngOnInit() {

    const code = this._activatedRoute.snapshot.paramMap.get('code');

    this._spotify.getAccessToken(code + '', 'https://sentim-music.herokuapp.com/callback').subscribe(
      ({access_token, token_type, expires_in, refresh_token, scope}) => {
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('token_type', token_type);
        localStorage.setItem('expires_in', expires_in);
        localStorage.setItem('refresh_token', refresh_token);
        localStorage.setItem('scope', scope);

        // Close the popup
        window.close();
      },
      (error) => console.log(error)
    );

  }

}
