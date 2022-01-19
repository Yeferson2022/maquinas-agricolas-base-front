import {Component, OnInit} from '@angular/core';
import {ServicioPrestado} from '../../shared/model/servicioPrestado';
import {ServicioPrestadoService} from '../../shared/service/servicioPrestado.service';
import {ToastService} from '@core/services/toast.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-listar-servicioPrestado',
  templateUrl: './listar-servicioPrestado.component.html',
  styleUrls: ['./listar-servicioPrestado.component.css']
})
export class ListarServicioPrestadoComponent implements OnInit {
  identificacionMaquina: number;
  public servicioPrestados: ServicioPrestado[];
  ocultar: boolean;

  constructor(protected compraService: ServicioPrestadoService, protected toastService: ToastService) {
    this.ocultar = false;
  }

  ngOnInit(): void {
    this.consultarServicioPrestado();
  }

  consultarServiciosPorIdentificacionMaquina(identificacionMaquina: string) {
    this.ocultar = false;
    this.compraService.consultarPorIdentificadorMaquina(identificacionMaquina).subscribe(servicioPrestado => {
      this.servicioPrestados = servicioPrestado;
    });
  }

  consultarServiciosPorIdentificacionCliente(idCliente: string) {
    this.ocultar = true;
    this.compraService.consultarPorIdentificadorCliente(idCliente).subscribe(servicioPrestado => {
      this.servicioPrestados = servicioPrestado;
      console.log(servicioPrestado);
    });
  }

  consultarServicioPrestado() {
    this.compraService.consultar().subscribe(compras => this.servicioPrestados = compras);
  }

  eliminarServicioPrestado(servicioPrestado: ServicioPrestado) {
    this.compraService.eliminar(servicioPrestado).subscribe(
      res => {
        console.log(res);
        this.removerServicioPrestadoDeLista(this.servicioPrestados, servicioPrestado);
        this.showSuccess('Eliminado exitoso');
      }, error => {
        this.showDanger(error.error.mensaje);
      }
    );
  }

  removerServicioPrestadoDeLista(prestados: ServicioPrestado[], compra: ServicioPrestado) {
    const i = prestados.indexOf(compra);
    if (i !== -1) {
      prestados.splice(i, 1);
    }
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, {classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, {classname: 'bg-danger text-light'});
  }

}
