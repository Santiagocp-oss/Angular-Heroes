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

  nuevo: personaje = {
    nombre: 'trunks',
    poder: 14000
  }

  Agregar(  ){
    console.log(this.nuevo);
  }

}
