import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iaw-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  login(): void {
    const spotifyLoginWindow = window.open('https://accounts.spotify.com/authorize?client_id=d4fb8e7c1ef44fc4b01f0d047a0c9a52&response_type=code&scope=user-read-private%20user-read-email&state=34fFs29kd09&redirect_uri=https%3A%2F%2Fsentim-music.herokuapp.com%2Fcallback');

    if (spotifyLoginWindow) {
      spotifyLoginWindow.onbeforeunload = () => {
        /* const accessToken = localStorage.getItem('sp-accessToken');
        const refreshToken = localStorage.getItem('sp-refreshToken');
        console.log(accessToken, refreshToken); */
        console.log('hola');
      };
    }
  }
}
