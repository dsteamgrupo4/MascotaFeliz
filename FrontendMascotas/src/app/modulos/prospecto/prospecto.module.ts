import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProspectoRoutingModule } from './prospecto-routing.module';
import { CrearProspectoComponent } from './crear-prospecto/crear-prospecto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearProspectoComponent
  ],
  imports: [
    CommonModule,
    ProspectoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProspectoModule { }
