import { EventoInicioSesionRepository } from '../../repositories/mongo/EventoInicioSesionRepository.js';
import { EventoInicioSesionEntity } from '../../entities/mongo/EventoInicioSesion.entity.js';

export class EventoInicioSesionService {
  private readonly repo = new EventoInicioSesionRepository();

  async getAll(): Promise<EventoInicioSesionEntity[]> {
    return this.repo.findAll();
  }

  async getById(id: string): Promise<EventoInicioSesionEntity> {
    const e = await this.repo.findById(id);
    if (!e) throw new Error(`EventoInicioSesion id ${id} no encontrado`);
    return e;
  }

  async create(): Promise<EventoInicioSesionEntity> {
    return this.repo.create({});
  }

  async delete(id: string): Promise<void> {
    await this.getById(id);
    return this.repo.delete(id);
  }
}
