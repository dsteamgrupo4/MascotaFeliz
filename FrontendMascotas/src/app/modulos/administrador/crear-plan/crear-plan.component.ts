import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanesService } from 'src/app/servicios/planes.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {

  fgValidator: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'descripcion': ['', [Validators.required]],
    'precio': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioPlan: PlanesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarPlan() {
    let nombre = this.fgValidator.controls["nombre"].value;
    let descripcion = this.fgValidator.controls["descripcion"].value;
    let precio = parseInt(this.fgValidator.controls["precio"].value);
    let p = new ModeloPlan();
    p.nombre = nombre;
    p.descripcion = descripcion;
    p.precio = precio;

    this.servicioPlan.CrearPlan(p).subscribe((datos: ModeloPlan) => {
      alert("Plan creado correctamente");
      this.router.navigate(["/administrador/listarPlan"])
    }, (error: any)=>{
      alert("Ha habido un error al almacenar producto");
    })
  }
}
