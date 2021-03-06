import { PlayerService } from './../results/player/services/player.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { spotify } from './../../global/global';

@Component({
  selector: 'iaw-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() loginConfirm: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private _player: PlayerService
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    let params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=400,height=500,left=100,top=100';
    const spotifyLoginWindow = window.open(
      'https://accounts.spotify.com/authorize?client_id=' + spotify.client_id + '&response_type=code&redirect_uri=' + encodeURI(spotify.redirect_uri) + '&scope=user-read-private%20user-read-email&state=34fFs29kd09',
      'Sportify',
      params
    );

    if (spotifyLoginWindow) {
      spotifyLoginWindow.onbeforeunload = () => {
        if(localStorage.getItem('refresh_token'))
          this.loginConfirm.emit(true);
          location.reload();
      }
    }
  }
}
