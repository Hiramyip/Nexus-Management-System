import { GrupoTrabajoRepository } from '../../repositories/sql/GrupoTrabajoRepository.js';
import { GrupoTrabajoEntity } from '../../entities/sql/GrupoTrabajo.entity.js';

export class GrupoTrabajoService {
  private readonly repo = new GrupoTrabajoRepository();

  async getAll(): Promise<GrupoTrabajoEntity[]> {
    return this.repo.findAll();
  }

  async getById(id: number): Promise<GrupoTrabajoEntity> {
    const entity = await this.repo.findById(id);
    if (!entity) throw new Error(`GrupoTrabajo con id ${id} no encontrado`);
    return entity;
  }

  async create(data: { encargado: string }): Promise<GrupoTrabajoEntity> {
    return this.repo.create(data);
  }

  async update(id: number, data: Partial<{ encargado: string }>): Promise<GrupoTrabajoEntity> {
    await this.getById(id);
    return this.repo.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.getById(id);
    return this.repo.delete(id);
  }
}
