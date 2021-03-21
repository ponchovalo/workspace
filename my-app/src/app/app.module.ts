import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImpresorasModule } from './impresoras/impresoras.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImpresorasModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
