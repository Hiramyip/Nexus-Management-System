import { TransaccionesExcelRepository } from '../../repositories/sql/TransaccionesExcelRepository.js';
import { TransaccionesExcelEntity } from '../../entities/sql/TransaccionesExcel.entity.js';

export class TransaccionesExcelService {
  private readonly repo = new TransaccionesExcelRepository();

  async getAll(): Promise<TransaccionesExcelEntity[]> {
    return this.repo.findAll();
  }

  async getById(id: number): Promise<TransaccionesExcelEntity> {
    const entity = await this.repo.findById(id);
    if (!entity) throw new Error(`TransaccionExcel con id ${id} no encontrada`);
    return entity;
  }

  async create(data: {
    idUsuario: number;
    nombreArchivo: string;
    fechaTransaccion?: Date;
  }): Promise<TransaccionesExcelEntity> {
    return this.repo.create({
      idUsuario: data.idUsuario,
      nombreArchivo: data.nombreArchivo,
      fechaTransaccion: data.fechaTransaccion ?? new Date(),
    });
  }

  async delete(id: number): Promise<void> {
    await this.getById(id);
    return this.repo.delete(id);
  }
}
