import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearServicioPrestadoComponent } from './components/crear-servicioPrestado/crear-servicioPrestado.component';
import { ListarCompraComponent } from './components/listar-servicioPrestado/listar-compra.component';
import { CompraComponent } from './components/servicioPrestado/compra.component';


const routes: Routes = [
  {
    path: '',
    component: CompraComponent,
    children: [
      {
        path: 'crear',
        component: CrearServicioPrestadoComponent
      },
      {
        path: 'listar',
        component: ListarCompraComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
