import { CigaRepository } from '../../repositories/sql/CigaRepository.js';
import { CigaEntity } from '../../entities/sql/Ciga.entity.js';
import { Decimal } from '@prisma/client/runtime/library';

type CigaInput = {
  idGrupoTrabajo: number;
  numeroVentanilla: number;
  folioCiga: string;
  ubicacion: string;
  fecha?: Date | null;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: Decimal | null;
  peso?: Decimal | null;
};

export class CigaService {
  private readonly repo = new CigaRepository();

  async getAll(): Promise<CigaEntity[]> { return this.repo.findAll(); }
  async getById(id: number): Promise<CigaEntity> {
    const e = await this.repo.findById(id);
    if (!e) throw new Error(`Ciga id ${id} no encontrada`);
    return e;
  }
  async create(data: CigaInput): Promise<CigaEntity> { return this.repo.create(data); }
  async update(id: number, data: Partial<CigaInput>): Promise<CigaEntity> {
    await this.getById(id);
    return this.repo.update(id, data);
  }
  async delete(id: number): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
