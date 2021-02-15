import { Component, Input, OnInit } from '@angular/core';
import { Track } from '../../search/models/track';

@Component({
  selector: 'iaw-lyric',
  templateUrl: './lyric.component.html',
  styleUrls: ['./lyric.component.scss']
})
export class LyricComponent implements OnInit {

  @Input() track: Track;
  formattedLyric: string[];

  constructor() { }

  ngOnInit(): void {
    this.formattedLyric = this.track.text.split('\n');
  }

}
