import { mongoDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { InfoOficiosEntity } from '../../entities/mongo/InfoOficios.entity.js';

type InfoOficiosCreate = Record<string, never>;
type InfoOficiosUpdate = Record<string, never>;

export class InfoOficiosRepository
  implements IRepository<InfoOficiosEntity, InfoOficiosCreate, InfoOficiosUpdate, string>
{
  async findAll(): Promise<InfoOficiosEntity[]> {
    const rows = await mongoDb.infoOficios.findMany();
    return rows.map((r) => new InfoOficiosEntity(r));
  }

  async findById(id: string): Promise<InfoOficiosEntity | null> {
    const row = await mongoDb.infoOficios.findUnique({ where: { id } });
    return row ? new InfoOficiosEntity(row) : null;
  }

  async create(_data: InfoOficiosCreate): Promise<InfoOficiosEntity> {
    const row = await mongoDb.infoOficios.create({ data: {} });
    return new InfoOficiosEntity(row);
  }

  async update(id: string, _data: InfoOficiosUpdate): Promise<InfoOficiosEntity> {
    const row = await mongoDb.infoOficios.update({ where: { id }, data: {} });
    return new InfoOficiosEntity(row);
  }

  async delete(id: string): Promise<void> {
    await mongoDb.infoOficios.delete({ where: { id } });
  }
}
