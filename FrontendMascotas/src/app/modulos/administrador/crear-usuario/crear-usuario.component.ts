import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit { 

  fgValidator: FormGroup = this.fb.group({
    
    'cedula': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'rol': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarUsuario() {
    let cedula = this.fgValidator.controls["cedula"].value;
    let nombre = this.fgValidator.controls["nombre"].value;
    let apellido = this.fgValidator.controls["apellido"].value;
    let telefono = this.fgValidator.controls["telefono"].value;
    let correo = this.fgValidator.controls["correo"].value;
    let rol = this.fgValidator.controls["rol"].value;
    let p = new ModeloUsuario();
    p.nombre = nombre;
    p.apellido = apellido;
    p.cedula = cedula;
    p.telefono = telefono;
    p.correo = correo;
    p.rol = rol;

    this.servicioUsuario.CrearUsuario(p).subscribe((datos: ModeloUsuario) => {
      alert("Usuario almacenado correctamente");
      this.router.navigate(["/administrador/listarUsuario"])
    }, (error: any) => {
      alert("Ha habido un error al almacenar el usuario");
    })
  }
}
