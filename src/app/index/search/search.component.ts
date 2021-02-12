import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResultService } from '../results/services/result.service';


@Component({
  selector: 'iaw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  songResults: any;
  isSearching = false;

  constructor(private resultService: ResultService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      artist: [{ value: null, disabled: false }, [Validators.required]],
      song: [{ value: null, disabled: false }, [Validators.required]],
    });
   }

  ngOnInit(): void { }

  search(): void {
    if (this.searchForm.invalid){
      return;
    }
    this.isSearching = true;
    this.songResults = null;

    this.resultService.analizeSong().subscribe((response: any) => {
      //simulo delay
     // setTimeout(() => {
        // if llego ok y se sabe el idioma, etc etc..

        const result = {
          anger: 0.110993,
          disgust: 0.073194,
          fear: 0.100181,
          joy: 0.447153,
          sadness: 0.357578,
        };
        this.songResults = result;
        this.isSearching = false;
        document.getElementById("results-section-id")?.scrollIntoView();

        
     //}, 3000);
    });

  }
}
