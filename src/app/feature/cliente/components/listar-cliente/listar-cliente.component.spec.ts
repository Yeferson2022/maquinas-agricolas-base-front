import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ListarClienteComponent } from './listar-cliente.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';


import { HttpService } from 'src/app/core/services/http.service';
import { ClienteService } from '@shared/service/cliente.service';
import { Cliente } from '@shared/model/Cliente';

describe('ListarProductoComponent', () => {
  let component: ListarClienteComponent;
  let fixture: ComponentFixture<ListarClienteComponent>;
  let productoService: ClienteService;
  const listaProductos: Cliente[] = [new Cliente('A0A0', 'Cliente 1', 'Bello Valle'), new Cliente('A0A2', 'Cliente 2', 'Bello Valle')];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ListarClienteComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [ClienteService, HttpService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClienteComponent);
    component = fixture.componentInstance;
    productoService = TestBed.inject(ClienteService);
    spyOn(productoService, 'consultar').and.returnValue(
      of(listaProductos)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list correctly', () => {
    expect(component.clientes.length).toBe(2);
  });

});
