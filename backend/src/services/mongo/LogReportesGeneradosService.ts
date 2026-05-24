import { LogReportesGeneradosRepository } from '../../repositories/mongo/LogReportesGeneradosRepository.js';
import { LogReportesGeneradosEntity } from '../../entities/mongo/LogReportesGenerados.entity.js';

export class LogReportesGeneradosService {
  private readonly repo = new LogReportesGeneradosRepository();
  async getAll(): Promise<LogReportesGeneradosEntity[]> { return this.repo.findAll(); }
  async getById(id: string): Promise<LogReportesGeneradosEntity> {
    const e = await this.repo.findById(id);
    if (!e) throw new Error(`LogReporteGenerado id ${id} no encontrado`);
    return e;
  }
  async create(): Promise<LogReportesGeneradosEntity> { return this.repo.create({}); }
  async delete(id: string): Promise<void> { await this.getById(id); return this.repo.delete(id); }
}
