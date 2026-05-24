import { Decimal } from '@prisma/client/runtime/library';

export class CigaEntity {
  idCiga: number;
  idGrupoTrabajo: number;
  numeroVentanilla: number;
  folioCiga: string;
  ubicacion: string;
  fecha: Date | null;
  metroLineal: number | null;
  metroCuadrado: number | null;
  metroCubico: Decimal | null;
  peso: Decimal | null;

  constructor(data: {
    idCiga: number;
    idGrupoTrabajo: number;
    numeroVentanilla: number;
    folioCiga: string;
    ubicacion: string;
    fecha?: Date | null;
    metroLineal?: number | null;
    metroCuadrado?: number | null;
    metroCubico?: Decimal | null;
    peso?: Decimal | null;
  }) {
    this.idCiga = data.idCiga;
    this.idGrupoTrabajo = data.idGrupoTrabajo;
    this.numeroVentanilla = data.numeroVentanilla;
    this.folioCiga = data.folioCiga;
    this.ubicacion = data.ubicacion;
    this.fecha = data.fecha ?? null;
    this.metroLineal = data.metroLineal ?? null;
    this.metroCuadrado = data.metroCuadrado ?? null;
    this.metroCubico = data.metroCubico ?? null;
    this.peso = data.peso ?? null;
  }

  toJSON() {
    return {
      idCiga: this.idCiga,
      idGrupoTrabajo: this.idGrupoTrabajo,
      numeroVentanilla: this.numeroVentanilla,
      folioCiga: this.folioCiga,
      ubicacion: this.ubicacion,
      fecha: this.fecha,
      metroLineal: this.metroLineal,
      metroCuadrado: this.metroCuadrado,
      metroCubico: this.metroCubico,
      peso: this.peso,
    };
  }
}
