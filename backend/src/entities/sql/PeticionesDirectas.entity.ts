import { Decimal } from '@prisma/client/runtime/library';

export class PeticionesDirectasEntity {
  idPeticionDirecta: number;
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha: Date | null;
  actividadesRealizadas: string;
  metroLineal: number | null;
  metroCuadrado: number | null;
  metroCubico: Decimal | null;
  peso: Decimal | null;

  constructor(data: {
    idPeticionDirecta: number;
    idGrupoTrabajo: number;
    ubicacion: string;
    fecha?: Date | null;
    actividadesRealizadas: string;
    metroLineal?: number | null;
    metroCuadrado?: number | null;
    metroCubico?: Decimal | null;
    peso?: Decimal | null;
  }) {
    this.idPeticionDirecta = data.idPeticionDirecta;
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
      idPeticionDirecta: this.idPeticionDirecta,
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
