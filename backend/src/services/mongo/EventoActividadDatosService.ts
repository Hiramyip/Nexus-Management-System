import { EventoActividadDatosRepository } from '../../repositories/mongo/EventoActividadDatosRepository.js';
import { EventoActividadDatosEntity } from '../../entities/mongo/EventoActividadDatos.entity.js';

export class EventoActividadDatosService {
  private readonly repo = new EventoActividadDatosRepository();
  async getAll(): Promise<EventoActividadDatosEntity[]> { return this.repo.findAll(); }
  async getById(id: string): Promise<EventoActividadDatosEntity> {
    const e = await this.repo.findById(id);
    if (!e) throw new Error(`EventoActividadDatos id ${id} no encontrado`);
    return e;
  }
  async create(): Promise<EventoActividadDatosEntity> { return this.repo.create({}); }
  async delete(id: string): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
