import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguridadRoutingModule } from './seguridad-routing.module';
import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { LoginComponent } from './login/login.component';
import { RecuperarContrasenaComponent } from './recuperar-contrasena/recuperar-contrasena.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';



@NgModule({
  declarations: [
    RegistroClienteComponent,
    LoginComponent,
    RecuperarContrasenaComponent,
    CerrarSesionComponent
  ],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class SeguridadModule { }
