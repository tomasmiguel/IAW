import { Song } from './../../../search/models/song';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iaw-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() song: Song;

  constructor() { }

  ngOnInit(): void {
  }

}
