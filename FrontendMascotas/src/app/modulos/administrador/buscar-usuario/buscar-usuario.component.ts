import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {
  listadoRegistro: ModeloUsuario[]=[];

  constructor(private usuario: UsuarioService) { }

  ngOnInit(): void {
    this.ObtenerListadoUsuarios();
  } 

  ObtenerListadoUsuarios(){
    this.usuario.ObtenerRegistros().subscribe((datos: ModeloUsuario[])=>{
      this.listadoRegistro = datos;    
    })

  }

  eliminarUsuario(id: string | undefined){
    this.usuario.EliminarUsuario(id).subscribe(() => {
      alert("Usuario eliminar correctamente");
      this.listadoRegistro = this.listadoRegistro.filter(dato => dato.id!=id);
      
    }, (error: any) => {
      alert("Ha habido un error al eliminar r el usuario");
    })

    
  }

 

}
