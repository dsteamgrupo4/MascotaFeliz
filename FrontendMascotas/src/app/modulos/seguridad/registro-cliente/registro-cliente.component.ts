import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.css']
})
export class RegistroClienteComponent implements OnInit {
  listadoRegistro: ModeloUsuario[]=[];
  fgValidator: FormGroup = this.fb.group({
   
    'cedula': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'rol': ['Cliente', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioUsuario: UsuarioService,
    private router: Router,
    private usuario: UsuarioService) { }

  ngOnInit(): void {
    this.ObtenerListadoUsuarios();
  }

  ObtenerListadoUsuarios(){
    this.usuario.ObtenerRegistros().subscribe((datos: ModeloUsuario[])=>{
      this.listadoRegistro = datos;      
    })
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

    if (this.listadoRegistro.find(x => x.correo == correo)){
      alert("Ya hay un usuario con este correo")
      this.router.navigate(["/seguridad/registroCliente"])
    }else{
      this.servicioUsuario.CrearUsuario(p).subscribe((datos: ModeloUsuario) => {
        alert("Usuario almacenado correctamente revice su correo");
        this.router.navigate(["/inicio"])
      }, (error: any) => {
        alert("Ha habido un error al almacenar el usuario");
      })
    }    
  }
}
