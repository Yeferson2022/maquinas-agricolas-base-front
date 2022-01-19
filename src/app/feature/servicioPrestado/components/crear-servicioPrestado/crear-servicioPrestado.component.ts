import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ServicioPrestadoService} from '../../shared/service/servicioPrestado.service';
import {Cliente} from '@shared/model/Cliente';

import {Observable} from 'rxjs';
import {ClienteService} from '@shared/service/cliente.service';
import {ToastService} from '@core/services/toast.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-crear-servicioPrestado',
  templateUrl: './crear-servicioPrestado.component.html',
  styleUrls: ['./crear-servicioPrestado.component.css']
})
export class CrearServicioPrestadoComponent implements OnInit {
  servicioPrestadoForm: FormGroup;
  clientes: Observable<Cliente[]>;
  tipoTrabajo: any;

  constructor(
    protected clienteService: ClienteService,
    protected servicioPrestadoService: ServicioPrestadoService,
    protected toastService: ToastService) {
  }

  ngOnInit() {
    this.construirFormularioCompra();
    this.consultarClientes();
    this.cargarTiposTrabajo();
  }

  private cargarTiposTrabajo() {
    this.tipoTrabajo = [
      {tipo: '1 Arado', id: 1},
      {tipo: '2 Rotavito', id: 2},
      {tipo: '3 Esgranadora', id: 3},
    ];
  }

  crear() {
    this.servicioPrestadoService.guardar(this.servicioPrestadoForm.value).subscribe(
      res => {
        if (res.valor > 0) {
          this.servicioPrestadoForm.reset();
          this.showSuccess('Registro exitoso');
        }
      }, error => {
        this.showDanger(error.error.mensaje);
      });
  }

  consultarClientes() {
    this.clientes = this.clienteService.consultar();
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, {classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {classname: 'bg-danger text-light'});
  }

  private construirFormularioCompra() {
    this.servicioPrestadoForm = new FormGroup({
      identificacionMaquina: new FormControl('', [Validators.required, Validators.minLength(6),
        Validators.maxLength(20)]),
      tipoTrabajo: new FormControl('', [Validators.required]),
      idCliente: new FormControl(''),
      cantidadHorasCargas: new FormControl('', [Validators.required]),
      fechaUltimoMantenimiento: new FormControl(''),
    });
  }
}
