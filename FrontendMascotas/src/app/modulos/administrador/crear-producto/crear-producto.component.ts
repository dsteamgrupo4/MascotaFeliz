import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    'tipo': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarProducto() {
    let tipo = this.fgValidator.controls["tipo"].value;
    let nombre = this.fgValidator.controls["nombre"].value;
    let descripcion = this.fgValidator.controls["descripcion"].value;
    let precio = parseInt(this.fgValidator.controls["precio"].value);
    let p = new ModeloProducto();
    p.tipo = tipo;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;

    this.servicioProducto.CrearProducto(p).subscribe((datos: ModeloProducto) => {
      alert("Producto almacenado correctamente");
      this.router.navigate(["/administrador/listarProducto"])
    }, (error: any)=>{
      alert("Ha habido un error al almacenar producto");
    })
  }
}
