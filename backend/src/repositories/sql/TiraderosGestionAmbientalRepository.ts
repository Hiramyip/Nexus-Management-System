import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { TiraderosGestionAmbientalEntity } from '../../entities/sql/TiraderosGestionAmbiental.entity.js';

type TiraderosGACreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type TiraderosGAUpdate = Partial<TiraderosGACreate>;

export class TiraderosGestionAmbientalRepository
  implements IRepository<TiraderosGestionAmbientalEntity, TiraderosGACreate, TiraderosGAUpdate>
{
  async findAll(): Promise<TiraderosGestionAmbientalEntity[]> {
    const rows = await sqlDb.tiraderosGestionAmbiental.findMany();
    return rows.map((r) => new TiraderosGestionAmbientalEntity(r));
  }

  async findById(id: number): Promise<TiraderosGestionAmbientalEntity | null> {
    const row = await sqlDb.tiraderosGestionAmbiental.findUnique({ where: { idTiraderoGestion: id } });
    return row ? new TiraderosGestionAmbientalEntity(row) : null;
  }

  async create(data: TiraderosGACreate): Promise<TiraderosGestionAmbientalEntity> {
    const row = await sqlDb.tiraderosGestionAmbiental.create({ data });
    return new TiraderosGestionAmbientalEntity(row);
  }

  async update(id: number, data: TiraderosGAUpdate): Promise<TiraderosGestionAmbientalEntity> {
    const row = await sqlDb.tiraderosGestionAmbiental.update({ where: { idTiraderoGestion: id }, data });
    return new TiraderosGestionAmbientalEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.tiraderosGestionAmbiental.delete({ where: { idTiraderoGestion: id } });
  }
}
