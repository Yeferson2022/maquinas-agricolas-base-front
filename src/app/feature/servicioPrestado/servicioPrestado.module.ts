import { NgModule } from '@angular/core';

import { CompraRoutingModule } from './compra-routing.module';
import { ListarCompraComponent } from './components/listar-servicioPrestado/listar-compra.component';
import { CrearServicioPrestadoComponent } from './components/crear-servicioPrestado/crear-servicioPrestado.component';
import { CompraComponent } from './components/servicioPrestado/compra.component';
import { SharedModule } from '@shared/shared.module';
import { ServicioPrestadoService } from './shared/service/servicioPrestado.service';
import { CiudadService } from '@shared/service/ciudad.service';
import { ClienteService } from '@shared/service/cliente.service';



@NgModule({
  declarations: [
    CrearServicioPrestadoComponent,
    ListarCompraComponent,
    CompraComponent
  ],
  imports: [
    CompraRoutingModule,
    SharedModule
  ],
  providers: [ServicioPrestadoService, CiudadService, ClienteService]
})
export class ServicioPrestadoModule { }
