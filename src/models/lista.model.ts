import { ListaItem } from './lista-item.model';

export class Lista {
    id: number;
    titulo: string;
    fechaCreacion: Date;
    fechaTermino: Date;
    terminada: boolean;
    listaItems: ListaItem[];

    constructor( titulo: string ) {
        this.id = new Date().getTime();
        this.titulo = titulo
        this.fechaCreacion = new Date();
        this.terminada = false;
        this.listaItems = [];
    }
}