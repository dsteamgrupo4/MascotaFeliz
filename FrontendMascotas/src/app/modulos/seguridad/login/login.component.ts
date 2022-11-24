import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fgValidador: FormGroup = this.fb.group({
    'usuario':["",[Validators.required,Validators.email]],
    'contrasena':["",[Validators.required]]
  });
  constructor(private fb: FormBuilder,
    private servicioSeguridad: SeguridadService,
    private router: Router) { }

  ngOnInit(): void {    
  }

  identificarUsuario(){
    let usuario = this.fgValidador.controls["usuario"].value;
    let contrasena = this.fgValidador.controls["contrasena"].value;
    
    let contrasenaCifrada = cryptoJS.MD5(contrasena).toString();
    this.servicioSeguridad.Identificar(usuario,contrasenaCifrada).subscribe((datos:any)=>{
      console.log(datos);
      
      this.servicioSeguridad.AlmacenarSesion(datos);
      alert("Datos Correctos")
    this.router.navigate(["/inicio"]);
    }, (error: any)=>{
      //ko
      alert("Datos invalidos")
    })

  }

}
