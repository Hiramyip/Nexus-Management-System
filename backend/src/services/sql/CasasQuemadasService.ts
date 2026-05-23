import { CasasQuemadasRepository } from '../../repositories/sql/CasasQuemadasRepository.js';
import { CasasQuemadasEntity } from '../../entities/sql/CasasQuemadas.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type CasasQuemadasInput = {
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};

export class CasasQuemadasService {
  private readonly repo = new CasasQuemadasRepository();

  async getAll(): Promise<CasasQuemadasEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<CasasQuemadasEntity> {
    const e = await this.repo.findById(id);
    if (!e) throw new Error(`CasaQuemada id ${id} no encontrada`);
    return e;
  }
  async create(data: CasasQuemadasInput): Promise<CasasQuemadasEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<CasasQuemadasInput>): Promise<CasasQuemadasEntity> {
    await this.getById(id);
    return this.repo.update(id, data);
  }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
