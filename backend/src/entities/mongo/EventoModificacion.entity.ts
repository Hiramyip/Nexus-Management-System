export class EventoModificacionEntity {
  id: string;
  entidad: string;
  registroId: string;
  campo: string;
  valorAnterior: string | null;
  valorNuevo: string | null;
  usuario: string;
  fecha: Date;

  constructor(data: {
    id?: string;
    entidad: string;
    registroId: string;
    campo: string;
    valorAnterior?: string | null;
    valorNuevo?: string | null;
    usuario: string;
    fecha?: Date | null;
  }) {
    this.id = data.id || '';
    this.entidad = data.entidad;
    this.registroId = data.registroId;
    this.campo = data.campo;
    this.valorAnterior = data.valorAnterior ?? null;
    this.valorNuevo = data.valorNuevo ?? null;
    this.usuario = data.usuario;
    this.fecha = data.fecha || new Date();
  }

  toJSON() {
    return {
      id: this.id,
      entidad: this.entidad,
      registroId: this.registroId,
      campo: this.campo,
      valorAnterior: this.valorAnterior,
      valorNuevo: this.valorNuevo,
      usuario: this.usuario,
      fecha: this.fecha,
    };
  }
}
