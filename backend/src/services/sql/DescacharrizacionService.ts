import { DescacharrizacionRepository } from '../../repositories/sql/DescacharrizacionRepository.js';
import { DescacharrizacionEntity } from '../../entities/sql/Descacharrizacion.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type DescInput = { idGrupoTrabajo: number; ubicacion: string; fecha?: Date | null; pesoIngresadoDocumento?: Decimal | null; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class DescacharrizacionService {
  private readonly repo = new DescacharrizacionRepository();
  async getAll(): Promise<DescacharrizacionEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<DescacharrizacionEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`Descacharrizacion id ${id} no encontrada`); return e; }
  async create(data: DescInput): Promise<DescacharrizacionEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<DescInput>): Promise<DescacharrizacionEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
