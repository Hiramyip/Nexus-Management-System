import { ConsejoParticipacionSocialRepository } from '../../repositories/sql/ConsejoParticipacionSocialRepository.js';
import { ConsejoParticipacionSocialEntity } from '../../entities/sql/ConsejoParticipacionSocial.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type ConsejoInput = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  actividadesRealizadas: string;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};

export class ConsejoParticipacionSocialService {
  private readonly repo = new ConsejoParticipacionSocialRepository();

  async getAll(): Promise<ConsejoParticipacionSocialEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<ConsejoParticipacionSocialEntity> {
    const e = await this.repo.findById(id);
    if (!e) throw new Error(`Consejo id ${id} no encontrado`);
    return e;
  }
  async create(data: ConsejoInput): Promise<ConsejoParticipacionSocialEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<ConsejoInput>): Promise<ConsejoParticipacionSocialEntity> {
    await this.getById(id);
    return this.repo.update(id, data);
  }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
