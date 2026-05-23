export class UsuariosEntity {
  idUsuario: number;
  nombre: string;
  password_user: string;
  rol: string;
  fechaRegistro: Date | null;

  constructor(data: {
    idUsuario: number;
    nombre: string;
    password_user: string;
    rol: string;
    fechaRegistro?: Date | null;
  }) {
    this.idUsuario = data.idUsuario;
    this.nombre = data.nombre;
    this.password_user = data.password_user;
    this.rol = data.rol;
    this.fechaRegistro = data.fechaRegistro ?? null;
  }

  toJSON() {
    return {
      idUsuario: this.idUsuario,
      nombre: this.nombre,
      rol: this.rol,
      fechaRegistro: this.fechaRegistro,
      // password_user excluido por seguridad
    };
  }
}
