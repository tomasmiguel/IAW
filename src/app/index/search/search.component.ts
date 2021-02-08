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
    //document.getElementById('loading-section')?.scrollTo({top: 2000, behavior: 'smooth'});

    this.resultService.analizeSong().subscribe((response) => {
      //simulo delay
      // setTimeout(() => {
      //   // if llego ok y se sabe el idioma, etc etc..
         this.songResults = response;
         this.isSearching = false;
      // }, 3000);
    });

  }
}
