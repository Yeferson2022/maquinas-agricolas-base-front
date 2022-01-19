import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {of} from 'rxjs';

import {ListarServicioPrestadoComponent} from './listar-servicioPrestado.component';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';


import {HttpService} from 'src/app/core/services/http.service';
import {ServicioPrestadoService} from '../../shared/service/servicioPrestado.service';
import {ServicioPrestado} from '../../shared/model/servicioPrestado';


describe('ListarCompraComponent', () => {
  let component: ListarServicioPrestadoComponent;
  let fixture: ComponentFixture<ListarServicioPrestadoComponent>;
  let servicioPrestadoService: ServicioPrestadoService;
  const servicioPrestados: ServicioPrestado[] = [new ServicioPrestado(1, 'Ford 6600', 3,
    11, 220000,   '2022/01/12', '2022-01-11', 'Yeferson',
    '1094580', 'Bello Valle'), new
  ServicioPrestado(2, 'Ford 5000', 2, 2, 500000,
      '2022-01-14', '2022-01-11', 'Yeferson', '1094580', 'Bello Valle')];


  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarServicioPrestadoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ServicioPrestadoService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarServicioPrestadoComponent);
    component = fixture.componentInstance;
    servicioPrestadoService = TestBed.inject(ServicioPrestadoService);
    spyOn(servicioPrestadoService, 'consultar').and.returnValue(
      of(servicioPrestados)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.servicioPrestados.length).toBe(2);
  });

  it('should list compras', () => {
    expect(component.servicioPrestados.length).toBe(2);
  });

  it('should delete servicioPrestado', () => {
    component.removerServicioPrestadoDeLista(servicioPrestados, servicioPrestados[0]);
    expect(component.servicioPrestados.length).toBe(1);
  });
});
