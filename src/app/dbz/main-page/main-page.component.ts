import { Component } from '@angular/core';
import { personaje } from '../Interfaces/dbz.interfaces';
import { AgregarComponent } from '../agregar/agregar.component';
import { dbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {



 nuevo: personaje = {
  nombre:'maestro roshi',
  poder: 1000
 }

 

  constructor () {}
}
