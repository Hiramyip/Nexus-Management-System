import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { CasasQuemadasEntity } from '../../entities/sql/CasasQuemadas.entity.js';

type CasasQuemadasCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type CasasQuemadasUpdate = Partial<CasasQuemadasCreate>;

export class CasasQuemadasRepository
  implements IRepository<CasasQuemadasEntity, CasasQuemadasCreate, CasasQuemadasUpdate>
{
  async findAll(): Promise<CasasQuemadasEntity[]> {
    const rows = await sqlDb.casasQuemadas.findMany();
    return rows.map((r) => new CasasQuemadasEntity(r));
  }

  async findById(id: number): Promise<CasasQuemadasEntity | null> {
    const row = await sqlDb.casasQuemadas.findUnique({ where: { idCasaQuemada: id } });
    return row ? new CasasQuemadasEntity(row) : null;
  }

  async create(data: CasasQuemadasCreate): Promise<CasasQuemadasEntity> {
    const row = await sqlDb.casasQuemadas.create({ data });
    return new CasasQuemadasEntity(row);
  }

  async update(id: number, data: CasasQuemadasUpdate): Promise<CasasQuemadasEntity> {
    const row = await sqlDb.casasQuemadas.update({ where: { idCasaQuemada: id }, data });
    return new CasasQuemadasEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.casasQuemadas.delete({ where: { idCasaQuemada: id } });
  }
}
