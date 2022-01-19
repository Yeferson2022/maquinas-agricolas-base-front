import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarServicioPrestadoComponent } from './listar-servicioPrestado.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


import { HttpService } from 'src/app/core/services/http.service';
import { ServicioPrestadoService } from '../../shared/service/servicioPrestado.service';
import { ServicioPrestado } from '../../shared/model/servicioPrestado';


describe('ListarCompraComponent', () => {
  let component: ListarServicioPrestadoComponent;
  let fixture: ComponentFixture<ListarServicioPrestadoComponent>;
  let compraService: ServicioPrestadoService;
  const listaCompras: ServicioPrestado[] = [new ServicioPrestado(123456789, 'Calle 1', 1, 1, 1, 1), new ServicioPrestado(123456789, 'Calle 1', 2, 1, 2022/01/11, 1)];

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
    compraService = TestBed.inject(ServicioPrestadoService);
    spyOn(compraService, 'consultar').and.returnValue(
      of(listaCompras)
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
    component.removerCompraDeLista(listaCompras, listaCompras[0]);
    expect(component.servicioPrestados.length).toBe(1);
  });
});
