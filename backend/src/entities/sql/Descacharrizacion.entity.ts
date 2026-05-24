import { Decimal } from '@prisma/client/runtime/library';

export class DescacharrizacionEntity {
  idDescacharrizacion: number;
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha: Date | null;
  pesoIngresadoDocumento: Decimal | null;
  metroLineal: number | null;
  metroCuadrado: number | null;
  metroCubico: Decimal | null;
  peso: Decimal | null;

  constructor(data: {
    idDescacharrizacion: number;
    idGrupoTrabajo: number;
    ubicacion: string;
    fecha?: Date | null;
    pesoIngresadoDocumento?: Decimal | null;
    metroLineal?: number | null;
    metroCuadrado?: number | null;
    metroCubico?: Decimal | null;
    peso?: Decimal | null;
  }) {
    this.idDescacharrizacion = data.idDescacharrizacion;
    this.idGrupoTrabajo = data.idGrupoTrabajo;
    this.ubicacion = data.ubicacion;
    this.fecha = data.fecha ?? null;
    this.pesoIngresadoDocumento = data.pesoIngresadoDocumento ?? null;
    this.metroLineal = data.metroLineal ?? null;
    this.metroCuadrado = data.metroCuadrado ?? null;
    this.metroCubico = data.metroCubico ?? null;
    this.peso = data.peso ?? null;
  }

  toJSON() {
    return {
      idDescacharrizacion: this.idDescacharrizacion,
      idGrupoTrabajo: this.idGrupoTrabajo,
      ubicacion: this.ubicacion,
      fecha: this.fecha,
      pesoIngresadoDocumento: this.pesoIngresadoDocumento,
      metroLineal: this.metroLineal,
      metroCuadrado: this.metroCuadrado,
      metroCubico: this.metroCubico,
      peso: this.peso,
    };
  }
}
