import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {ServicioPrestadoService} from '../../shared/service/servicioPrestado.service';
import {HttpService} from '@core/services/http.service';
import {ClienteService} from '@shared/service/cliente.service';
import {of} from 'rxjs';

import {CrearServicioPrestadoComponent} from './crear-servicioPrestado.component';

describe('CrearServicioPrestadoComponent', () => {
  let component: CrearServicioPrestadoComponent;
  let fixture: ComponentFixture<CrearServicioPrestadoComponent>;
  let servicioPrestadoService: ServicioPrestadoService;
  let clienteService: ClienteService;

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
      providers: [ServicioPrestadoService, ClienteService, HttpService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearServicioPrestadoComponent);
    component = fixture.componentInstance;
    servicioPrestadoService = TestBed.inject(ServicioPrestadoService);
    clienteService = TestBed.inject(ClienteService);
    spyOn(servicioPrestadoService, 'guardar').and.returnValue(
      of({valor: 1})
    );
    spyOn(clienteService, 'consultar').and.returnValue(
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
    component.servicioPrestadoForm.controls.identificacionMaquina.setValue('Ford 5000');
    component.servicioPrestadoForm.controls.cantidadHorasCargas.setValue(11);
    component.servicioPrestadoForm.controls.idCliente.setValue(1);
    component.servicioPrestadoForm.controls.tipoTrabajo.setValue(1);
    component.servicioPrestadoForm.controls.fechaUltimoMantenimiento.setValue('2022-01-14');

    expect(component.servicioPrestadoForm.valid).toBeTruthy();

    component.crear();

  });
});
