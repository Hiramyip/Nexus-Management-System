import { Decimal } from '@prisma/client/runtime/library';

export class PCTEntity {
  idPCT: number;
  idGrupoTrabajo: number;
  numeroReferencia: number | null;
  tipoPeriodo: string;
  estatus: string;
  ubicacion: string;
  fecha: Date | null;
  metroLineal: number | null;
  metroCuadrado: number | null;
  metroCubico: Decimal | null;
  peso: Decimal | null;

  constructor(data: {
    idPCT: number;
    idGrupoTrabajo: number;
    numeroReferencia?: number | null;
    tipoPeriodo: string;
    estatus: string;
    ubicacion: string;
    fecha?: Date | null;
    metroLineal?: number | null;
    metroCuadrado?: number | null;
    metroCubico?: Decimal | null;
    peso?: Decimal | null;
  }) {
    this.idPCT = data.idPCT;
    this.idGrupoTrabajo = data.idGrupoTrabajo;
    this.numeroReferencia = data.numeroReferencia ?? null;
    this.tipoPeriodo = data.tipoPeriodo;
    this.estatus = data.estatus;
    this.ubicacion = data.ubicacion;
    this.fecha = data.fecha ?? null;
    this.metroLineal = data.metroLineal ?? null;
    this.metroCuadrado = data.metroCuadrado ?? null;
    this.metroCubico = data.metroCubico ?? null;
    this.peso = data.peso ?? null;
  }

  toJSON() {
    return {
      idPCT: this.idPCT,
      idGrupoTrabajo: this.idGrupoTrabajo,
      numeroReferencia: this.numeroReferencia,
      tipoPeriodo: this.tipoPeriodo,
      estatus: this.estatus,
      ubicacion: this.ubicacion,
      fecha: this.fecha,
      metroLineal: this.metroLineal,
      metroCuadrado: this.metroCuadrado,
      metroCubico: this.metroCubico,
      peso: this.peso,
    };
  }
}
