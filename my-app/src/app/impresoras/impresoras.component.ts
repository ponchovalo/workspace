import { Component, OnInit } from '@angular/core';
import { Impresora } from './impresoras.interfaces';

@Component({
  selector: 'app-impresoras',
  templateUrl: './impresoras.component.html'
})
export class ImpresorasComponent implements OnInit {

  constructor() { }

  impresora: Impresora = {
    nombre: '',
    ubicacion: '',
    serie: '',
    ip: '',
    mac: '',

  };

  impresoras: Impresora[] = [
    {
      nombre: 'Juridico',
      ubicacion: 'Edificio de Gobiern',
      serie: 'xxxxx',
      ip: '10.222.17.243',
      mac: '0000.0000.0000',
    },
    {
      nombre: 'Informatica',
      ubicacion: 'Edificio de Gobiern',
      serie: 'xxxxx',
      ip: '10.222.17.243',
      mac: '0000.0000.0000',
    },

  ];

  ngOnInit(): void {

  }

}
