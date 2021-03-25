import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iaw-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public login = false;

  constructor() { }

  ngOnInit(): void {
    const expiresAccessToken = localStorage.getItem('expiresAccessToken');

    // si expiró el access token, veo de usar el refresh token
    if (this.expires(expiresAccessToken)) {

      // veo si el refresh token expiro
      const expiresRefreshToken = localStorage.getItem('expiresRefreshToken');

      if (this.expires(expiresRefreshToken)) {
        this.login = false;
        this.deleteTokens();
      } else {
        // el resfreh no expiró: por lo tanto, si está en storage
        // el componente login.ts se encarga de buscar el nuevo token
        this.login = (localStorage.getItem('refresh_token')) ? true : false;
      }

    } else {
      // el access token todavia sirve
      this.login = true;
    }

  }

  private expires(expiresDate: string | null): boolean {
    if (expiresDate) {
      const today = Date.now();
      return +expiresDate < today;
    }
    return true;
  }

  private deleteTokens(): void {
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_token');
    localStorage.removeItem('expiresRefreshToken');
    localStorage.removeItem('token_type');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('scope');
    localStorage.removeItem('generatedRefreshToken');
    this.login = false;
  }




}
