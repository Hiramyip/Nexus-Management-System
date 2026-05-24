import { TiraderosInspeccionRepository } from '../../repositories/sql/TiraderosInspeccionRepository.js';
import { TiraderosInspeccionEntity } from '../../entities/sql/TiraderosInspeccion.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type TIInput = { idGrupoTrabajo: number; ubicacion: string; fecha?: Date | null; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class TiraderosInspeccionService {
  private readonly repo = new TiraderosInspeccionRepository();
  async getAll(): Promise<TiraderosInspeccionEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<TiraderosInspeccionEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`TiraderoInspeccion id ${id} no encontrado`); return e; }
  async create(data: TIInput): Promise<TiraderosInspeccionEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<TIInput>): Promise<TiraderosInspeccionEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
