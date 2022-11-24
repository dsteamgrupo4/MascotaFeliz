import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';

const routes: Routes = [
  {
    path: "inicio",
    component: InicioComponent
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/inicio"
  },
  {
    path: "seguridad",
    loadChildren: () => import ("./modulos/seguridad/seguridad.module").then(x=> x.SeguridadModule)
  },
  {
    path: "prospecto",
    loadChildren: () => import ("./modulos/prospecto/prospecto.module").then(x=> x.ProspectoModule)
  },
  {
    path: "sucursales",
    loadChildren: () => import ("./modulos/sucursales/sucursales.module").then(x=> x.SucursalesModule)
  },
  {
    path: "administrador",
    loadChildren: () => import ("./modulos/administrador/administrador.module").then(x=> x.AdministradorModule)
  },
  {
    path: "cliente",
    loadChildren: () => import ("./modulos/cliente/cliente.module").then(x=> x.ClienteModule)
  },
  {
    path: "asesor",
    loadChildren: () => import ("./modulos/asesor/asesor.module").then(x=> x.AsesorModule)
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
