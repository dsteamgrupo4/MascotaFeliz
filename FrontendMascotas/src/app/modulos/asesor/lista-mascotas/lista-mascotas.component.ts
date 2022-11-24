import { Component, OnInit } from '@angular/core';
import { ModeloMascota } from 'src/app/modelos/mascota.modelo';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { MascotaService } from 'src/app/servicios/mascota.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {

  listadoRegistro: ModeloMascota[] = [];
  listaClientes: ModeloUsuario[] = [];

  constructor(private mascota: MascotaService,
    private cliente: UsuarioService) { }

  ngOnInit(): void {

    this.ObtenerListadoClientes();
    this.ObtenerListadoMascotas();
  }

  ObtenerListadoMascotas() {
    this.mascota.ObtenerRegistros().subscribe((datosMascota: ModeloMascota[]) => {
      this.listadoRegistro = datosMascota;
    })

  }
  ObtenerListadoClientes() {
    this.cliente.ObtenerRegistros().subscribe((datosUsuario: ModeloUsuario[]) => {
      this.listaClientes = datosUsuario;
    })
  }


  obtenerCliente(mascota: ModeloMascota) {
    return this.listaClientes.filter((item) => item.id == mascota.usuarioId);
  }
}
