import { EventoModificacionRepository } from '../../repositories/mongo/EventoModificacionRepository.js';
import { EventoModificacionEntity } from '../../entities/mongo/EventoModificacion.entity.js';

export class EventoModificacionService {
  private readonly repo = new EventoModificacionRepository();

  async getAll(): Promise<EventoModificacionEntity[]> {
    return this.repo.findAll();
  }

  async getById(id: string): Promise<EventoModificacionEntity> {
    const e = await this.repo.findById(id);
    if (!e) throw new Error(`EventoModificacion id ${id} no encontrado`);
    return e;
  }

  async create(data: {
    entidad: string;
    registroId: string;
    campo: string;
    valorAnterior?: string | null;
    valorNuevo?: string | null;
    usuario: string;
    fecha?: Date;
  }): Promise<EventoModificacionEntity> {
    return this.repo.create(data);
  }

  async delete(id: string): Promise<void> {
    await this.getById(id);
    return this.repo.delete(id);
  }
}
