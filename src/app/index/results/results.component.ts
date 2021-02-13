import { Song } from './../search/models/song';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import * as $ from 'jquery';

@Component({
  selector: 'iaw-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnChanges {

  DEFAULT_ANIMATION_TIME = 4000;

  @Input() isSearching: boolean;
  @Input() results: Song;

  Sentims = {
    ANGER: {
      percentage: 0,
      url: '../../../assets/logo/anger.svg',
      animationTime: 0,
    },
    DISGUST: {
      percentage: 0,
      url: '../../../assets/logo/disgust.svg',
      animationTime: 0,
    },
    FEAR: {
      percentage: 0,
      url: '../../../assets/logo/fear.svg',
      animationTime: 0,
    },
    JOY: {
      percentage: 0,
      url: '../../../assets/logo/joy.svg',
      animationTime: 0,
    },
    SADNESS: {
      percentage: 0,
      url: '../../../assets/logo/sadness.svg',
      animationTime: 0,
    },
  };

  countUp = new CountUpModule();

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if (this.results?.emotion) {
      this.setSentims();
    }
  }

  setSentims(): void {
    // ANGER
    this.Sentims.ANGER.percentage = this.results.emotion.anger * 100;
    this.Sentims.ANGER.animationTime =  this.results.emotion.anger * this.DEFAULT_ANIMATION_TIME;
    // DISGUST
    this.Sentims.DISGUST.percentage = this.results.emotion.disgust * 100;
    this.Sentims.DISGUST.animationTime =  this.results.emotion.disgust * this.DEFAULT_ANIMATION_TIME;
    // FEAR
    this.Sentims.FEAR.percentage = this.results.emotion.fear * 100;
    this.Sentims.FEAR.animationTime =  this.results.emotion.fear * this.DEFAULT_ANIMATION_TIME;
    // JOY
    this.Sentims.JOY.percentage = this.results.emotion.joy * 100;
    this.Sentims.JOY.animationTime =  this.results.emotion.joy * this.DEFAULT_ANIMATION_TIME;
    // SADNESS
    this.Sentims.SADNESS.percentage = this.results.emotion.sadness * 100;
    this.Sentims.SADNESS.animationTime =  this.results.emotion.sadness * this.DEFAULT_ANIMATION_TIME;
  }


}
