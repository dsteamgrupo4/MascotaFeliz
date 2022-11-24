import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministraSolicitudesComponent } from './administra-solicitudes/administra-solicitudes.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { ListarSOlicitudesComponent,  } from './listar-solicitudes/listar-solicitudes.component';

const routes: Routes = [
  {
    path: "listaMascotas",
    component: ListaMascotasComponent
  }, 
  {
    path: "administraSolicitudes",
    component: AdministraSolicitudesComponent
  },
  {
    path: "listarSolicitudes",
    component: ListarSOlicitudesComponent
  },
  {
    path: "editarMascotas/:id",
    component: EditarMascotasComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsesorRoutingModule { }
