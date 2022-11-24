import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloSucursals } from 'src/app/modelos/sucursales.modelo';
import { SucursalesService } from 'src/app/servicios/sucursales.service';

@Component({
  selector: 'app-crear-sucursal',
  templateUrl: './crear-sucursal.component.html',
  styleUrls: ['./crear-sucursal.component.css']
})
export class CrearSucursalComponent implements OnInit {

  private user: any;

  fgValidator: FormGroup = this.fb.group({    
    'departamento': ['', [Validators.required]],
    'ciudad': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioSucursal: SucursalesService,
    private router: Router) { }

    ngOnInit(): void {
      
    }
  

  GuardarSucursal() {
    let departamento = this.fgValidator.controls["departamento"].value;
    let ciudad = this.fgValidator.controls["ciudad"].value;
    let direccion = this.fgValidator.controls["direccion"].value;
    let telefono = this.fgValidator.controls["telefono"].value;
    let s = new ModeloSucursals();
    s.departamento = departamento;
    s.ciudad = ciudad;
    s.direccion = direccion;
    s.telefono = telefono;

    this.servicioSucursal.CrearSucursal(s).subscribe((datos: ModeloSucursals) => {
      alert("Sucursal almacenada correctamente");
      this.router.navigate(["/sucursales/listarSucursal"])
    }, (error: any) => {
      alert("Ha habido un error al crear la sucursal");
    })
  }
}
