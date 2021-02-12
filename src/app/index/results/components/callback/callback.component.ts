import { PlayerService } from './../player/services/player.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

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

  async ngOnInit() {
    this._activatedRoute.queryParams.subscribe(params => {

      this._spotify.getAccessToken(params.code).subscribe(
        ({ access_token, token_type, expires_in, refresh_token, scope }) => {
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
    });

  }

}
