import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { CrearPlanComponent } from './crear-plan/crear-plan.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { EditarPlanComponent } from './editar-plan/editar-plan.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EliminaProductoComponent } from './elimina-producto/elimina-producto.component';
import { EliminarPlanComponent } from './eliminar-plan/eliminar-plan.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';
import { ListarPlanComponent } from './listar-plan/listar-plan.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';

const routes: Routes = [
  {
   path:'crearUsuario',
   component: CrearUsuarioComponent
},
{
  path:'crearProducto',
  component: CrearProductoComponent,
  canActivate:[ValidadorSesionGuard]
},
{
  path:'buscarProducto',
  component: BuscarProductoComponent,
  canActivate:[ValidadorSesionGuard]
},
{
  path:'eliminarProducto',
  component: EliminaProductoComponent,
  canActivate:[ValidadorSesionGuard]
},
{
  path:'listarProducto',
  component: BuscarProductoComponent,
  canActivate:[ValidadorSesionGuard]
},
{
  path:'modificarProducto/:id',
  component: ModificarProductoComponent,
  canActivate:[ValidadorSesionGuard]
},
{
  path:'editarUsuario/:id',
  component: EditarUsuarioComponent
},
{
  path:'buscarUsuario',
  component: BuscarUsuarioComponent
},
{
  path:'eliminarUsuario',
  component: EliminarUsuarioComponent
},
{
  path:'listarUsuario',
  component: BuscarUsuarioComponent
},
{
  path:'crearPlan',
  component: CrearPlanComponent
},
{
  path:'editarPlan/:id',
  component: EditarPlanComponent
},
{
  path:'listarPlan',
  component: ListarPlanComponent
},
{
  path:'eliminarPlan',
  component: EliminarPlanComponent
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
