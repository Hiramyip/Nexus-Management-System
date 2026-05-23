import { EventosEspecialesRepository } from '../../repositories/sql/EventosEspecialesRepository.js';
import { EventosEspecialesEntity } from '../../entities/sql/EventosEspeciales.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type EvEspInput = { idGrupoTrabajo: number; ubicacion: string; fecha?: Date | null; actividadesRealizadas: string; metroLineal?: number | null; metroCuadrado?: number | null; metroCubico?: Decimal | null; peso?: Decimal | null; };
export class EventosEspecialesService {
  private readonly repo = new EventosEspecialesRepository();
  async getAll(): Promise<EventosEspecialesEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<EventosEspecialesEntity> { const e = await this.repo.findById(id); if (!e) throw new Error(`EventoEspecial id ${id} no encontrado`); return e; }
  async create(data: EvEspInput): Promise<EventosEspecialesEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<EvEspInput>): Promise<EventosEspecialesEntity> { await this.getById(id); return this.repo.update(id, data); }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
