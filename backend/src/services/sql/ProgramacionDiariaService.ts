import { ProgramacionDiariaRepository } from '../../repositories/sql/ProgramacionDiariaRepository.js';
import { ProgramacionDiariaEntity } from '../../entities/sql/ProgramacionDiaria.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type ProgInput = { idGrupoTrabajo: number; ubicacion: string; fecha?: Date | null; actividadesRealizadas: string; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class ProgramacionDiariaService {
  private readonly repo = new ProgramacionDiariaRepository();
  async getAll(): Promise<ProgramacionDiariaEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<ProgramacionDiariaEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`Programacion id ${id} no encontrada`); return e; }
  async create(data: ProgInput): Promise<ProgramacionDiariaEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<ProgInput>): Promise<ProgramacionDiariaEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
