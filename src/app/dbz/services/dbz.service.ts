import { Injectable } from "@angular/core";
import { personaje } from "../Interfaces/dbz.interfaces";

@Injectable()
export class dbzService{

    private _personajes: personaje [] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre:'vegeta',
          poder: 7500
        }
        
      ];

      get personajes(): personaje[]{
        return [...this._personajes];
      }

    constructor(){
    }

    agregarPersonaje( data: personaje){
        this._personajes.push(data);
    }
}