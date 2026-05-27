import { mongoDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { EventoModificacionEntity } from '../../entities/mongo/EventoModificacion.entity.js';

type EventoModificacionCreate = {
  entidad: string;
  registroId: string;
  campo: string;
  valorAnterior?: string | null;
  valorNuevo?: string | null;
  usuario: string;
  fecha?: Date | null;
};
type EventoModificacionUpdate = Partial<EventoModificacionCreate>;

export class EventoModificacionRepository
  implements IRepository<EventoModificacionEntity, EventoModificacionCreate, EventoModificacionUpdate, string>
{
  async findAll(): Promise<EventoModificacionEntity[]> {
    const rows = await mongoDb.eventoModificacion.findMany();
    return rows.map((r: any) => new EventoModificacionEntity(r));
  }

  async findById(id: string): Promise<EventoModificacionEntity | null> {
    const row = await mongoDb.eventoModificacion.findUnique({ where: { id } });
    return row ? new EventoModificacionEntity(row) : null;
  }

  async create(data: EventoModificacionCreate): Promise<EventoModificacionEntity> {
    const row = await mongoDb.eventoModificacion.create({
      data: {
        entidad: data.entidad,
        registroId: data.registroId,
        campo: data.campo,
        valorAnterior: data.valorAnterior,
        valorNuevo: data.valorNuevo,
        usuario: data.usuario,
        fecha: data.fecha ?? new Date(),
      }
    });
    return new EventoModificacionEntity(row);
  }

  async update(id: string, data: EventoModificacionUpdate): Promise<EventoModificacionEntity> {
    const row = await mongoDb.eventoModificacion.update({ where: { id }, data: data as any });
    return new EventoModificacionEntity(row);
  }

  async delete(id: string): Promise<void> {
    await mongoDb.eventoModificacion.delete({ where: { id } });
  }
}
