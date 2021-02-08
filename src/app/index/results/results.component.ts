import { Component, Input, OnInit } from '@angular/core';
import {
  faSmileBeam
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'iaw-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  faSmileBeam = faSmileBeam;
  

  @Input() isSearching: boolean;
  @Input() results: string;

  constructor() { }

  ngOnInit(): void { }

 
 
}
