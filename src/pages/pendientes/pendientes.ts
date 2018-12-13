import { Component }                      from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';

import { Lista }                          from '../../models';

import { AgregarPage }                    from '../agregar/agregar';

@Component({
    selector: 'page-pendientes',
    templateUrl: 'pendientes.html'
})

export class PendientesPage {

    constructor(
        private alertController: AlertController,
        private navController: NavController
    ) {}

    capturarNombreLista(): void {
        const prompt = this.alertController.create({
            title: 'Agregar lista',
            message: 'Escribe el nombre de tu lista de deseos',
            inputs: [{
                name: 'titulo',
                placeholder: 'Nombre lista'
            }],
            buttons: [{
                text: 'Cancelar',
            },
            {
                text: 'Agregar',
                handler: data => {
                    if( data.titulo.length === 0 ) {
                        return;
                    }

                    this.navController.push( AgregarPage, params );
                }
            }]
        });

        prompt.present();
    }

}