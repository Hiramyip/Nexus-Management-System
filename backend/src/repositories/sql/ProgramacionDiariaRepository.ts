import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { ProgramacionDiariaEntity } from '../../entities/sql/ProgramacionDiaria.entity.js';

type ProgramacionDiariaCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  actividadesRealizadas: string;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type ProgramacionDiariaUpdate = Partial<ProgramacionDiariaCreate>;

export class ProgramacionDiariaRepository
  implements IRepository<ProgramacionDiariaEntity, ProgramacionDiariaCreate, ProgramacionDiariaUpdate>
{
  async findAll(): Promise<ProgramacionDiariaEntity[]> {
    const rows = await sqlDb.programacionDiaria.findMany();
    return rows.map((r) => new ProgramacionDiariaEntity(r));
  }

  async findById(id: number): Promise<ProgramacionDiariaEntity | null> {
    const row = await sqlDb.programacionDiaria.findUnique({ where: { idProgramacion: id } });
    return row ? new ProgramacionDiariaEntity(row) : null;
  }

  async create(data: ProgramacionDiariaCreate): Promise<ProgramacionDiariaEntity> {
    const row = await sqlDb.programacionDiaria.create({ data });
    return new ProgramacionDiariaEntity(row);
  }

  async update(id: number, data: ProgramacionDiariaUpdate): Promise<ProgramacionDiariaEntity> {
    const row = await sqlDb.programacionDiaria.update({ where: { idProgramacion: id }, data });
    return new ProgramacionDiariaEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.programacionDiaria.delete({ where: { idProgramacion: id } });
  }
}
