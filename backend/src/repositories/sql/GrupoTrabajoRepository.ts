import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { GrupoTrabajoEntity } from '../../entities/sql/GrupoTrabajo.entity.js';

type GrupoTrabajoCreate = { encargado: string };
type GrupoTrabajoUpdate = Partial<GrupoTrabajoCreate>;

export class GrupoTrabajoRepository
  implements IRepository<GrupoTrabajoEntity, GrupoTrabajoCreate, GrupoTrabajoUpdate>
{
  async findAll(): Promise<GrupoTrabajoEntity[]> {
    const rows = await sqlDb.grupoTrabajo.findMany();
    return rows.map((r) => new GrupoTrabajoEntity(r));
  }

  async findById(id: number): Promise<GrupoTrabajoEntity | null> {
    const row = await sqlDb.grupoTrabajo.findUnique({ where: { idGrupoTrabajo: id } });
    return row ? new GrupoTrabajoEntity(row) : null;
  }

  async create(data: GrupoTrabajoCreate): Promise<GrupoTrabajoEntity> {
    const row = await sqlDb.grupoTrabajo.create({ data });
    return new GrupoTrabajoEntity(row);
  }

  async update(id: number, data: GrupoTrabajoUpdate): Promise<GrupoTrabajoEntity> {
    const row = await sqlDb.grupoTrabajo.update({ where: { idGrupoTrabajo: id }, data });
    return new GrupoTrabajoEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.grupoTrabajo.delete({ where: { idGrupoTrabajo: id } });
  }
}
