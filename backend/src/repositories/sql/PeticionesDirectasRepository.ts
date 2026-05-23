import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { PeticionesDirectasEntity } from '../../entities/sql/PeticionesDirectas.entity.js';

type PeticionesDirectasCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  actividadesRealizadas: string;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type PeticionesDirectasUpdate = Partial<PeticionesDirectasCreate>;

export class PeticionesDirectasRepository
  implements IRepository<PeticionesDirectasEntity, PeticionesDirectasCreate, PeticionesDirectasUpdate>
{
  async findAll(): Promise<PeticionesDirectasEntity[]> {
    const rows = await sqlDb.peticionesDirectas.findMany();
    return rows.map((r) => new PeticionesDirectasEntity(r));
  }

  async findById(id: number): Promise<PeticionesDirectasEntity | null> {
    const row = await sqlDb.peticionesDirectas.findUnique({ where: { idPeticionDirecta: id } });
    return row ? new PeticionesDirectasEntity(row) : null;
  }

  async create(data: PeticionesDirectasCreate): Promise<PeticionesDirectasEntity> {
    const row = await sqlDb.peticionesDirectas.create({ data });
    return new PeticionesDirectasEntity(row);
  }

  async update(id: number, data: PeticionesDirectasUpdate): Promise<PeticionesDirectasEntity> {
    const row = await sqlDb.peticionesDirectas.update({ where: { idPeticionDirecta: id }, data });
    return new PeticionesDirectasEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.peticionesDirectas.delete({ where: { idPeticionDirecta: id } });
  }
}
