export class ServicioPrestado {
  id: number;
  idCliente: number;
  identificacionMaquina: string;
  tipoTrabajo: number;
  cantidadHorasCargas: number;
  fechaUltimoMantenimiento: Date;

  constructor(idCliente: number, identificacionMaquina: string, tipoTrabajo: number,
              cantidadHorasCargas: number, fechaUltimoMantenimiento: Date, id?: number) {
    this.id = id;
    this.idCliente = idCliente;
    this.identificacionMaquina = identificacionMaquina;
    this.tipoTrabajo = tipoTrabajo;
    this.cantidadHorasCargas = cantidadHorasCargas;
    this.fechaUltimoMantenimiento = fechaUltimoMantenimiento;

  }
}

export interface CompraRespuesta {
  valor: number;
}
