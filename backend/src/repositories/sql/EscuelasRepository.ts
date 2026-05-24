import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { EscuelasEntity } from '../../entities/sql/Escuelas.entity.js';

type EscuelasCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  actividadesRealizadas: string;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type EscuelasUpdate = Partial<EscuelasCreate>;

export class EscuelasRepository
  implements IRepository<EscuelasEntity, EscuelasCreate, EscuelasUpdate>
{
  async findAll(): Promise<EscuelasEntity[]> {
    const rows = await sqlDb.escuelas.findMany();
    return rows.map((r) => new EscuelasEntity(r));
  }

  async findById(id: number): Promise<EscuelasEntity | null> {
    const row = await sqlDb.escuelas.findUnique({ where: { idEscuela: id } });
    return row ? new EscuelasEntity(row) : null;
  }

  async create(data: EscuelasCreate): Promise<EscuelasEntity> {
    const row = await sqlDb.escuelas.create({ data });
    return new EscuelasEntity(row);
  }

  async update(id: number, data: EscuelasUpdate): Promise<EscuelasEntity> {
    const row = await sqlDb.escuelas.update({ where: { idEscuela: id }, data });
    return new EscuelasEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.escuelas.delete({ where: { idEscuela: id } });
  }
}
