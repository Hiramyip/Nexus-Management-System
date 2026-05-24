import { EscuelasRepository } from '../../repositories/sql/EscuelasRepository.js';
import { EscuelasEntity } from '../../entities/sql/Escuelas.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type EscInput = { idGrupoTrabajo: number; ubicacion: string; fecha?: Date | null; actividadesRealizadas: string; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class EscuelasService {
  private readonly repo = new EscuelasRepository();
  async getAll(): Promise<EscuelasEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<EscuelasEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`Escuela id ${id} no encontrada`); return e; }
  async create(data: EscInput): Promise<EscuelasEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<EscInput>): Promise<EscuelasEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
