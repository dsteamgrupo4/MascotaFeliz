import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { LoginComponent } from './login/login.component';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "cerrarSesion",
    component: CerrarSesionComponent
  },
  {
    path: "registroCliente",
    component: RegistroClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
