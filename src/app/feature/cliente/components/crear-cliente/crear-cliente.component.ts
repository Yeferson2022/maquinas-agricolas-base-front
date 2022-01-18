import {Component, OnInit} from '@angular/core';

import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastService} from '@core/services/toast.service';
import {ClienteService} from '@shared/service/cliente.service';


@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {
  clienteForm: FormGroup;

  constructor(protected clienteServices: ClienteService, protected toastService: ToastService) {
  }

  ngOnInit() {
    this.construirFormularioProducto();
  }

  crear() {
    this.clienteServices.guardar(this.clienteForm.value).subscribe(
      res => {
        if (res.valor > 0) {
          this.clienteForm.reset();
          this.showSuccess('Registro Exitoso');
        }
      }, error => {
        this.showDanger(error.error.mensaje);
      });
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, {classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {classname: 'bg-danger text-light'});
  }

  private construirFormularioProducto() {
    this.clienteForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      vereda: new FormControl('', [Validators.required])
    });
  }

  public validarAlfanumerico(event, form: AbstractControl) {
    event.target.value = event.target.value.replace(/[^A-ZÁÉÍÓÚÑa-záéíóúñ0123456789\s]+/g, '').trimLeft();
    const start = event.target.selectionStart;
    event.target.value = event.target.value.toUpperCase();
    event.target.selectionStart = start;
    event.target.selectionEnd = start;
    if (form.value) {
      form.setValue(event.target.value, {emitEvent: false});
    } else {
      return event.target.value;
    }
  }
}
