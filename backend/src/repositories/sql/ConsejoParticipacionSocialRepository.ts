import { Decimal } from '@prisma/client/runtime/library';
import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { ConsejoParticipacionSocialEntity } from '../../entities/sql/ConsejoParticipacionSocial.entity.js';

type ConsejoCreate = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  actividadesRealizadas: string;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};
type ConsejoUpdate = Partial<ConsejoCreate>;

export class ConsejoParticipacionSocialRepository
  implements IRepository<ConsejoParticipacionSocialEntity, ConsejoCreate, ConsejoUpdate>
{
  async findAll(): Promise<ConsejoParticipacionSocialEntity[]> {
    const rows = await sqlDb.consejoParticipacionSocial.findMany();
    return rows.map((r) => new ConsejoParticipacionSocialEntity(r));
  }

  async findById(id: number): Promise<ConsejoParticipacionSocialEntity | null> {
    const row = await sqlDb.consejoParticipacionSocial.findUnique({ where: { idConsejo: id } });
    return row ? new ConsejoParticipacionSocialEntity(row) : null;
  }

  async create(data: ConsejoCreate): Promise<ConsejoParticipacionSocialEntity> {
    const row = await sqlDb.consejoParticipacionSocial.create({ data });
    return new ConsejoParticipacionSocialEntity(row);
  }

  async update(id: number, data: ConsejoUpdate): Promise<ConsejoParticipacionSocialEntity> {
    const row = await sqlDb.consejoParticipacionSocial.update({ where: { idConsejo: id }, data });
    return new ConsejoParticipacionSocialEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.consejoParticipacionSocial.delete({ where: { idConsejo: id } });
  }
}
