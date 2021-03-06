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
    const refreshToken = localStorage.getItem('refresh_token');
    this.login = (refreshToken) ? true : false;
  }

}
