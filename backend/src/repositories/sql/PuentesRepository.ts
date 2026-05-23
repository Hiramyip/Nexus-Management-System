import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { PuentesEntity } from '../../entities/sql/Puentes.entity.js';

type PuentesCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  actividadesRealizadas: string;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type PuentesUpdate = Partial<PuentesCreate>;

export class PuentesRepository
  implements IRepository<PuentesEntity, PuentesCreate, PuentesUpdate>
{
  async findAll(): Promise<PuentesEntity[]> {
    const rows = await sqlDb.puentes.findMany();
    return rows.map((r) => new PuentesEntity(r));
  }

  async findById(id: number): Promise<PuentesEntity | null> {
    const row = await sqlDb.puentes.findUnique({ where: { idPuente: id } });
    return row ? new PuentesEntity(row) : null;
  }

  async create(data: PuentesCreate): Promise<PuentesEntity> {
    const row = await sqlDb.puentes.create({ data });
    return new PuentesEntity(row);
  }

  async update(id: number, data: PuentesUpdate): Promise<PuentesEntity> {
    const row = await sqlDb.puentes.update({ where: { idPuente: id }, data });
    return new PuentesEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.puentes.delete({ where: { idPuente: id } });
  }
}
