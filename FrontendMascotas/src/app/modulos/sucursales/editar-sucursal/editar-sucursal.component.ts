import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloSucursals } from 'src/app/modelos/sucursales.modelo';
import { SucursalesService } from 'src/app/servicios/sucursales.service';

@Component({
  selector: 'app-editar-sucursal',
  templateUrl: './editar-sucursal.component.html',
  styleUrls: ['./editar-sucursal.component.css']
})
export class EditarSucursalComponent implements OnInit {
  id: string='';
  fgValidator: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'departamento': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]]
  }); 

  constructor(private fb: FormBuilder,
    private servicioSucursal: SucursalesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarSucursal();
  }

  BuscarSucursal(){
    this.servicioSucursal.ObtenerRegistroPorId(this.id).subscribe((datos:ModeloSucursals)=>{
      this.fgValidator.controls["id"].setValue(this.id);
      this.fgValidator.controls["departamento"].setValue(datos.departamento);
      this.fgValidator.controls["ciudad"].setValue(datos.ciudad);
      this.fgValidator.controls["direccion"].setValue(datos.direccion);
      this.fgValidator.controls["telefono"].setValue(datos.telefono);
    });
  }

  EditarProducto() {
    let departamento = this.fgValidator.controls["departamento"].value;
    let ciudad = this.fgValidator.controls["ciudad"].value;
    let direccion = this.fgValidator.controls["direccion"].value;
    let telefono = this.fgValidator.controls["telefono"].value;
    let p = new ModeloSucursals();
    p.departamento = departamento;
    p.ciudad = ciudad;
    p.direccion = direccion;
    p.telefono = telefono;
    p.id=this.id;

    this.servicioSucursal.ModificarSucursal(p).subscribe((datos: ModeloSucursals) => {
      alert("Sucursal actualizada correctamente");
      this.router.navigate(["/sucursales/listarSucursal"])
    }, (error: any)=>{
      alert("Ha habido un error al actualizar sucursal");
    })
  }
}
