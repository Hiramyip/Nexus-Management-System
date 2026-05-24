import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { EmpleoColoniaEntity } from '../../entities/sql/EmpleoColonia.entity.js';

type EmpleoColoniaCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  actividadesRealizadas: string;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type EmpleoColoniaUpdate = Partial<EmpleoColoniaCreate>;

export class EmpleoColoniaRepository
  implements IRepository<EmpleoColoniaEntity, EmpleoColoniaCreate, EmpleoColoniaUpdate>
{
  async findAll(): Promise<EmpleoColoniaEntity[]> {
    const rows = await sqlDb.empleoColonia.findMany();
    return rows.map((r) => new EmpleoColoniaEntity(r));
  }

  async findById(id: number): Promise<EmpleoColoniaEntity | null> {
    const row = await sqlDb.empleoColonia.findUnique({ where: { idEmpleoColonia: id } });
    return row ? new EmpleoColoniaEntity(row) : null;
  }

  async create(data: EmpleoColoniaCreate): Promise<EmpleoColoniaEntity> {
    const row = await sqlDb.empleoColonia.create({ data });
    return new EmpleoColoniaEntity(row);
  }

  async update(id: number, data: EmpleoColoniaUpdate): Promise<EmpleoColoniaEntity> {
    const row = await sqlDb.empleoColonia.update({ where: { idEmpleoColonia: id }, data });
    return new EmpleoColoniaEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.empleoColonia.delete({ where: { idEmpleoColonia: id } });
  }
}
