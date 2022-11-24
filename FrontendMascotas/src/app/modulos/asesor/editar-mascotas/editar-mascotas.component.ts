import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';

@Component({
  selector: 'app-editar-mascotas',
  templateUrl: './editar-mascotas.component.html',
  styleUrls: ['./editar-mascotas.component.css']
})
export class EditarMascotasComponent implements OnInit {
  id: string='';
  planList: ModeloPlan[]=[];
 
  

  fgValidator: FormGroup = this.fb.group({
    'id': ['', [Validators.required]],
    'nombre': [{value:"", disabled: true}, [Validators.required]],
    'estado': ['', [Validators.required]],
    'especie': [{value:"", disabled: true}, [Validators.required]],
    'foto': [{value:"", disabled: true}, [Validators.required]],
    'comentario': [{value:"", disabled: true}, [Validators.required]],
    'planId': ["", [Validators.required]],
    'usuarioId': ["", [Validators.required]],
  }); 

  constructor(private fb: FormBuilder,
    private servicioMascota: MascotaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.BuscarMascota();
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
      this.fgValidator.controls["usuarioId"].setValue(datos.usuarioId);

    });
  }

  EditarMascota() {
    let nombre = this.fgValidator.controls["nombre"].value;
    let estado = this.fgValidator.controls["estado"].value;
    let especie = this.fgValidator.controls["especie"].value;
    let foto = this.fgValidator.controls["foto"].value;
    let comentario = this.fgValidator.controls["comentario"].value;
    let planId = this.fgValidator.controls["planId"].value;
    let usuarioId = this.fgValidator.controls["usuarioId"].value;
    let m = new ModeloMascota();
    m.nombre = nombre;
    m.estado = estado;
    m.especie = especie;
    m.foto = foto;
    m.comentario = comentario;
    m.planId = planId;
    m.usuarioId = usuarioId;
    m.id=this.id;

    this.servicioMascota.ModificarMascota(m).subscribe((datos: ModeloMascota) => {
      alert("Estado de mascota actualizado correctamente");
      this.router.navigate(["/asesor/listaMascotas"])
    }, (error: any)=>{
      alert("Ha habido un error al actualizar el estado de la mascota");
    })
  }
}
