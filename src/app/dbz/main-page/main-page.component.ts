import { Component } from '@angular/core';

interface personaje{
  nombre:string,
  poder : number
}

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
    nombre: '',
    poder: 0
  }

  Agregar(  ){
    if (this.nuevo.nombre.trim().length === 0){  return;
    }
    console.log(this.nuevo);


    this.personajes.push(this.nuevo)
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
