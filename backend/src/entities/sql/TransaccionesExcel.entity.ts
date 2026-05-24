export class TransaccionesExcelEntity {
  idTransaccionExcel: number;
  idUsuario: number;
  nombreArchivo: string;
  fechaTransaccion: Date;

  constructor(data: {
    idTransaccionExcel: number;
    idUsuario: number;
    nombreArchivo: string;
    fechaTransaccion: Date;
  }) {
    this.idTransaccionExcel = data.idTransaccionExcel;
    this.idUsuario = data.idUsuario;
    this.nombreArchivo = data.nombreArchivo;
    this.fechaTransaccion = data.fechaTransaccion;
  }

  toJSON() {
    return {
      idTransaccionExcel: this.idTransaccionExcel,
      idUsuario: this.idUsuario,
      nombreArchivo: this.nombreArchivo,
      fechaTransaccion: this.fechaTransaccion,
    };
  }
}
