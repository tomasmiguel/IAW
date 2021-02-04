import { SearchService } from './index/search/services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'final-iaw';
  public text = '';
  public language = '';


  constructor(
    private _search: SearchService
  ) {
  }

  ngOnInit(): void {
    this.getSentiment();
  }

  // tslint:disable-next-line: typedef
  async getSentiment() {

    const { result } = await this._search.getLyrics('los redondos', 'jijiji').toPromise();
    let text = result.track.text;
    let language = result.track.lang.code;

    if (language === 'xx') {
      const { languages } = await this._search.identifyLanguage(text).toPromise();
      language = languages[0].language;
    }

    if (language !== 'en') {
      const { translations } = await this._search.translateText([text], language, 'en').toPromise();
      text = translations[0].translation;
    }

    const { emotion : { document : { emotion } } } = await this._search.getSentiment(text).toPromise();
    console.log(emotion);

  }





}
