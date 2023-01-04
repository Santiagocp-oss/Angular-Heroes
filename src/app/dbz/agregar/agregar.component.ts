import { Component, EventEmitter, Input, Output } from '@angular/core';
import { personaje } from '../Interfaces/dbz.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() nuevo: personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzService: dbzService){

  }
 // @Output()  onNuevopersonaje: EventEmitter<personaje> = new EventEmitter();

  Agregar(  ){
    if (this.nuevo.nombre.trim().length === 0){  return;
    }


    //this.onNuevopersonaje.emit( this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
