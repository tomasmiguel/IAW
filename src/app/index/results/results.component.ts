import { Song } from './../search/models/song';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'iaw-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  DEFAULT_ANIMATION_TIME = 4000;

  @Input() isSearching: boolean;
  @Input() results: Song;

  // urls imagenes
  angerUrl = '../../../assets/logo/anger.svg';
  disgustUrl = '../../../assets/logo/disgust.svg';
  fearUrl = '../../../assets/logo/fear.svg';
  joyUrl = '../../../assets/logo/joy.svg';
  sadnessUrl = '../../../assets/logo/sadness.svg';

  constructor() { }

  ngOnInit(): void { }

  // #percentages
  getAngerPercentage(forGraphic = false): any {
    if (forGraphic){
      return this.results.emotion.anger * 100;
    }
    return (this.results.emotion.anger * 100).toFixed(1) + '%';
  }

  getDisgustPercentage(forGraphic = false): any {
    if (forGraphic){
      return this.results.emotion.disgust * 100;
    }
    return (this.results.emotion.disgust * 100).toFixed(1) + '%';
  }

  getFearPercentage(forGraphic = false): any {
    if (forGraphic){
      return this.results.emotion.fear * 100;
    }
    return (this.results.emotion.fear * 100).toFixed(1) + '%';
  }

  getJoyPercentage(forGraphic = false): any {
    if (forGraphic){
      return this.results.emotion.joy * 100;
    }
    return (this.results.emotion.joy * 100).toFixed(1) + '%';
  }

  getSadnessPercentage(forGraphic = false): any {
    if (forGraphic){
      return this.results.emotion.sadness * 100;
    }
    return (this.results.emotion.sadness * 100).toFixed(1) + '%';
  }


  // #animations time
  getAngerTime(): number {
    return this.results.emotion.anger * this.DEFAULT_ANIMATION_TIME;
  }
  getDisgustTime(): number {
    return this.results.emotion.disgust * this.DEFAULT_ANIMATION_TIME;
  }
  getFearTime(): number {
    return this.results.emotion.fear * this.DEFAULT_ANIMATION_TIME;
  }
  getJoyTime(): number {
    return this.results.emotion.joy * this.DEFAULT_ANIMATION_TIME;
  }
  getSadnessTime(): number {
    return this.results.emotion.sadness * this.DEFAULT_ANIMATION_TIME;
  }

}
