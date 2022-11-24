import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteRoutingModule } from './cliente-routing.module';
import { RegistrarMascotaComponent } from './registrar-mascota/registrar-mascota.component';
import { ListarMascotaComponent } from './listar-mascota/listar-mascota.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditarMascotaComponent } from './editar-mascota/editar-mascota.component';
import { ListarPlanComponent } from './listar-plan/listar-plan.component';
import { ListarSucursalComponent } from './listar-sucursal/listar-sucursal.component';
import { ListarProductosComponent } from './listar-productos/listar-productos.component';


@NgModule({
  declarations: [
    RegistrarMascotaComponent,
    ListarMascotaComponent,
    EditarMascotaComponent,
    ListarPlanComponent,
    ListarSucursalComponent,
    ListarProductosComponent
  ],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClienteModule { }
