export class LogReportesGeneradosEntity {
  id: string;
  tipoReporte: string;
  fechaGeneracion: Date;
  usuario: string;
  parametros: Record<string, any>;
  exito: boolean;
  mensaje: string;

  constructor(data: {
    id?: string;
    tipoReporte: string;
    fechaGeneracion?: Date | null;
    usuario: string;
    parametros?: any;
    exito?: boolean | null;
    mensaje?: string | null;
  }) {
    this.id = data.id || '';
    this.tipoReporte = data.tipoReporte;
    this.fechaGeneracion = data.fechaGeneracion || new Date();
    this.usuario = data.usuario;
    this.parametros = data.parametros || {};
    this.exito = data.exito ?? true;
    this.mensaje = data.mensaje || '';
  }

  toJSON() {
    return {
      id: this.id,
      tipoReporte: this.tipoReporte,
      fechaGeneracion: this.fechaGeneracion,
      usuario: this.usuario,
      parametros: this.parametros,
      exito: this.exito,
      mensaje: this.mensaje,
    };
  }
}
