import { Component, OnInit } from '@angular/core';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css']
})
export class ListarSOlicitudesComponent implements OnInit {

  listadoRegistro: ModeloProspecto[]=[];

  constructor(private prospecto: ProspectoService) { }

  ngOnInit(): void {
    this.ObtenerListadoProspectos();
  } 

  ObtenerListadoProspectos(){
    this.prospecto.ObtenerRegistros().subscribe((datos: ModeloProspecto[])=>{
      this.listadoRegistro = datos;     
    })

  }

  eliminarProspecto(id: string | undefined){
    this.prospecto.EliminarProspecto(id).subscribe(() => {
      alert("Solicitud Eliminada correctamente");
      this.listadoRegistro = this.listadoRegistro.filter(dato => dato.id!=id);
      
    }, (error: any) => {
      alert("Ha habido un error al eliminar la solicitud");
    })    
  }

}
