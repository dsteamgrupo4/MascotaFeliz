import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SucursalesRoutingModule } from './sucursales-routing.module';
import { CrearSucursalComponent } from './crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './editar-sucursal/editar-sucursal.component';
import { ListarSucursalComponent } from './listar-sucursal/listar-sucursal.component';
import { EliminarSucursalComponent } from './eliminar-sucursal/eliminar-sucursal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearSucursalComponent,
    EditarSucursalComponent,
    ListarSucursalComponent,
    EliminarSucursalComponent
  ],
  imports: [
    CommonModule,
    SucursalesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SucursalesModule { }
