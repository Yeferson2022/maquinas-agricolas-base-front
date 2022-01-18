import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarCompraComponent } from './listar-compra.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


import { HttpService } from 'src/app/core/services/http.service';
import { ServicioPrestadoService } from '../../shared/service/servicioPrestado.service';
import { ServicioPrestado } from '../../shared/model/servicioPrestado';


describe('ListarCompraComponent', () => {
  let component: ListarCompraComponent;
  let fixture: ComponentFixture<ListarCompraComponent>;
  let compraService: ServicioPrestadoService;
  const listaCompras: ServicioPrestado[] = [new ServicioPrestado(123456789, 'Calle 1', 'Bogotá', 1, 1, 1), new ServicioPrestado(123456789, 'Calle 1', 'Bogotá', 1, 1, 1)];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarCompraComponent],
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
    fixture = TestBed.createComponent(ListarCompraComponent);
    component = fixture.componentInstance;
    compraService = TestBed.inject(ServicioPrestadoService);
    spyOn(compraService, 'consultar').and.returnValue(
      of(listaCompras)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.compras.length).toBe(2);
  });

  it('should list compras', () => {
    expect(component.compras.length).toBe(2);
  });

  it('should delete servicioPrestado', () => {
    component.removerCompraDeLista(listaCompras, listaCompras[0]);
    expect(component.compras.length).toBe(1);
  });
});
