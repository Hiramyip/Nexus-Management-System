import { PCTRepository } from '../../repositories/sql/PCTRepository.js';
import { PCTEntity } from '../../entities/sql/PCT.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type PCTInput = { idGrupoTrabajo: number; numeroReferencia?: number | null; tipoPeriodo: string; estatus: string; ubicacion: string; fecha?: Date | null; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class PCTService {
  private readonly repo = new PCTRepository();
  async getAll(): Promise<PCTEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<PCTEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`PCT id ${id} no encontrado`); return e; }
  async create(data: PCTInput): Promise<PCTEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<PCTInput>): Promise<PCTEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
