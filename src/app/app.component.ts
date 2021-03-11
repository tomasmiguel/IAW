import { spotify } from './global/global';
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
    const expires = localStorage.getItem('expiresRefreshToken');

    if (expires) {
      const today = Date.now();
      const expired = +expires < today;

      if (expired) {
        this.deleteTokens();
      }
    } else {
      this.deleteTokens();
    }


  }

  private deleteTokens() {
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_token');
    localStorage.removeItem('expiresRefreshToken');
  }


}
