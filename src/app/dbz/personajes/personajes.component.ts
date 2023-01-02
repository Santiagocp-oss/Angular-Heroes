import { Component, Input } from '@angular/core';
import { personaje } from '../Interfaces/dbz.interfaces';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent {

  @Input('data') personajes : personaje[] = [];  
}
