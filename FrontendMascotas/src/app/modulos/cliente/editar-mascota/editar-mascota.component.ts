import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { PlanesService } from 'src/app/servicios/planes.service';
import { SeguridadService } from 'src/app/servicios/seguridad.service';

@Component({
  selector: 'app-editar-mascota',
  templateUrl: './editar-mascota.component.html',
  styleUrls: ['./editar-mascota.component.css']
})
export class EditarMascotaComponent implements OnInit {
  listadoPlanes: ModeloPlan[]=[];
  id: string='';

  private user: any;

  fgValidator: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'estado': ['', [Validators.required]],
    'especie': ['', [Validators.required]],
    'foto': ['', [Validators.required]],
    'comentario': ['', [Validators.required]],
    'planId': ['', [Validators.required]]
  }); 

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router,
    private route: ActivatedRoute,
    private planService: PlanesService,
    private seguridadServicio: SeguridadService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascota();    
    this.ObtenerListadoPlanes();
  }

  ObtenerListadoPlanes(){
    this.planService.ObtenerRegistros().subscribe((datos: ModeloPlan[])=>{
      this.listadoPlanes = datos;     
      console.log(this.listadoPlanes);
      
    })

  }

  BuscarMascota(){
    this.servicioMascota.ObtenerRegistroPorId(this.id).subscribe((datos:ModeloMascota)=>{
      this.fgValidator.controls["id"].setValue(this.id);
      this.fgValidator.controls["nombre"].setValue(datos.nombre);
      this.fgValidator.controls["estado"].setValue(datos.estado);
      this.fgValidator.controls["especie"].setValue(datos.especie);
      this.fgValidator.controls["foto"].setValue(datos.foto);
      this.fgValidator.controls["comentario"].setValue(datos.comentario);
      this.fgValidator.controls["planId"].setValue(datos.planId);
    });
  }

  EditarMascota() {
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
    m.planId = planId;
    m.usuarioId=this.user;
    m.id=this.id;

    this.servicioMascota.ModificarMascota(m).subscribe((datos: ModeloMascota) => {
      alert("Se ha modificado la mascota correctamente");
      this.router.navigate(["/cliente/listarMascota"])
    }, (error: any)=>{
      alert("Ha habido un error al actualizar el estado de la mascota");
    })
  }

}
