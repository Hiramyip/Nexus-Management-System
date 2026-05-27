export class InfoOficiosEntity {
  id: string;
  idOficio: number;
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha: Date;
  metroLineal: number;
  metroCuadrado: number;
  metroCubico: number;
  peso: number;
  usuarioModificacion: string;
  fechaModificacion: Date;

  constructor(data: {
    id?: string;
    idOficio: number;
    idGrupoTrabajo: number;
    ubicacion: string;
    fecha?: Date | null;
    metroLineal?: number | null;
    metroCuadrado?: number | null;
    metroCubico?: number | null;
    peso?: number | null;
    usuarioModificacion?: string | null;
    fechaModificacion?: Date | null;
  }) {
    this.id = data.id || '';
    this.idOficio = data.idOficio;
    this.idGrupoTrabajo = data.idGrupoTrabajo;
    this.ubicacion = data.ubicacion;
    this.fecha = data.fecha || new Date();
    this.metroLineal = data.metroLineal || 0;
    this.metroCuadrado = data.metroCuadrado || 0;
    this.metroCubico = data.metroCubico || 0;
    this.peso = data.peso || 0;
    this.usuarioModificacion = data.usuarioModificacion || '';
    this.fechaModificacion = data.fechaModificacion || new Date();
  }

  toJSON() {
    return {
      id: this.id,
      idOficio: this.idOficio,
      idGrupoTrabajo: this.idGrupoTrabajo,
      ubicacion: this.ubicacion,
      fecha: this.fecha,
      metroLineal: this.metroLineal,
      metroCuadrado: this.metroCuadrado,
      metroCubico: this.metroCubico,
      peso: this.peso,
      usuarioModificacion: this.usuarioModificacion,
      fechaModificacion: this.fechaModificacion,
    };
  }
}
