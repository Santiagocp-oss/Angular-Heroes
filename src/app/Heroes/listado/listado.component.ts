import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  Heroes : string[] = ['spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America']
  HeroeBorrado: string = '';

  borrarHeroe(){
    this.HeroeBorrado = this.Heroes.shift() || '';
  }
}
