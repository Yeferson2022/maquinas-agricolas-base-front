export class Cliente {
  id: number;
  nombre: string;
  identificacion: string;
  vereda: string;

  constructor(nombre: string, identificacion: string, vereda: string, id?: number) {
    this.id = id;
    this.identificacion = identificacion;
    this.nombre = nombre;
    this.vereda = vereda;
  }
}

export interface ClienteRespuesta {
  valor: number;
}
