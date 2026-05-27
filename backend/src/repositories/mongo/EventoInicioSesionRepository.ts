import { mongoDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { EventoInicioSesionEntity } from '../../entities/mongo/EventoInicioSesion.entity.js';

type EventoInicioSesionCreate = {
  nombreUsuario: string;
  rol: string;
  fechaInicio?: Date;
  ip?: string | null;
};
type EventoInicioSesionUpdate = Partial<EventoInicioSesionCreate>;

export class EventoInicioSesionRepository
  implements IRepository<EventoInicioSesionEntity, EventoInicioSesionCreate, EventoInicioSesionUpdate, string>
{
  async findAll(): Promise<EventoInicioSesionEntity[]> {
    const rows = await mongoDb.eventoInicioSesion.findMany();
    return rows.map((r: any) => new EventoInicioSesionEntity(r));
  }

  async findById(id: string): Promise<EventoInicioSesionEntity | null> {
    const row = await mongoDb.eventoInicioSesion.findUnique({ where: { id } });
    return row ? new EventoInicioSesionEntity(row) : null;
  }

  async create(data: EventoInicioSesionCreate): Promise<EventoInicioSesionEntity> {
    const row = await mongoDb.eventoInicioSesion.create({ data });
    return new EventoInicioSesionEntity(row);
  }

  async update(id: string, data: EventoInicioSesionUpdate): Promise<EventoInicioSesionEntity> {
    const row = await mongoDb.eventoInicioSesion.update({ where: { id }, data });
    return new EventoInicioSesionEntity(row);
  }

  async delete(id: string): Promise<void> {
    await mongoDb.eventoInicioSesion.delete({ where: { id } });
  }
}
