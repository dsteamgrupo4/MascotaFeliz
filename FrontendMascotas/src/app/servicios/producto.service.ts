import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloProducto } from '../modelos/producto.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = 'http://localhost:3000';
  token: String = '';

  constructor(private http: HttpClient, private seguridadServicio: SeguridadService ){
    this.token = this.seguridadServicio.ObtenerToken();
   }

  ObtenerRegistros(): Observable<ModeloProducto[]>{
    return this.http.get<ModeloProducto[]>(`${this.url}/producto-servicios`);
    
  }

  ObtenerRegistroPorId(id:string): Observable<ModeloProducto>{
    return this.http.get<ModeloProducto>(`${this.url}/producto-servicios/${id}`);
    
  }

  CrearProducto(producto: ModeloProducto): Observable<ModeloProducto>{
    return this.http.post<ModeloProducto>(`${this.url}/producto-servicios`, producto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ModificarProducto(producto: ModeloProducto): Observable<ModeloProducto>{
    return this.http.put<ModeloProducto>(`${this.url}/producto-servicios/${producto.id}`, producto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarProducto(id: string | undefined): Observable<any>{
    return this.http.delete(`${this.url}/producto-servicios/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

} 
