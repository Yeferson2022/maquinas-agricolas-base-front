import { NgModule } from '@angular/core';

import { CompraRoutingModule } from './compra-routing.module';
import { ListarServicioPrestadoComponent } from './components/listar-servicioPrestado/listar-servicioPrestado.component';
import { CrearServicioPrestadoComponent } from './components/crear-servicioPrestado/crear-servicioPrestado.component';
import { ServicioPrestadoComponent } from './components/servicioPrestado/servicioPrestado.component';
import { SharedModule } from '@shared/shared.module';
import { ServicioPrestadoService } from './shared/service/servicioPrestado.service';
import { CiudadService } from '@shared/service/ciudad.service';
import { ClienteService } from '@shared/service/cliente.service';



@NgModule({
  declarations: [
    CrearServicioPrestadoComponent,
    ListarServicioPrestadoComponent,
    ServicioPrestadoComponent
  ],
  imports: [
    CompraRoutingModule,
    SharedModule
  ],
  providers: [ServicioPrestadoService, CiudadService, ClienteService]
})
export class ServicioPrestadoModule { }
