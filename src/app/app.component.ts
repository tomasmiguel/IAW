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
    /* if (!localStorage.getItem('refresh_token')) {
      localStorage.setItem('resfresh_token', 'AQCF25-VXTdlqgvK0wwOSzKcY0plJM7FCR5N7DwBHySEyk9xvObrJV60ivKVNVg8__G_3Q2NBvnlNaPmV70oNhySgqLJcPwRvaRszWJQBBMOoF7UoZEChATkK2ztuoAoWMs');
      localStorage.setItem('access_token', 'BQA5IIbgf6VQs7vNdvdUWAy3ymmH-824jeqcSk_o3eLwqNG49e8AE9B5TVweKlSbx-NuJkfC9FDgye3zJ6tg3HTfArR2Bs4sgNiGZZyHM9AfLcPZsBNrPnBEcYEhGSaZ6DQ5grxBXMsxXvMAT0xlX-2ab2vM_ZgdqU32nyQ');
    } */
  }


}
