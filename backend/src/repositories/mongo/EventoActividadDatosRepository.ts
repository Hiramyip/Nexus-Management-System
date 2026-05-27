import { mongoDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { EventoActividadDatosEntity } from '../../entities/mongo/EventoActividadDatos.entity.js';

type EventoActividadDatosCreate = Record<string, never>;
type EventoActividadDatosUpdate = Record<string, never>;

export class EventoActividadDatosRepository
  implements IRepository<EventoActividadDatosEntity, EventoActividadDatosCreate, EventoActividadDatosUpdate, string>
{
  async findAll(): Promise<EventoActividadDatosEntity[]> {
    const rows = await mongoDb.eventoActividadDatos.findMany();
    return rows.map((r: any) => new EventoActividadDatosEntity(r));
  }

  async findById(id: string): Promise<EventoActividadDatosEntity | null> {
    const row = await mongoDb.eventoActividadDatos.findUnique({ where: { id } });
    return row ? new EventoActividadDatosEntity(row) : null;
  }

  async create(_data: EventoActividadDatosCreate): Promise<EventoActividadDatosEntity> {
    const row = await mongoDb.eventoActividadDatos.create({ data: {} });
    return new EventoActividadDatosEntity(row);
  }

  async update(id: string, _data: EventoActividadDatosUpdate): Promise<EventoActividadDatosEntity> {
    const row = await mongoDb.eventoActividadDatos.update({ where: { id }, data: {} });
    return new EventoActividadDatosEntity(row);
  }

  async delete(id: string): Promise<void> {
    await mongoDb.eventoActividadDatos.delete({ where: { id } });
  }
}
