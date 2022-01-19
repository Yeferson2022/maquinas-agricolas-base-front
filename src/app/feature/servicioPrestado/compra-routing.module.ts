import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearServicioPrestadoComponent } from './components/crear-servicioPrestado/crear-servicioPrestado.component';
import { ListarServicioPrestadoComponent } from './components/listar-servicioPrestado/listar-servicioPrestado.component';
import { ServicioPrestadoComponent } from './components/servicioPrestado/servicioPrestado.component';


const routes: Routes = [
  {
    path: '',
    component: ServicioPrestadoComponent,
    children: [
      {
        path: 'crear',
        component: CrearServicioPrestadoComponent
      },
      {
        path: 'listar',
        component: ListarServicioPrestadoComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompraRoutingModule { }
