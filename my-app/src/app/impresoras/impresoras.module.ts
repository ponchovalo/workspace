import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImpresorasComponent } from './impresoras.component';
import { FormimpresorasComponent } from './formimpresoras.component';



@NgModule({
  declarations: [
    ImpresorasComponent,
    FormimpresorasComponent
  ],
  exports: [
    ImpresorasComponent,
    FormimpresorasComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImpresorasModule { }
