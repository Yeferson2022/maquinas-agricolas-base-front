import { Component, OnInit } from '@angular/core';
import { ServicioPrestado } from '../../shared/model/servicioPrestado';
import { ServicioPrestadoService } from '../../shared/service/servicioPrestado.service';
import { ToastService } from '@core/services/toast.service';


@Component({
  selector: 'app-listar-servicioPrestado',
  templateUrl: './listar-compra.component.html',
  styleUrls: ['./listar-compra.component.css']
})
export class ListarCompraComponent implements OnInit {
  identificadorUsuario: number;
  public compras: ServicioPrestado[];
  constructor(protected compraService: ServicioPrestadoService, protected toastService: ToastService) { }

  ngOnInit(): void {
    this.consultarCompras();
  }
  consultarComprasPorIdUsuario(identificadorUsuario: number) {
    this.compraService.consultarPorIdentificadorCliente(identificadorUsuario).subscribe(compras => this.compras = compras);
  }

  consultarCompras() {
    this.compraService.consultar().subscribe(compras => this.compras = compras);
  }

  eliminarCompra(compra: ServicioPrestado) {
    this.compraService.eliminar(compra).subscribe(
      res => {
        console.log(res);
        this.removerCompraDeLista(this.compras, compra);
        this.showSuccess('Eliminado exitoso');
      }, error => {
        this.showDanger(error.error.mensaje);
      }
    );
  }
  removerCompraDeLista(compras: ServicioPrestado[], compra: ServicioPrestado) {
    const i = compras.indexOf(compra);
    if (i !== -1) {
      compras.splice(i, 1);
    }
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, { classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light'});
  }

}
