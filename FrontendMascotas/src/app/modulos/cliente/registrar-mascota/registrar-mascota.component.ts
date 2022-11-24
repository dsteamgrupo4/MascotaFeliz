import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PlanesService } from 'src/app/servicios/planes.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-registrar-mascota',
  templateUrl: './registrar-mascota.component.html',
  styleUrls: ['./registrar-mascota.component.css']
})
export class RegistrarMascotaComponent implements OnInit {
  listadoPlanes: ModeloPlan[]=[];

  private user: any;

  fgValidator: FormGroup = this.fb.group({    
    'nombre': ['', [Validators.required]],
    'estado': ['Pendiente', [Validators.required]],
    'especie': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'comentario': ['', [Validators.required]],
    'planId': ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router,
    private seguridadServicio: SeguridadService,
    private planService: PlanesService) { }



    ngOnInit(): void {
      
    this.ObtenerListadoPlanes();
    }
  

  GuardarMascota() {
    this.user = this.seguridadServicio.ObtenerId();   
    let nombre = this.fgValidator.controls["nombre"].value;
    let estado = this.fgValidator.controls["estado"].value;
    let especie = this.fgValidator.controls["especie"].value;
    let foto = this.fgValidator.controls["foto"].value;
    let comentario = this.fgValidator.controls["comentario"].value;
    let planId = this.fgValidator.controls["planId"].value;
    let m = new ModeloMascota();
    m.nombre = nombre;
    m.estado = estado;
    m.especie = especie;
    m.foto = foto;
    m.comentario = comentario;
    m.usuarioId = this.user;
    m.planId = planId;

    this.servicioMascota.CrearMascota(m).subscribe((datos: ModeloMascota) => {
      alert("Mascota almacenada correctamente");
      this.router.navigate(["/cliente/listarMascota"])
    }, (error: any) => {
      alert("Ha habido un error al almacenar la mascota");
    })
  }
  ObtenerListadoPlanes(){
    this.planService.ObtenerRegistros().subscribe((datos: ModeloPlan[])=>{
      this.listadoPlanes = datos;     
      console.log(this.listadoPlanes);
      
    })

  }
}
