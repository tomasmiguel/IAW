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
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) { this.getTrack(accessToken); }
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


}
