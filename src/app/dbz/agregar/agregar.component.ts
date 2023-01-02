import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personaje } from '../Interfaces/dbz.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0
  }

  @Output()  onNuevopersonaje: EventEmitter<personaje> = new EventEmitter();
  Agregar(  ){
    if (this.nuevo.nombre.trim().length === 0){  return;
    }
    console.log(this.nuevo);
    this.onNuevopersonaje.emit( this.nuevo);


    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
