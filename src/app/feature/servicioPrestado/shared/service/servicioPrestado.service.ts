import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { ServicioPrestado, CompraRespuesta } from '../model/servicioPrestado';


@Injectable()
export class ServicioPrestadoService {

  constructor(protected http: HttpService) { }

  public consultar() {
    // tslint:disable-next-line:max-line-length
    return this.http.doGet<ServicioPrestado[]>(`${environment.endpoint}/servicio`, this.http.optsName('Listar Todos Los Servicios Prestados'));
  }
  public consultarPorIdentificadorCliente(idCliente: number) {
    return this.http.doGet<ServicioPrestado[]>(`${environment.endpoint}/servicio/` + idCliente, this.http.optsName('Consultar Servicio Prestado A Un Cliente En Especifico'));
  }
  public guardar(servicioPrestado: ServicioPrestado) {
    return this.http.doPost<ServicioPrestado, CompraRespuesta>(`${environment.endpoint}/servicio`, servicioPrestado,
      this.http.optsName('Crear/Actualizar servicio'));
  }

  public eliminar(servicioPrestado: ServicioPrestado) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/servicio/${servicioPrestado.id}`,
      this.http.optsName('Eliminar servicio'));
  }
}
