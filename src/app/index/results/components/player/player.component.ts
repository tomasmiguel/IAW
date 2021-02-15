import { spotify } from './../../../../global/global';
import { PlayerService } from './services/player.service';
import { Song } from './../../../search/models/song';
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


    if (this.isLogued()) {
      this.getTrack();
    }
  }


  isLogued(): boolean {
    const token = localStorage.getItem('access_token');
    return (token && token.length && token.length > 0) ? true : false;
  }


  login(): void {
    const spotifyLoginWindow = window.open('https://accounts.spotify.com/authorize?client_id=' + spotify.client_id + '&response_type=code&redirect_uri=' + encodeURI(spotify.redirect_uri) + '&scope=user-read-private%20user-read-email&state=34fFs29kd09');

    if (spotifyLoginWindow) {
      spotifyLoginWindow.onbeforeunload = () => {
        this.getTrack();
      };
    }
  }


  getTrack() {
    const token = (localStorage.getItem('access_token'));

    if (token) {
      this._player.getTrack(this.song.track.name + ' ' + this.song.artist.name, token).subscribe(
        ({ tracks: { items: [first] } }) => {
          this.song.spotifyTrack = first;
          console.log(first);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

}
