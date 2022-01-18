import { Component, OnInit } from '@angular/core';
import { ToastService } from '@core/services/toast.service';


import { Cliente } from '@shared/model/Cliente';
import { ClienteService } from '@shared/service/cliente.service';


@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.css']
})
export class ListarClienteComponent implements OnInit {
  public clientes: Cliente[];
  constructor(protected clienteService: ClienteService, protected toastService: ToastService) { }

  ngOnInit() {
    this.obtenerProducto();
  }

  eliminarProducto(cliente: Cliente, index: number) {
    this.clienteService.eliminar(cliente).subscribe(
      res => {
        console.log(res);
        this.removerProductoEnLista(index);
        this.showSuccess('Eliminado exitosamente');
      }, error => {
        this.showDanger(error.error.mensaje);
      }
    );
  }
  obtenerProducto() {
    this.clienteService.consultar().subscribe(clientes => this.clientes = clientes);
  }

  showSuccess(mensaje) {
    this.toastService.show(mensaje, { classname: 'bg-success text-light'});
  }

  showDanger(dangerTpl) {
    this.toastService.show(dangerTpl, { classname: 'bg-danger text-light'});
  }

  removerProductoEnLista(index: number) {
    this.clientes.splice(index, 1);
  }
}
