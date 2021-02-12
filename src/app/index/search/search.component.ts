import { Song } from './models/song';
import { SearchService } from './services/search.service';
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
  song: Song;
  isSearching = false;

  constructor(
    private _search: SearchService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      artist: [{ value: null, disabled: false }, [Validators.required]],
      song: [{ value: null, disabled: false }, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.search();
  }

  search() {
    if (!this.searchForm.invalid) {
      this.getLyrics();
    }
  }

  async getSentiments() {
    this._search.getSentiment(this.song.track.text_en).subscribe(
      ({ result }) => {
        this.song.sentiment = result;
        console.log(this.song);
      }
    );
  }

  async getEmotions() {
    this._search.getEmotions(this.song.track.text_en).subscribe(
      ({ emotion: { document: { emotion } } }) => {
        this.song.emotion = emotion;
        console.log(this.song);
      }
    );
  }

  async translate() {
    const { translations: [first] } = await this._search.translateText([this.song.track.text], this.song.track.lang.code, 'en').toPromise();
    this.song.track.text_en = first.translation;
  }

  async identifyLanguage() {
    const { languages: [first] } = await this._search.identifyLanguage(this.song.track.text).toPromise();
    this.song.track.lang.code = first.language;
  }

  async getLyrics() {
    this.isSearching = true;
    document.getElementById('loading-section')?.scrollIntoView();

    const { artist, song } = this.searchForm.value;
    this._search.getLyrics(artist, song).subscribe(
      async ({ result }) => {
        this.song = result;
        if (this.song.track.lang.code === 'xx') {
          await this.identifyLanguage();
        }

        (this.song.track.lang.code !== 'en')
          ? await this.translate()
          : this.song.track.text_en = this.song.track.text;

        this.getEmotions();
        this.getSentiments();
      }
    );
  }

}
