import { Injectable } from '@angular/core';

import { Lista }      from '../models';

@Injectable()
export class DeseosService {
    listas: Lista[] = [];

    constructor() {
        this.cargarStorage();
    }

    agregarLista( lista: Lista ) {
        this.listas.push( lista );
        this.guardarStorage();
    }

    eliminarLista( lista: Lista ) {
        this.listas = this.listas.filter( ( dataLista ) => {
            return dataLista.id !== lista.id;
        });

        this.guardarStorage();
    }

    guardarStorage(): void {
        localStorage.setItem( 'data', JSON.stringify( this.listas ) );
    }

    cargarStorage(): void {
        if( localStorage.getItem( 'data' ) ) {
            this.listas = JSON.parse( localStorage.getItem( 'data' ) );
        }
    }
}