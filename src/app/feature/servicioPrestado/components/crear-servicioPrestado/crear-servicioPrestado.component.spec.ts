import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ServicioPrestadoService } from '../../shared/service/servicioPrestado.service';
import { HttpService } from '@core/services/http.service';
import { CiudadService } from '@shared/service/ciudad.service';
import { ClienteService } from '@shared/service/cliente.service';
import { of } from 'rxjs';

import { CrearServicioPrestadoComponent } from './crear-servicioPrestado.component';

describe('CrearCompraComponent', () => {
  let component: CrearServicioPrestadoComponent;
  let fixture: ComponentFixture<CrearServicioPrestadoComponent>;
  let compraService: ServicioPrestadoService;
  let ciudadService: CiudadService;
  let productoService: ClienteService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [CrearServicioPrestadoComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule
      ],
      providers: [ServicioPrestadoService, CiudadService, ClienteService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearServicioPrestadoComponent);
    component = fixture.componentInstance;
    compraService = TestBed.inject(ServicioPrestadoService);
    productoService = TestBed.inject(ClienteService);
    ciudadService = TestBed.inject(CiudadService);
    spyOn(compraService, 'guardar').and.returnValue(
      of({ valor: 1 })
    );
    spyOn(ciudadService, 'consultar').and.returnValue(
      of([
        {
          id: 1,
          nombre: 'Bogotá'
        }
      ])
    );
    spyOn(productoService, 'consultar').and.returnValue(
      of([
        {
          id: 1,
          nombre: 'Yeferson',
          identificacion: '10958',
          vereda: 'Bello Valle'
        }
      ])
    );
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearServicioPrestadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.servicioPrestadoForm.valid).toBeFalsy();
  });

  it('Registrando servicioPrestado', () => {
    component.servicioPrestadoForm.controls.identificadorUsuario.setValue(123456789);
    component.servicioPrestadoForm.controls.direccion.setValue('Calle 1');
    component.servicioPrestadoForm.controls.ciudad.setValue('Bogotá');
    component.servicioPrestadoForm.controls.productoId.setValue(1);
    component.servicioPrestadoForm.controls.tipoUsuario.setValue(1);

    expect(component.servicioPrestadoForm.valid).toBeTruthy();

    component.crear();

  });
});
