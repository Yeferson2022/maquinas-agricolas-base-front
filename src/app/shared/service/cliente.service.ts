import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { Cliente, ClienteRespuesta } from '@shared/model/Cliente';
import { environment } from 'src/environments/environment';



@Injectable()
export class ClienteService {

  constructor(protected http: HttpService) { }

  public consultar() {
    return this.http.doGet<Cliente[]>(`${environment.endpoint}/clientes`, this.http.optsName('Listar clientes'));
  }

  public guardar(cliente: Cliente) {
    return this.http.doPost<Cliente, ClienteRespuesta>(`${environment.endpoint}/clientes`, cliente,
      this.http.optsName('Crear/Actualizar cliente'));
  }

  public eliminar(cliente: Cliente) {
    return this.http.doDelete<boolean>(`${environment.endpoint}/clientes/${cliente.id}`,
      this.http.optsName('Eliminar cliente'));
  }
}
