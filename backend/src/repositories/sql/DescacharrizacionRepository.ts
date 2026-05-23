import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { DescacharrizacionEntity } from '../../entities/sql/Descacharrizacion.entity.js';

type DescacharrizacionCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  pesoIngresadoDocumento?: Decimal | null;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type DescacharrizacionUpdate = Partial<DescacharrizacionCreate>;

export class DescacharrizacionRepository
  implements IRepository<DescacharrizacionEntity, DescacharrizacionCreate, DescacharrizacionUpdate>
{
  async findAll(): Promise<DescacharrizacionEntity[]> {
    const rows = await sqlDb.descacharrizacion.findMany();
    return rows.map((r) => new DescacharrizacionEntity(r));
  }

  async findById(id: number): Promise<DescacharrizacionEntity | null> {
    const row = await sqlDb.descacharrizacion.findUnique({ where: { idDescacharrizacion: id } });
    return row ? new DescacharrizacionEntity(row) : null;
  }

  async create(data: DescacharrizacionCreate): Promise<DescacharrizacionEntity> {
    const row = await sqlDb.descacharrizacion.create({ data });
    return new DescacharrizacionEntity(row);
  }

  async update(id: number, data: DescacharrizacionUpdate): Promise<DescacharrizacionEntity> {
    const row = await sqlDb.descacharrizacion.update({ where: { idDescacharrizacion: id }, data });
    return new DescacharrizacionEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.descacharrizacion.delete({ where: { idDescacharrizacion: id } });
  }
}
