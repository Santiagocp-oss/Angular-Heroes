import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.modulos';
import { contadorComponent } from './contador/contador/contador.component';
import { HeroesModulo } from './Heroes/Heroes.modulos';
//import { ContadorModule } from './contador/contador.modulos';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModulo,
    ContadorModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
