import { Component, Input, OnInit } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { Emotion } from '../../search/models/emotion';

@Component({
  selector: 'iaw-feelings',
  templateUrl: './feelings.component.html',
  styleUrls: ['./feelings.component.scss']
})
export class FeelingsComponent implements OnInit {

  @Input() feelings: Emotion;
  @Input() trackName: string;

  countUp = new CountUpModule();
  DEFAULT_ANIMATION_TIME = 4000;

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

  constructor() { }

  ngOnInit(): void {
    this.setSentims();
  }

  setSentims(): void {
    // ANGER
    this.Sentims.ANGER.percentage = this.feelings.anger * 100;
    this.Sentims.ANGER.animationTime =  this.feelings.anger * this.DEFAULT_ANIMATION_TIME;
    // DISGUST
    this.Sentims.DISGUST.percentage = this.feelings.disgust * 100;
    this.Sentims.DISGUST.animationTime =  this.feelings.disgust * this.DEFAULT_ANIMATION_TIME;
    // FEAR
    this.Sentims.FEAR.percentage = this.feelings.fear * 100;
    this.Sentims.FEAR.animationTime =  this.feelings.fear * this.DEFAULT_ANIMATION_TIME;
    // JOY
    this.Sentims.JOY.percentage = this.feelings.joy * 100;
    this.Sentims.JOY.animationTime =  this.feelings.joy * this.DEFAULT_ANIMATION_TIME;
    // SADNESS
    this.Sentims.SADNESS.percentage = this.feelings.sadness * 100;
    this.Sentims.SADNESS.animationTime =  this.feelings.sadness * this.DEFAULT_ANIMATION_TIME;
  }
}
