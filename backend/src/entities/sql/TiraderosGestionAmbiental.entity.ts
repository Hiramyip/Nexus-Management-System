import { Decimal } from '@prisma/client/runtime/library';

export class TiraderosGestionAmbientalEntity {
  idTiraderoGestion: number;
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha: Date | null;
  metroLineal: number | null;
  metroCuadrado: number | null;
  metroCubico: Decimal | null;
  peso: Decimal | null;

  constructor(data: {
    idTiraderoGestion: number;
    idGrupoTrabajo: number;
    ubicacion: string;
    fecha?: Date | null;
    metroLineal?: number | null;
    metroCuadrado?: number | null;
    metroCubico?: Decimal | null;
    peso?: Decimal | null;
  }) {
    this.idTiraderoGestion = data.idTiraderoGestion;
    this.idGrupoTrabajo = data.idGrupoTrabajo;
    this.ubicacion = data.ubicacion;
    this.fecha = data.fecha ?? null;
    this.metroLineal = data.metroLineal ?? null;
    this.metroCuadrado = data.metroCuadrado ?? null;
    this.metroCubico = data.metroCubico ?? null;
    this.peso = data.peso ?? null;
  }

  toJSON() {
    return {
      idTiraderoGestion: this.idTiraderoGestion,
      idGrupoTrabajo: this.idGrupoTrabajo,
      ubicacion: this.ubicacion,
      fecha: this.fecha,
      metroLineal: this.metroLineal,
      metroCuadrado: this.metroCuadrado,
      metroCubico: this.metroCubico,
      peso: this.peso,
    };
  }
}
