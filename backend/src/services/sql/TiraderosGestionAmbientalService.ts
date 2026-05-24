import { TiraderosGestionAmbientalRepository } from '../../repositories/sql/TiraderosGestionAmbientalRepository.js';
import { TiraderosGestionAmbientalEntity } from '../../entities/sql/TiraderosGestionAmbiental.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type TGAInput = { idGrupoTrabajo: number; ubicacion: string; fecha?: Date | null; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class TiraderosGestionAmbientalService {
  private readonly repo = new TiraderosGestionAmbientalRepository();
  async getAll(): Promise<TiraderosGestionAmbientalEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<TiraderosGestionAmbientalEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`TiraderoGestion id ${id} no encontrado`); return e; }
  async create(data: TGAInput): Promise<TiraderosGestionAmbientalEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<TGAInput>): Promise<TiraderosGestionAmbientalEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
