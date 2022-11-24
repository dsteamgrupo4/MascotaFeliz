import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProspectoComponent } from './crear-prospecto/crear-prospecto.component';

const routes: Routes = [
  {
    path:'crearProspecto',
    component: CrearProspectoComponent
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProspectoRoutingModule { }
