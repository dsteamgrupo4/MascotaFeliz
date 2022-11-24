import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  id: string='';
  fgValidator: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'cedula': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],    
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'rol': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarUsuario();
  }

  BuscarUsuario(){
    this.servicioUsuario.ObtenerRegistroPorId(this.id).subscribe((datos:ModeloUsuario)=>{
      this.fgValidator.controls["id"].setValue(this.id);      
      this.fgValidator.controls["cedula"].setValue(datos.cedula);
      this.fgValidator.controls["nombre"].setValue(datos.nombre);
      this.fgValidator.controls["apellido"].setValue(datos.apellido);
      this.fgValidator.controls["telefono"].setValue(datos.telefono);
      this.fgValidator.controls["correo"].setValue(datos.correo);
      this.fgValidator.controls["rol"].setValue(datos.rol);
    });
  }

  EditarUsuario() {
    
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
    p.id=this.id;

    this.servicioUsuario.ModificarUsuario(p).subscribe((datos: ModeloUsuario) => {
      alert("Usuario actualizado correctamente");
      this.router.navigate(["/administrador/listarUsuario"])
    }, (error: any)=>{
      alert("Ha habido un error al actualizar el usuario");
    })
  }
}
