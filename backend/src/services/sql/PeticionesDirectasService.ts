import { PeticionesDirectasRepository } from '../../repositories/sql/PeticionesDirectasRepository.js';
import { PeticionesDirectasEntity } from '../../entities/sql/PeticionesDirectas.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type PetInput = { idGrupoTrabajo: number; ubicacion: string; fecha?: Date | null; actividadesRealizadas: string; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class PeticionesDirectasService {
  private readonly repo = new PeticionesDirectasRepository();
  async getAll(): Promise<PeticionesDirectasEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<PeticionesDirectasEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`PeticionDirecta id ${id} no encontrada`); return e; }
  async create(data: PetInput): Promise<PeticionesDirectasEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<PetInput>): Promise<PeticionesDirectasEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
