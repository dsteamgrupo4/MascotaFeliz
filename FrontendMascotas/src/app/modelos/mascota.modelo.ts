import { ModeloPlan } from "./plan.modelo";
import { ModeloUsuario } from "./usuario.modelo";

export class ModeloMascota{
    id?: string;
    nombre?: string;
    estado?: string;
    especie?: string;
    foto?: string;
    comentario?: string; 
    usuarioId?: ModeloUsuario;
    planId?: ModeloPlan;
 }