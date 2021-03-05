import { spotify } from './../../../global/global';
import { PlayerService } from './services/player.service';
import { Song } from './../../search/models/song';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iaw-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() song: Song;



  constructor(
    private _player: PlayerService
  ) { }

  ngOnInit(): void {
    this.getRefreshToken(localStorage.getItem('refresh_token'));
  }

  login(): void {
    let params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=300,height=900,left=100,top=100';
    const spotifyLoginWindow = window.open(
      'https://accounts.spotify.com/authorize?client_id=' + spotify.client_id + '&response_type=code&redirect_uri=' + encodeURI(spotify.redirect_uri) + '&scope=user-read-private%20user-read-email&state=34fFs29kd09',
      'Sportify',
      params
    );

    if(spotifyLoginWindow){
      console.log('abri la ventana');
      spotifyLoginWindow.onbeforeunload = () => {
        console.log('cerre la ventana');
        const token: string | null = (localStorage.getItem('access_token'));
        this.getTrack(token);
      }
    }
  }


  getTrack(token: string | null): void {

    if (token) {
      this._player.getTrack(this.song.track.name + ' ' + this.song.artist.name, token).subscribe(
        ({ tracks: { items: [first] } }) => {
          this.song.spotifyTrack = first;
          console.log(first);
        },
        (error) => {
          this._player.deleteToken();
        }
      );
    }
  }

  getRefreshToken(refreshToken: string | null): void {
    if (refreshToken) {
      this._player.getRefreshToken(refreshToken).subscribe(
        (response) => {
          this.getTrack(response.access_token);
        },
        (error) => this._player.deleteToken()
      );
    } else {
      this._player.deleteToken();
    }
  }


}
