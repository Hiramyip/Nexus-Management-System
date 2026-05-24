import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { EntregaObrasEntity } from '../../entities/sql/EntregaObras.entity.js';

type EntregaObrasCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type EntregaObrasUpdate = Partial<EntregaObrasCreate>;

export class EntregaObrasRepository
  implements IRepository<EntregaObrasEntity, EntregaObrasCreate, EntregaObrasUpdate>
{
  async findAll(): Promise<EntregaObrasEntity[]> {
    const rows = await sqlDb.entregaObras.findMany();
    return rows.map((r) => new EntregaObrasEntity(r));
  }

  async findById(id: number): Promise<EntregaObrasEntity | null> {
    const row = await sqlDb.entregaObras.findUnique({ where: { idEntregaObra: id } });
    return row ? new EntregaObrasEntity(row) : null;
  }

  async create(data: EntregaObrasCreate): Promise<EntregaObrasEntity> {
    const row = await sqlDb.entregaObras.create({ data });
    return new EntregaObrasEntity(row);
  }

  async update(id: number, data: EntregaObrasUpdate): Promise<EntregaObrasEntity> {
    const row = await sqlDb.entregaObras.update({ where: { idEntregaObra: id }, data });
    return new EntregaObrasEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.entregaObras.delete({ where: { idEntregaObra: id } });
  }
}
