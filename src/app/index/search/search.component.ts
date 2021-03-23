import { Song } from './models/song';
import { SearchService } from './services/search.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'iaw-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('mySearchForm') public mySearchForm: NgForm;
  private readonly notifier: NotifierService;
  public searchForm: FormGroup;
  public song: Song;
  public isSearching = false;
  public error = false;
  public mostrar = false;

  constructor(
    private _search: SearchService,
    private formBuilder: FormBuilder,
    protected notifierService: NotifierService
  ) {
    this.searchForm = this.formBuilder.group({
      artist: [{ value: null, disabled: false }, [Validators.required]],
      song: [{ value: null, disabled: false }, [Validators.required]],
    });
    this.notifier = notifierService;
  }

  ngOnInit(): void {
    this.mySearchForm.resetForm();
  }

  search(): void {
    if (!this.searchForm.invalid) {
      this.isSearching = true;
      this.error = false;
      this.getLyrics();
    }
  }

  onClickSearch(): void {
    if (this.searchForm.invalid) {
      this.notifier.notify('default', 'Complete los campos para continuar!');
    }
  }

  private scroll(): void {
    this.mostrar = true;
    setTimeout(() => {
      const resultsDiv = document.getElementById('navbar');
      resultsDiv?.scrollIntoView({ block: 'start', behavior: 'smooth' });
      document.querySelector('.arrow')?.classList.remove('d-none');
    }, 500);
    setTimeout(() => {
      document.querySelector('#search')?.classList.add('d-none');
    }, 1500);
    setTimeout(() => {
      document.querySelector('#navbar')?.classList.add('fixed-top');
      document.querySelector<HTMLElement>('#results')?.classList.add('padding-top');
    }, 2500);
  }

  scrollToTop(): void {
    document.getElementById('results')?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  }

  reset(): void {
    this.mySearchForm.resetForm();
    document.querySelector('#navbar')?.classList.remove('fixed-top');
    document.querySelector<HTMLElement>('#results')?.classList.remove('padding-top');
    setTimeout(() => {
      document.querySelector('#search')?.classList.remove('d-none');
      document.querySelector('.arrow')?.classList.add('d-none');
      this.mostrar = false;
    }, 100);
  }

  getSentiments(): void {
    this._search.getSentiment(this.song.track.text_en).subscribe(
      ({ result }) => {
        this.song.sentiment = result;
        this.scroll();
      }
    );
  }

  getEmotions(): void {
    this._search.getEmotions(this.song.track.text_en).subscribe({
      next: response => {
        const { emotion: { document: { emotion } } } = response;
        this.song.emotion = emotion;
        this.isSearching = false;
      },
      complete: () => this.getSentiments()
    });
  }

  async translate(): Promise<void> {
    const { translations: [first] } =
      await this._search.translateText([this.song.track.text], this.song.track.lang.code, 'en').toPromise();
    this.song.track.text_en = first.translation;
  }

  async identifyLanguage(): Promise<void> {
    const { languages: [first] } = await this._search.identifyLanguage(this.song.track.text).toPromise();
    this.song.track.lang.code = first.language;
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
