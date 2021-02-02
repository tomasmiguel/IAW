import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ResultService} from '../results/services/result.service';

@Component({
  selector: 'iaw-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  searchForm: FormGroup;

  constructor(private resultService: ResultService, private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      artist: [{ value: null, disabled: false }, [Validators.required]],
      song: [{ value: null, disabled: false }, [Validators.required]],
    });
   }

  ngOnInit(): void {
   }


  search() {
    if (this.searchForm.invalid){
      console.log("mostrar alert");
    }
    
    this.resultService.analizeSong().subscribe((r)=> {
      console.log('response ',r);
      
      //TODO: pasar data a result component
    }
    );
  }

}
