import { Component, Input }                            from '@angular/core';
import { AlertController, ItemSliding, NavController } from 'ionic-angular';

import { Lista }                                       from '../models';

import { AgregarPage }                                 from '../pages/agregar/agregar';

import { DeseosService }                               from '../services/deseos.service';

@Component({
    selector: 'listas',
    templateUrl: 'listas.component.html'
})

export class ListasComponent {
    @Input() completas: boolean;

    constructor(
        private alertController: AlertController,
        public deseosService: DeseosService,
        private navController: NavController
    ) {}

    listaSeleccionada( lista: Lista ): void {
        this.navController.push( AgregarPage, {
            titulo: lista.titulo,
            lista: lista
        });
    }

    editarLista( lista: Lista, slidingItem: ItemSliding ): void {
        slidingItem.close();

        const prompt = this.alertController.create({
            title: 'Editar',
            message: 'Modifica el nombre de la lista',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre lista',
                value: lista.titulo
            }],
            buttons: [{
                text: 'Cancelar',
            },
            {
                text: 'Guardar',
                handler: data => {
                    if( data.titulo.length === 0 ) {
                        return;
                    }
                    lista.titulo = data.titulo;
                    this.deseosService.guardarStorage();
                }
            }]
        });

        prompt.present();
    }

    eliminarLista( lista: Lista ): void {
        this.deseosService.eliminarLista( lista );
    }
}