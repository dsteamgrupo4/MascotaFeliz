import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearSucursalComponent } from './crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './eliminar-sucursal/eliminar-sucursal.component';
import { ListarSucursalComponent } from './listar-sucursal/listar-sucursal.component';

const routes: Routes = [
  {
    path: "crearSucursal",
    component: CrearSucursalComponent
  },
  {
    path: 'editarSucursal/:id',
    component: EditarSucursalComponent
  },
  {
    path: "eliminarSucursal",
    component: EliminarSucursalComponent
  },
  {
    path: "listarSucursal",
    component: ListarSucursalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SucursalesRoutingModule { }
