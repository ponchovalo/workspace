import { Component, OnInit } from '@angular/core';
import { Impresora } from './impresoras.interfaces';

@Component({
  selector: 'app-formimpresoras',
  templateUrl: './formimpresoras.component.html'
})
export class FormimpresorasComponent implements OnInit {

  impresora: Impresora = {
    nombre: '',
    ubicacion: '',
    serie: '',
    ip: '',
    mac: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
