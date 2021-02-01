import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iaw-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buscar($e: any) {
    console.log($e);
  }

}
