import { PanteonesRepository } from '../../repositories/sql/PanteonesRepository.js';
import { PanteonesEntity } from '../../entities/sql/Panteones.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type PantInput = { idGrupoTrabajo: number; ubicacion: string; fecha?: Date | null; actividadesRealizadas: string; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class PanteonesService {
  private readonly repo = new PanteonesRepository();
  async getAll(): Promise<PanteonesEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<PanteonesEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`Panteon id ${id} no encontrado`); return e; }
  async create(data: PantInput): Promise<PanteonesEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<PantInput>): Promise<PanteonesEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
