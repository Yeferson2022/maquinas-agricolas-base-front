export class ServicioPrestado {
  id: number;
  idCliente: number;
  identificacionMaquina: string;
  tipoTrabajo: number;
  cantidadHorasCargas: number;
  total: number;
  fechaUltimoMantenimiento: string;
  fechaProximoMantenimiento: string;
  nombre: string;
  identificacion: string;
  vereda: string;

  constructor(idCliente: number, identificacionMaquina: string, tipoTrabajo: number,
              cantidadHorasCargas: number, total: number, fechaUltimoMantenimiento: string, fechaProximoMantenimiento: string,
              nombre: string, identificacion: string, vereda: string, id?: number) {
    this.id = id;
    this.idCliente = idCliente;
    this.identificacionMaquina = identificacionMaquina;
    this.tipoTrabajo = tipoTrabajo;
    this.cantidadHorasCargas = cantidadHorasCargas;
    this.total = total;
    this.fechaUltimoMantenimiento = fechaUltimoMantenimiento;
    this.fechaProximoMantenimiento = fechaProximoMantenimiento;
    this.nombre = nombre;
    this.identificacion = identificacion;
    this.vereda = vereda;

  }
}

export interface ServicioPrestadoRespuesta {
  valor: number;
}
