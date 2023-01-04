import { Component, Input } from '@angular/core';
import { personaje } from '../Interfaces/dbz.interfaces';
import { dbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

 // @Input('data') personajes : personaje[] = [];  
 get personajes(){
  return this.dbzService.personajes;
 }

  constructor ( private dbzService: dbzService) {

  }
}
