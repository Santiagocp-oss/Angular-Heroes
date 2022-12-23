import { Component } from '@angular/core';

@Component( {
    selector: 'app-contador',
    template: `

            <H1>{{titulo}} </H1>
        <h3> la base es: <strong> {{base}} </strong></h3>

        <button (click)=" acumular(base)"> + {{base}} </button>

        <span>{{numero}}</span>

        <button (click)="acumular(-base)"> - {{base}} </button>
        `
})
export class contadorComponent { 
    titulo: string = 'Contador App';
    numero: number = 5;
    base: number=5;
  
    acumular( valor : number) {
      this.numero += valor;    
    }
    
}