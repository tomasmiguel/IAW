import { Song } from './models/song';
import { SearchService } from './services/search.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'iaw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchForm: FormGroup;
  public song: Song;
  public isSearching = false;
  public error = false;

  constructor(
    private _search: SearchService,
    private formBuilder: FormBuilder,
    private elem: ElementRef
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
      this.isSearching = true;
      this.error = false;
      this.getLyrics();

    }
  }

  private scroll(): void {
    setTimeout(() => {
      const resultsDiv = document.getElementById('navbar');
      resultsDiv?.scrollIntoView({ block: "start", behavior: "smooth" })
    }, 500);
  }

  async getSentiments() {
    if (this.song) {
      this._search.getSentiment(this.song.track.text_en).subscribe(
        ({ result }) => {
          if (this.song) {
            setTimeout(() => {
              this.song.sentiment = result;
            }, 1400);
          }
        }
      );
    }
  }

  async getEmotions() {
    this._search.getEmotions(this.song.track.text_en).subscribe(
      ({ emotion: { document: { emotion } } }) => {
        this.song.emotion = emotion;
        this.isSearching = false;
        this.scroll();
        this.searchForm.reset();
      }
    );
  }

  async translate(): Promise<void> {
    if (this.song) {
      const { translations: [first] } =
        await this._search.translateText([this.song.track.text], this.song.track.lang.code, 'en').toPromise();
      this.song.track.text_en = first.translation;
    }
  }

  async identifyLanguage(): Promise<void> {
    if (this.song) {
      const { languages: [first] } = await this._search.identifyLanguage(this.song.track.text).toPromise();
      this.song.track.lang.code = first.language;
    }
  }

  async getLyrics(): Promise<void> {
    const { artist, song } = this.searchForm.value;

    this._search.getLyrics(artist, song).subscribe(
      async ({ result }) => {
        this.song = result;

        if (this.song) {
          if (this.song.track.lang.code === 'xx') {
            await this.identifyLanguage();
          }

          (this.song.track.lang.code !== 'en')
            ? await this.translate()
            : this.song.track.text_en = this.song.track.text;

          this.getEmotions();
          this.getSentiments();
        }
      },
      (error) => this.setError(error)
    );
  }


  private setError(error: any): void {
    this.isSearching = false;
    this.error = true;
  }


}
