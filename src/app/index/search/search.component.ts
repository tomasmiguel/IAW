import { Song } from './models/song';
import { SearchService } from './services/search.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


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
      this.isSearching = true;
      //this.getLyrics();

      this.song = new Song(
      {
        name: "Gustavo Cerati"
      },
      {
        lang: 
          {
            code: "es", 
            name: "Spanish"
          },
        name: "Crimen",
        text: "La espera me agotó↵No se nada de vos↵Dejaste tanto en mí↵En llamas me acosté↵Y en un lento degradé↵Supe que te perdí↵↵¿Qué otra cosa puedo hacer?↵Si no olvido, moriré↵Y otro crimen quedará↵Otro crimen quedará↵Sin resolver↵↵Una rápida traición↵Y salimos del amor↵Tal vez me lo busqué↵↵Mi ego va a estallar↵Ahí donde no estás↵Oh... los celos otra vez↵↵¿Qué otra cosa puedo hacer?↵Si no olvido moriré↵Y otro crimen quedará↵Otro crimen quedará↵Sin resolver↵↵No lo sé↵Cuanto falta no lo sé↵Si es muy tarde no lo sé↵Si no olvido, moriré↵Que otra cosa puedo hacer?↵Que otra cosa puedo hacer?↵↵Ahora sé lo que es perder↵↵Otro crimen quedará↵Otro crimen quedará↵Sin resolver",
        text_en: "The wait exhau",
      },
      {
        anger: 0.521788,
        disgust: 0.089308,
        fear: 0.145935,
        joy: 0.027425,
        sadness: 0.661355
      },
      {
        polarity: -0.02,
        type: "negative"
      },
      {
        artist: "Copyright Gustavo Cerati",
        notice: "Crimen lyrics are property and copyright of their owners. Commercial use is not allowed.",
        text: "All lyrics provided for educational purposes and personal use only.",
      })
    }
  }

  async getSentiments() {
    this._search.getSentiment(this.song.track.text_en).subscribe(
      ({ result }) => {
        this.song.sentiment = result;
      }
    );
  }

  async getEmotions() {
    this._search.getEmotions(this.song.track.text_en).subscribe(
      ({ emotion: { document: { emotion } } }) => {
        this.song.emotion = emotion;
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

        console.log(this.song);
      }
    );
  }

}
