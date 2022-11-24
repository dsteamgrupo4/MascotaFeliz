import { Component, OnInit } from '@angular/core';
import { ModeloSucursals } from 'src/app/modelos/sucursales.modelo';
import { SucursalesService } from 'src/app/servicios/sucursales.service';

@Component({
  selector: 'app-listar-sucursal',
  templateUrl: './listar-sucursal.component.html',
  styleUrls: ['./listar-sucursal.component.css']
})
export class ListarSucursalComponent implements OnInit {
  listadoRegistro: ModeloSucursals[]=[];

  constructor(private sucursal: SucursalesService) { }

  ngOnInit(): void {
    this.ObtenerListadoSucursales();
  } 

  ObtenerListadoSucursales(){
    this.sucursal.ObtenerRegistros().subscribe((datos: ModeloSucursals[])=>{
      this.listadoRegistro = datos;     
    })

  }

  eliminarSucursal(id: string | undefined){
    this.sucursal.EliminarSucursal(id).subscribe(() => {
      alert("Se ha eliminado la sucursal");
      this.listadoRegistro = this.listadoRegistro.filter(dato => dato.id!=id);      
    }, (error: any) => {
      alert("Ha habido un error al eliminar r el usuario");
    })

  }
}
