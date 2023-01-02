import { Component } from '@angular/core';
import { personaje } from '../Interfaces/dbz.interfaces';
import { AgregarComponent } from '../agregar/agregar.component';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: personaje [] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre:'vegeta',
      poder: 7500
    }
    
  ];

 nuevo: personaje = {
  nombre:'maestro roshi',
  poder: 1000
 }
 
agregarNuevoPersonaje( argumento:personaje){
  this.personajes.push(argumento)
}

}
