import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { TiraderosInspeccionEntity } from '../../entities/sql/TiraderosInspeccion.entity.js';

type TiraderosInspeccionCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type TiraderosInspeccionUpdate = Partial<TiraderosInspeccionCreate>;

export class TiraderosInspeccionRepository
  implements IRepository<TiraderosInspeccionEntity, TiraderosInspeccionCreate, TiraderosInspeccionUpdate>
{
  async findAll(): Promise<TiraderosInspeccionEntity[]> {
    const rows = await sqlDb.tiraderosInspeccion.findMany();
    return rows.map((r) => new TiraderosInspeccionEntity(r));
  }

  async findById(id: number): Promise<TiraderosInspeccionEntity | null> {
    const row = await sqlDb.tiraderosInspeccion.findUnique({ where: { idTiraderoInspeccion: id } });
    return row ? new TiraderosInspeccionEntity(row) : null;
  }

  async create(data: TiraderosInspeccionCreate): Promise<TiraderosInspeccionEntity> {
    const row = await sqlDb.tiraderosInspeccion.create({ data });
    return new TiraderosInspeccionEntity(row);
  }

  async update(id: number, data: TiraderosInspeccionUpdate): Promise<TiraderosInspeccionEntity> {
    const row = await sqlDb.tiraderosInspeccion.update({ where: { idTiraderoInspeccion: id }, data });
    return new TiraderosInspeccionEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.tiraderosInspeccion.delete({ where: { idTiraderoInspeccion: id } });
  }
}
