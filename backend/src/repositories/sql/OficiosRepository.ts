import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { OficiosEntity } from '../../entities/sql/Oficios.entity.js';

type OficiosCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type OficiosUpdate = Partial<OficiosCreate>;

export class OficiosRepository
  implements IRepository<OficiosEntity, OficiosCreate, OficiosUpdate>
{
  async findAll(): Promise<OficiosEntity[]> {
    const rows = await sqlDb.oficios.findMany();
    return rows.map((r) => new OficiosEntity(r));
  }

  async findById(id: number): Promise<OficiosEntity | null> {
    const row = await sqlDb.oficios.findUnique({ where: { idOficio: id } });
    return row ? new OficiosEntity(row) : null;
  }

  async create(data: OficiosCreate): Promise<OficiosEntity> {
    const row = await sqlDb.oficios.create({ data });
    return new OficiosEntity(row);
  }

  async update(id: number, data: OficiosUpdate): Promise<OficiosEntity> {
    const row = await sqlDb.oficios.update({ where: { idOficio: id }, data });
    return new OficiosEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.oficios.delete({ where: { idOficio: id } });
  }
}
