import { Component, OnInit } from '@angular/core';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-listar-plan',
  templateUrl: './listar-plan.component.html',
  styleUrls: ['./listar-plan.component.css']
})
export class ListarPlanComponent implements OnInit {

  listadoRegistros: ModeloPlan[]=[];

  constructor(private planesServicio: PlanesService) { }

  ngOnInit(): void {
    this.ObtenerListadoPlanes();
  }

  ObtenerListadoPlanes(){
    this.planesServicio.ObtenerRegistros().subscribe((datos: ModeloPlan[])=>{
      this.listadoRegistros = datos;     
    })
  }

  eliminarPlan(id: string | undefined){
    this.planesServicio.EliminarPlan(id).subscribe(() => {
      alert("Plan Eliminado correctamente");
      this.listadoRegistros = this.listadoRegistros.filter(dato => dato.id!=id);      
    }, (error: any) => {
      alert("Ha habido un error al eliminar el plan");
    })

  }
}
