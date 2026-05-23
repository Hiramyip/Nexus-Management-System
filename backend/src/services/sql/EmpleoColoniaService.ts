import { EmpleoColoniaRepository } from '../../repositories/sql/EmpleoColoniaRepository.js';
import { EmpleoColoniaEntity } from '../../entities/sql/EmpleoColonia.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type EmpInput = { idGrupoTrabajo: number; ubicacion: string; fecha?: Date | null; actividadesRealizadas: string; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class EmpleoColoniaService {
  private readonly repo = new EmpleoColoniaRepository();
  async getAll(): Promise<EmpleoColoniaEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<EmpleoColoniaEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`EmpleoColonia id ${id} no encontrado`); return e; }
  async create(data: EmpInput): Promise<EmpleoColoniaEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<EmpInput>): Promise<EmpleoColoniaEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
