import { SearchService } from './index/search/services/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'final-iaw';


  constructor() {
  }

  ngOnInit(): void {
    if (!localStorage.getItem('refresh_token')) {
      localStorage.setItem('resfresh_token', 'AQBCkENtq4tss2i5njUQJaNmMB6rV7k7GHmEB0QiDQA61IfxOaahJqUUbWGJnnvBR4uo_Zz9YE0E6HNwCn3-hgPDawNlso8nZ2ZuWszaAE91_r72GIEPwWMuvU-6rsdiwDM');
    }
  }


}
