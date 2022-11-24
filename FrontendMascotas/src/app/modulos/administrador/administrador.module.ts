import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { CrearUsuarioComponent } from './crear-usuario/crear-usuario.component';
import { BuscarProductoComponent } from './buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { EliminaProductoComponent } from './elimina-producto/elimina-producto.component';
import { ModificarProductoComponent } from './modificar-producto/modificar-producto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';
import { CrearPlanComponent } from './crear-plan/crear-plan.component';
import { EditarPlanComponent } from './editar-plan/editar-plan.component';
import { ListarPlanComponent } from './listar-plan/listar-plan.component';
import { EliminarPlanComponent } from './eliminar-plan/eliminar-plan.component';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    BuscarProductoComponent,
    CrearProductoComponent,
    EliminaProductoComponent,
    ModificarProductoComponent,
    BuscarUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    ListarPlanComponent,
    EliminarPlanComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministradorModule { }
