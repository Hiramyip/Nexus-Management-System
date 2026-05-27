import { InfoOficiosRepository } from '../../repositories/mongo/InfoOficiosRepository.js';
import { InfoOficiosEntity } from '../../entities/mongo/InfoOficios.entity.js';

export class InfoOficiosService {
  private readonly repo = new InfoOficiosRepository();

  async getAll(): Promise<InfoOficiosEntity[]> {
    return this.repo.findAll();
  }

  async getById(id: string): Promise<InfoOficiosEntity> {
    const e = await this.repo.findById(id);
    if (!e) throw new Error(`InfoOficios id ${id} no encontrado`);
    return e;
  }

  async create(data: {
    idOficio: number;
    idGrupoTrabajo: number;
    ubicacion: string;
    fecha?: Date;
    metroLineal?: number;
    metroCuadrado?: number;
    metroCubico?: number;
    peso?: number;
    usuarioModificacion?: string;
    fechaModificacion?: Date;
  }): Promise<InfoOficiosEntity> {
    return this.repo.create(data);
  }

  async delete(id: string): Promise<void> {
    await this.getById(id);
    return this.repo.delete(id);
  }
}
