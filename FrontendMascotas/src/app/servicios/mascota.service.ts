import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloMascota } from '../modelos/mascota.modelo';
import { ModeloPlan } from '../modelos/plan.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  url = 'http://localhost:3000';
  token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService ){
    this.token = this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistros(): Observable<ModeloMascota[]>{
    return this.http.get<ModeloMascota[]>(`${this.url}/mascotas`);
    
  }

  ObtenerRegistroPorId(id:string): Observable<ModeloMascota>{
    return this.http.get<ModeloMascota>(`${this.url}/mascotas/${id}`);
    
  }

  CrearMascota(mascota: ModeloMascota): Observable<ModeloMascota>{
    return this.http.post<ModeloMascota>(`${this.url}/mascotas`, mascota,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ModificarMascota(mascota: ModeloMascota): Observable<ModeloMascota>{
    return this.http.put<ModeloMascota>(`${this.url}/mascotas/${mascota.id}`, mascota,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarMascota(id: string | undefined): Observable<any>{
    return this.http.delete(`${this.url}/mascotas/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ObtenerRegistrosPlanes(): Observable<ModeloPlan[]>{
    return this.http.get<ModeloPlan[]>(`${this.url}/plans`);
  }

  ObtenerMascotasPorUsuario(): Observable<ModeloMascota[]>{
    const idUsuario: String = this.seguridadServicio.ObtenerId();
    return this.http.get<ModeloMascota[]>(`${this.url}/usuarios/${idUsuario}/mascotas`);
  }

}
