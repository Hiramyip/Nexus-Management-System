import { mongoDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { LogReportesGeneradosEntity } from '../../entities/mongo/LogReportesGenerados.entity.js';

type LogReportesCreate = Record<string, never>;
type LogReportesUpdate = Record<string, never>;

export class LogReportesGeneradosRepository
  implements IRepository<LogReportesGeneradosEntity, LogReportesCreate, LogReportesUpdate, string>
{
  async findAll(): Promise<LogReportesGeneradosEntity[]> {
    const rows = await mongoDb.logReportesGenerados.findMany();
    return rows.map((r) => new LogReportesGeneradosEntity(r));
  }

  async findById(id: string): Promise<LogReportesGeneradosEntity | null> {
    const row = await mongoDb.logReportesGenerados.findUnique({ where: { id } });
    return row ? new LogReportesGeneradosEntity(row) : null;
  }

  async create(_data: LogReportesCreate): Promise<LogReportesGeneradosEntity> {
    const row = await mongoDb.logReportesGenerados.create({ data: {} });
    return new LogReportesGeneradosEntity(row);
  }

  async update(id: string, _data: LogReportesUpdate): Promise<LogReportesGeneradosEntity> {
    const row = await mongoDb.logReportesGenerados.update({ where: { id }, data: {} });
    return new LogReportesGeneradosEntity(row);
  }

  async delete(id: string): Promise<void> {
    await mongoDb.logReportesGenerados.delete({ where: { id } });
  }
}
