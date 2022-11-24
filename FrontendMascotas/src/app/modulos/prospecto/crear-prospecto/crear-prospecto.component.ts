import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloProspecto } from 'src/app/modelos/prospecto.modelo';
import { ProspectoService } from 'src/app/servicios/prospecto.service';

@Component({
  selector: 'app-crear-prospecto',
  templateUrl: './crear-prospecto.component.html',
  styleUrls: ['./crear-prospecto.component.css']
})

export class CrearProspectoComponent implements OnInit {
  fgValidator: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required]],
    'apellido': ['', [Validators.required]],
    'correo': ['', [Validators.required]],
    'celular': ['', [Validators.required]],
    'comentario': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioProspecto: ProspectoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardarProspecto() {
    let nombre = this.fgValidator.controls["nombre"].value;
    let apellido = this.fgValidator.controls["apellido"].value;
    let correo = this.fgValidator.controls["correo"].value;
    let celular = this.fgValidator.controls["celular"].value;
    let comentario = this.fgValidator.controls["comentario"].value;
    let p = new ModeloProspecto();
    
    p.nombre = nombre;
    p.apellido = apellido;
    p.correo = correo;
    p.celular = celular;
    p.comentario = comentario;

    this.servicioProspecto.CrearProspecto(p).subscribe((datos: ModeloProspecto) => {
      alert("Solicitud Enviada ");
      this.router.navigate(["/inicio"])
    }, (error: any)=>{
      alert("Ha habido un error al enviar solicitud");
    })
  }
}
