import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.css']
})
export class EditarPlanComponent implements OnInit {
  id: string='';
  fgValidator: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  }); 

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanesService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarPlan();
  }

  BuscarPlan(){
    this.servicioPlan.ObtenerRegistroPorId(this.id).subscribe((datos:ModeloPlan)=>{
      this.fgValidator.controls["id"].setValue(this.id);
      this.fgValidator.controls["nombre"].setValue(datos.nombre);
      this.fgValidator.controls["descripcion"].setValue(datos.descripcion);
      this.fgValidator.controls["precio"].setValue(datos.precio);
    });
  }

  EditarPlan() {
    let nombre = this.fgValidator.controls["nombre"].value;
    let descripcion = this.fgValidator.controls["descripcion"].value;
    let precio = parseInt(this.fgValidator.controls["precio"].value);
    let p = new ModeloPlan();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;
    p.id=this.id;

    this.servicioPlan.ModificarPlan(p).subscribe((datos: ModeloPlan) => {
      alert("Plan actualizado correctamente");
      this.router.navigate(["/administrador/listarPlan"])
    }, (error: any)=>{
      alert("Ha habido un error al actualizar el plan");
    })
  }
}
