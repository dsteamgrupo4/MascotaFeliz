import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloProducto } from 'src/app/modelos/producto.modelo';
import { ProductoService } from 'src/app/servicios/producto.service';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.component.html',
  styleUrls: ['./modificar-producto.component.css']
})
export class ModificarProductoComponent implements OnInit {
  id: string='';
  fgValidator: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'tipo': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  }); 

  constructor(private fb: FormBuilder,
    private servicioProducto: ProductoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarProducto();
  }

  BuscarProducto(){
    this.servicioProducto.ObtenerRegistroPorId(this.id).subscribe((datos:ModeloProducto)=>{
      this.fgValidator.controls["id"].setValue(this.id);
      this.fgValidator.controls["tipo"].setValue(datos.tipo);
      this.fgValidator.controls["nombre"].setValue(datos.nombre);
      this.fgValidator.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidator.controls["precio"].setValue(datos.precio);
    });
  }

  EditarProducto() {
    let tipo = this.fgValidator.controls["tipo"].value;
    let nombre = this.fgValidator.controls["nombre"].value;
    let descripcion = this.fgValidator.controls["descripcion"].value;
    let precio = parseInt(this.fgValidator.controls["precio"].value);
    let p = new ModeloProducto();
    p.tipo = tipo;
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.id=this.id;

    this.servicioProducto.ModificarProducto(p).subscribe((datos: ModeloProducto) => {
      alert("Producto actualizado correctamente");
      this.router.navigate(["/administrador/listarProducto"])
    }, (error: any)=>{
      alert("Ha habido un error al actualizar producto");
    })
  }
}
