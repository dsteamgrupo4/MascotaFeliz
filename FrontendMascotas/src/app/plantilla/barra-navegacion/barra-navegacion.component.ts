import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModeloIdentificar } from 'src/app/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  seInicioSesion: boolean = false;

  subs: Subscription = new Subscription();

  constructor(private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.subs = this.seguridadServicio.ObtenerDatosUsuarioEnSesion().subscribe((datos:ModeloIdentificar)=>{
    this.seInicioSesion = datos.estaIdentificado;
    })
  }

  isValido(rol: string){
    //usuario =this.seguridadServicio.ObtenerInformacionSesion();
    //usuario.id
    return this.seguridadServicio.ValidaRol(rol);
  }

}
