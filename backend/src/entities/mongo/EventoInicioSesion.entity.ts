export class EventoInicioSesionEntity {
  id: string;
  nombreUsuario: string;
  rol: string;
  fechaInicio: Date;
  ip: string;

  constructor(data: {
    id?: string;
    nombreUsuario: string;
    rol: string;
    fechaInicio?: Date | null;
    ip?: string | null;
  }) {
    this.id = data.id || '';
    this.nombreUsuario = data.nombreUsuario;
    this.rol = data.rol;
    this.fechaInicio = data.fechaInicio || new Date();
    this.ip = data.ip || '';
  }

  toJSON() {
    return {
      id: this.id,
      nombreUsuario: this.nombreUsuario,
      rol: this.rol,
      fechaInicio: this.fechaInicio,
      ip: this.ip,
    };
  }
}
