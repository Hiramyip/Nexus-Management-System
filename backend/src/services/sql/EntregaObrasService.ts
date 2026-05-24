import { EntregaObrasRepository } from '../../repositories/sql/EntregaObrasRepository.js';
import { EntregaObrasEntity } from '../../entities/sql/EntregaObras.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type EntInput = { idGrupoTrabajo: number; ubicacion: string; fecha?: Date | null; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class EntregaObrasService {
  private readonly repo = new EntregaObrasRepository();
  async getAll(): Promise<EntregaObrasEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<EntregaObrasEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`EntregaObra id ${id} no encontrada`); return e; }
  async create(data: EntInput): Promise<EntregaObrasEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<EntInput>): Promise<EntregaObrasEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
