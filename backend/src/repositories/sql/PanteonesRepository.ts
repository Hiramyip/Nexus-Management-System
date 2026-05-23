import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { PanteonesEntity } from '../../entities/sql/Panteones.entity.js';

type PanteonesCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  actividadesRealizadas: string;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type PanteonesUpdate = Partial<PanteonesCreate>;

export class PanteonesRepository
  implements IRepository<PanteonesEntity, PanteonesCreate, PanteonesUpdate>
{
  async findAll(): Promise<PanteonesEntity[]> {
    const rows = await sqlDb.panteones.findMany();
    return rows.map((r) => new PanteonesEntity(r));
  }

  async findById(id: number): Promise<PanteonesEntity | null> {
    const row = await sqlDb.panteones.findUnique({ where: { idPanteon: id } });
    return row ? new PanteonesEntity(row) : null;
  }

  async create(data: PanteonesCreate): Promise<PanteonesEntity> {
    const row = await sqlDb.panteones.create({ data });
    return new PanteonesEntity(row);
  }

  async update(id: number, data: PanteonesUpdate): Promise<PanteonesEntity> {
    const row = await sqlDb.panteones.update({ where: { idPanteon: id }, data });
    return new PanteonesEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.panteones.delete({ where: { idPanteon: id } });
  }
}
