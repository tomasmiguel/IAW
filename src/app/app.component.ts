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
    /* if (!localStorage.getItem('refresh_token') && spotify.redirect_uri !== 'http://localhost:4444/callback') {
      localStorage.setItem('resfresh_token', 'AQBH6kNPMLaUIHjgsT8zEW_KP_dkmP1mRQaCHgTgceRYz_Dsn0KZi1uF_-nEhezYSOhykOVJ_VQpleEzaauVx5bHUKgcG3x1DpsFWLaBBrXHaJl0ay_8Q7Xt77x19GdYE-w');
    } */
  }


}
