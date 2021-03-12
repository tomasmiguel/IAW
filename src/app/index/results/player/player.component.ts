import { spotify } from './../../../global/global';
import { PlayerService } from './services/player.service';
import { Song } from './../../search/models/song';
import { Component, Input, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'iaw-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() song: Song;
  @ViewChild('clickbutton', { static: false }) clickbutton: ElementRef;
  public loading = false;
  public listo = false;
  public notExists = false;


  constructor(
    private _player: PlayerService
  ) { }

  ngOnInit(): void {
    this.loading = true;
    const refreshToken = localStorage.getItem('refresh_token');
    (refreshToken)
      ? this.getRefreshToken(refreshToken)
      : this.loading = false;
  }

  // este login se esta usando Ger??
  login(): void {
    let params = 'scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=400,height=500,left=100,top=100';
    const spotifyLoginWindow = window.open(
      'https://accounts.spotify.com/authorize?client_id=' + spotify.client_id + '&response_type=code&redirect_uri=' +
      encodeURI(spotify.redirect_uri) + '&scope=user-read-private%20user-read-email&state=34fFs29kd09',
      'Sportify',
      params
    );

    setInterval(() => {
      if (this.loading) {
        const token = localStorage.getItem('access_token');
        if (token) {
          this.getTrack(token);
          console.log('buscando');
        }
      }
    }, 200);
  }


  getTrack(token: string): void {
    this.loading = true;
    this._player.getTrack(this.song.track.name + ' ' + this.song.artist.name, token).subscribe(
      ({ tracks: { items: [first] } }) => {
        this.song.spotifyTrack = first;
        this.loading = false;
        this.listo = (first) ? true : false;
        this.notExists = (!first) ? true : false;

      },
      (error) => this._player.deleteToken()
    );
  }

  getRefreshToken(refreshToken: string): void {
    this._player.getRefreshToken(refreshToken).subscribe(
      ({ access_token }) => {
        localStorage.setItem('access_token', access_token);
        this.getTrack(access_token);
      },
      (error) => this._player.deleteToken()
    );
  }


}
