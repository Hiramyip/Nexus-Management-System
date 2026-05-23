import { PuentesRepository } from '../../repositories/sql/PuentesRepository.js';
import { PuentesEntity } from '../../entities/sql/Puentes.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type PuentInput = { idGrupoTrabajo: number; ubicacion: string; fecha?: Date | null; actividadesRealizadas: string; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class PuentesService {
  private readonly repo = new PuentesRepository();
  async getAll(): Promise<PuentesEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<PuentesEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`Puente id ${id} no encontrado`); return e; }
  async create(data: PuentInput): Promise<PuentesEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<PuentInput>): Promise<PuentesEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
