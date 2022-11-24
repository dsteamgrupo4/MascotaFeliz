import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrarMascotaComponent } from '../cliente/registrar-mascota/registrar-mascota.component';
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';
import { ListarMascotaComponent } from './listar-mascota/listar-mascota.component';
import { ListarPlanComponent } from './listar-plan/listar-plan.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';
import { ListarSucursalComponent } from './listar-sucursal/listar-sucursal.component';

const routes: Routes = [
  {
    path: "registrarMascota",
    component: RegistrarMascotaComponent
  },
  {
    path: "listarMascota",
    component: ListarMascotaComponent
  },
  {
    path: "listarProductos",
    component: ListarProductosComponent
  },
  {
    path: "listarPlan",
    component: ListarPlanComponent
  },
  {
    path: "listarSucursal",
    component: ListarSucursalComponent
  },
  {
    path: "editarMascota/:id",
    component: EditarMascotaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
