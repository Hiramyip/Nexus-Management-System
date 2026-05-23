export class GrupoTrabajoEntity {
  idGrupoTrabajo: number;
  encargado: string;

  constructor(data: { idGrupoTrabajo: number; encargado: string }) {
    this.idGrupoTrabajo = data.idGrupoTrabajo;
    this.encargado = data.encargado;
  }

  toJSON() {
    return {
      idGrupoTrabajo: this.idGrupoTrabajo,
      encargado: this.encargado,
    };
  }
}
