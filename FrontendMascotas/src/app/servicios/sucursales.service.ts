import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloSucursals } from '../modelos/sucursales.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {
  url = 'http://localhost:3000';
  token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService ){
    this.token = this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistros(): Observable<ModeloSucursals[]>{
    return this.http.get<ModeloSucursals[]>(`${this.url}/sucursals`);
    
  }

  ObtenerRegistroPorId(id:string): Observable<ModeloSucursals>{
    return this.http.get<ModeloSucursals>(`${this.url}/sucursals/${id}`);
    
  }

  CrearSucursal(sucursal: ModeloSucursals): Observable<ModeloSucursals>{
    return this.http.post<ModeloSucursals>(`${this.url}/sucursals`, sucursal,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ModificarSucursal(sucursal: ModeloSucursals): Observable<ModeloSucursals>{
    return this.http.put<ModeloSucursals>(`${this.url}/sucursals/${sucursal.id}`, sucursal,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarSucursal(id: string | undefined): Observable<any>{
    return this.http.delete(`${this.url}/sucursals/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
