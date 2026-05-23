import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { CigaEntity } from '../../entities/sql/Ciga.entity.js';

type CigaCreate = {
  idGrupoTrabajo: number;
  numeroVentanilla: number;
  folioCiga: string;
  ubicacion: string;
  fecha?: Date | null;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type CigaUpdate = Partial<CigaCreate>;

export class CigaRepository implements IRepository<CigaEntity, CigaCreate, CigaUpdate> {
  async findAll(): Promise<CigaEntity[]> {
    const rows = await sqlDb.ciga.findMany();
    return rows.map((r) => new CigaEntity(r));
  }

  async findById(id: number): Promise<CigaEntity | null> {
    const row = await sqlDb.ciga.findUnique({ where: { idCiga: id } });
    return row ? new CigaEntity(row) : null;
  }

  async create(data: CigaCreate): Promise<CigaEntity> {
    const row = await sqlDb.ciga.create({ data });
    return new CigaEntity(row);
  }

  async update(id: number, data: CigaUpdate): Promise<CigaEntity> {
    const row = await sqlDb.ciga.update({ where: { idCiga: id }, data });
    return new CigaEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.ciga.delete({ where: { idCiga: id } });
  }
}
