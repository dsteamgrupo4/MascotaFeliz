import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProspecto } from '../modelos/prospecto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProspectoService {
  url = 'http://localhost:3000';
  token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService ){
    this.token = this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistros(): Observable<ModeloProspecto[]>{
    return this.http.get<ModeloProspecto[]>(`${this.url}/prospectos`);
    
  }

  ObtenerRegistroPorId(id:string): Observable<ModeloProspecto>{
    return this.http.get<ModeloProspecto>(`${this.url}/prospectos/${id}`);
    
  }

  CrearProspecto(prospecto: ModeloProspecto): Observable<ModeloProspecto>{
    return this.http.post<ModeloProspecto>(`${this.url}/prospectos`, prospecto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarProspecto(id: string | undefined): Observable<any>{
    return this.http.delete(`${this.url}/prospectos/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  } 
}
