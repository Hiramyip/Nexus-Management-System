import { OficiosRepository } from '../../repositories/sql/OficiosRepository.js';
import { OficiosEntity } from '../../entities/sql/Oficios.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type OfInput = { idGrupoTrabajo: number; ubicacion: string; fecha?: Date | null; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class OficiosService {
  private readonly repo = new OficiosRepository();
  async getAll(): Promise<OficiosEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<OficiosEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`Oficio id ${id} no encontrado`); return e; }
  async create(data: OfInput): Promise<OficiosEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<OfInput>): Promise<OficiosEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
