import { Pipe, PipeTransform } from '@angular/core';

import { Lista }               from '../../models';

@Pipe({
    name: 'filtroCompletado',
    pure: false
})

export class FiltroCompletadoPipe implements PipeTransform {

    constructor() {}

    transform( lista: Lista[], terminada: boolean ): Lista[] {
        return lista.filter( lista => lista.terminada === terminada )
    }

}