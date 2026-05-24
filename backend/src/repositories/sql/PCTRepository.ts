import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { PCTEntity } from '../../entities/sql/PCT.entity.js';

type PCTCreate = {
  idGrupoTrabajo: number;
  numeroReferencia?: number | null;
  tipoPeriodo: string;
  estatus: string;
  ubicacion: string;
  fecha?: Date | null;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type PCTUpdate = Partial<PCTCreate>;

export class PCTRepository implements IRepository<PCTEntity, PCTCreate, PCTUpdate> {
  async findAll(): Promise<PCTEntity[]> {
    const rows = await sqlDb.pCT.findMany();
    return rows.map((r) => new PCTEntity(r));
  }

  async findById(id: number): Promise<PCTEntity | null> {
    const row = await sqlDb.pCT.findUnique({ where: { idPCT: id } });
    return row ? new PCTEntity(row) : null;
  }

  async create(data: PCTCreate): Promise<PCTEntity> {
    const row = await sqlDb.pCT.create({ data });
    return new PCTEntity(row);
  }

  async update(id: number, data: PCTUpdate): Promise<PCTEntity> {
    const row = await sqlDb.pCT.update({ where: { idPCT: id }, data });
    return new PCTEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.pCT.delete({ where: { idPCT: id } });
  }
}
