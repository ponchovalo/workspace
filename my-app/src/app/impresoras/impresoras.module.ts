import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpresorasComponent } from './impresoras.component';



@NgModule({
  declarations: [
    ImpresorasComponent
  ],
  exports: [
    ImpresorasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImpresorasModule { }
