import { Decimal } from '@prisma/client/runtime/library';

export class PuentesEntity {
  idPuente: number;
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha: Date | null;
  actividadesRealizadas: string;
  metroLineal: number | null;
  metroCuadrado: number | null;
  metroCubico: Decimal | null;
  peso: Decimal | null;

  constructor(data: {
    idPuente: number;
    idGrupoTrabajo: number;
    ubicacion: string;
    fecha?: Date | null;
    actividadesRealizadas: string;
    metroLineal?: number | null;
    metroCuadrado?: number | null;
    metroCubico?: Decimal | null;
    peso?: Decimal | null;
  }) {
    this.idPuente = data.idPuente;
    this.idGrupoTrabajo = data.idGrupoTrabajo;
    this.ubicacion = data.ubicacion;
    this.fecha = data.fecha ?? null;
    this.actividadesRealizadas = data.actividadesRealizadas;
    this.metroLineal = data.metroLineal ?? null;
    this.metroCuadrado = data.metroCuadrado ?? null;
    this.metroCubico = data.metroCubico ?? null;
    this.peso = data.peso ?? null;
  }

  toJSON() {
    return {
      idPuente: this.idPuente,
      idGrupoTrabajo: this.idGrupoTrabajo,
      ubicacion: this.ubicacion,
      fecha: this.fecha,
      actividadesRealizadas: this.actividadesRealizadas,
      metroLineal: this.metroLineal,
      metroCuadrado: this.metroCuadrado,
      metroCubico: this.metroCubico,
      peso: this.peso,
    };
  }
}
