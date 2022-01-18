import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ClienteService } from './cliente.service';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/core/services/http.service';
import { Cliente, ClienteRespuesta } from '../model/Cliente';
import { HttpResponse } from '@angular/common/http';

describe('ProductoService', () => {
  let httpMock: HttpTestingController;
  let service: ClienteService;
  const apiEndpointClienteConsulta = `${environment.endpoint}/clientes`;
  const apiEndpointCliente = `${environment.endpoint}/clientes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClienteService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    const productService: ClienteService = TestBed.inject(ClienteService);
    expect(productService).toBeTruthy();
  });

  it('deberia listar productos', () => {
    const dummyProductos = [
      new Cliente('A0A0', 'Cliente 1', '140000'), new Cliente('A0A1', 'Cliente 2', '140000')
    ];
    service.consultar().subscribe(productos => {
      expect(productos.length).toBe(2);
      expect(productos).toEqual(dummyProductos);
    });
    const req = httpMock.expectOne(apiEndpointClienteConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyProductos);
  });

  it('deberia crear un cliente', () => {
    const dummyProducto = new Cliente('A0A0', 'Cliente 1', '140000');
    service.guardar(dummyProducto).subscribe((respuesta) => {
      expect(respuesta).toEqual({ valor: 1 });
    });
    const req = httpMock.expectOne(apiEndpointCliente);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<ClienteRespuesta>({ body: { valor: 1 } }));
  });

  it('deberia eliminar un cliente', () => {
    const dummyProducto = new Cliente('A0A0', 'Cliente 1', '140000', 1);
    service.eliminar(dummyProducto).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointCliente}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});
