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

  private deleteTokens(): void {
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_token');
    localStorage.removeItem('expiresRefreshToken');
    localStorage.removeItem('token_type');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('scope');
    localStorage.removeItem('generatedRefreshToken');
  }


}
