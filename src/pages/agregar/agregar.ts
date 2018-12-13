import { Component }        from '@angular/core';
import { NavParams }        from 'ionic-angular';

import { Lista, ListaItem } from '../../models';

import { DeseosService }    from '../../services/deseos.service';

@Component({
    selector: 'page-agregar',
    templateUrl: 'agregar.html'
})

export class AgregarPage {
    lista: Lista;

    nombreItem: string = '';

    constructor(
        public deseosService: DeseosService,
        private navParams: NavParams
    ) {
        const titulo = this.navParams.get( 'titulo' );

        if( this.navParams.get( 'lista' ) ) {
            this.lista = this.navParams.get( 'lista' )
        } else {
            this.lista = new Lista( titulo );
            this.deseosService.agregarLista( this.lista );
        }
    }

    agregarItem(): void {
        if( this.nombreItem.length === 0 ) {
            return;
        }

        const listaItem = new ListaItem( this.nombreItem );
        this.lista.listaItems.push( listaItem );
        this.deseosService.guardarStorage();

        this.nombreItem = '';
    }

    actualizarTarea( listaItem: ListaItem ) {
        listaItem.completo = !listaItem.completo;

        const pendientes = this.lista.listaItems.filter( ( listaItem ) => !listaItem.completo ).length;

        if( pendientes === 0 ) {
            this.lista.terminada = true;
            this.lista.fechaTermino = new Date();
        } else {
            this.lista.terminada = false;
            this.lista.fechaTermino = null;
        }

        this.deseosService.guardarStorage();
    }

    eliminarItem( idItem: number ) {
        this.lista.listaItems.splice( idItem, 1 );
        this.deseosService.guardarStorage();
    }
}