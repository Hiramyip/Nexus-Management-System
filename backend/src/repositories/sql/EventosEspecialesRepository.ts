import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { EventosEspecialesEntity } from '../../entities/sql/EventosEspeciales.entity.js';

type EventosEspecialesCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  actividadesRealizadas: string;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type EventosEspecialesUpdate = Partial<EventosEspecialesCreate>;

export class EventosEspecialesRepository
  implements IRepository<EventosEspecialesEntity, EventosEspecialesCreate, EventosEspecialesUpdate>
{
  async findAll(): Promise<EventosEspecialesEntity[]> {
    const rows = await sqlDb.eventosEspeciales.findMany();
    return rows.map((r) => new EventosEspecialesEntity(r));
  }

  async findById(id: number): Promise<EventosEspecialesEntity | null> {
    const row = await sqlDb.eventosEspeciales.findUnique({ where: { idEventoEspecial: id } });
    return row ? new EventosEspecialesEntity(row) : null;
  }

  async create(data: EventosEspecialesCreate): Promise<EventosEspecialesEntity> {
    const row = await sqlDb.eventosEspeciales.create({ data });
    return new EventosEspecialesEntity(row);
  }

  async update(id: number, data: EventosEspecialesUpdate): Promise<EventosEspecialesEntity> {
    const row = await sqlDb.eventosEspeciales.update({ where: { idEventoEspecial: id }, data });
    return new EventosEspecialesEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.eventosEspeciales.delete({ where: { idEventoEspecial: id } });
  }
}
