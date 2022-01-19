import {TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {environment} from 'src/environments/environment';
import {HttpService} from 'src/app/core/services/http.service';

import {HttpResponse} from '@angular/common/http';

import {ServicioPrestadoRespuesta, ServicioPrestado} from '../model/servicioPrestado';
import {ServicioPrestadoService} from './servicioPrestado.service';


describe('ServicioPrestadoService', () => {
  let httpMock: HttpTestingController;
  let service: ServicioPrestadoService;
  const apiEndpointServicioPrestadoConsulta = `${environment.endpoint}/servicio`;
  const apiEndpointServicioPrestado = `${environment.endpoint}/servicio`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServicioPrestadoService, HttpService]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ServicioPrestadoService);
  });

  it('should be created', () => {
    const compraService: ServicioPrestadoService = TestBed.inject(ServicioPrestadoService);
    expect(compraService).toBeTruthy();
  });

  it('deberia listar los ServicioPrestado', () => {
    const servicioPrestados = [new ServicioPrestado(1, 'Ford 6600', 3,
      11, 220000,   '2022/01/12', '2022-01-11', 'Yeferson',
      '1094580', 'Bello Valle'), new
    ServicioPrestado(2, 'Ford 5000', 2, 2, 500000,
      '2022-01-14', '2022-01-11', 'Yeferson', '1094580', 'Bello Valle')];

    service.consultar().subscribe(servicioPrestado => {
      expect(servicioPrestado.length).toBe(2);
      expect(servicioPrestado).toEqual(servicioPrestados);
    });
    const req = httpMock.expectOne(apiEndpointServicioPrestadoConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(servicioPrestados);
  });

  it('deberia crear un servicioPrestado', () => {
    const dummyServicioPrestado = new ServicioPrestado(1, 'Ford 6600', 3,
      11, 220000,   '2022/01/12', '2022-01-11', 'Yeferson',
      '1094580', 'Bello Valle');
    service.guardar(dummyServicioPrestado).subscribe((respuesta) => {
      expect(respuesta).toEqual({valor: 1});
    });
    const req = httpMock.expectOne(apiEndpointServicioPrestado);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<ServicioPrestadoRespuesta>({body: {valor: 1}}));
  });
});
