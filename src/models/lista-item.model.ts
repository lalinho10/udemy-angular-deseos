export class ListaItem {
    completo: boolean;
    descripcion: string;

    constructor( descripcion: string ) {
        this.completo = false;
        this.descripcion = descripcion;
    }
}