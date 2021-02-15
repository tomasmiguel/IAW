import { Song } from './../search/models/song';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'iaw-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  @Input() isSearching: boolean;
  @Input() song: Song;


  constructor() { }

  ngOnInit(): void { }

}
