import { Song } from './../../search/models/song';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iaw-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() song: Song;

  songType = new Map([
    ['positive', 'Positiva'],
    ['negative', 'Negativa'],
    ['neutral', 'Neutral']
  ]);

  constructor() { }

  ngOnInit(): void {
    this.song.sentiment.type = String(this.songType.get(this.song.sentiment.type));
  }

}
