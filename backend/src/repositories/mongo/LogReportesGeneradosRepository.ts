import { mongoDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { LogReportesGeneradosEntity } from '../../entities/mongo/LogReportesGenerados.entity.js';

type LogReportesCreate = {
  tipoReporte: string;
  fechaGeneracion?: Date | null;
  usuario: string;
  parametros?: any;
  exito?: boolean | null;
  mensaje?: string | null;
};
type LogReportesUpdate = Partial<LogReportesCreate>;

export class LogReportesGeneradosRepository
  implements IRepository<LogReportesGeneradosEntity, LogReportesCreate, LogReportesUpdate, string>
{
  async findAll(): Promise<LogReportesGeneradosEntity[]> {
    const rows = await mongoDb.logReportesGenerados.findMany();
    return rows.map((r: any) => new LogReportesGeneradosEntity(r));
  }

  async findById(id: string): Promise<LogReportesGeneradosEntity | null> {
    const row = await mongoDb.logReportesGenerados.findUnique({ where: { id } });
    return row ? new LogReportesGeneradosEntity(row) : null;
  }

  async create(data: LogReportesCreate): Promise<LogReportesGeneradosEntity> {
    const row = await mongoDb.logReportesGenerados.create({
      data: {
        tipoReporte: data.tipoReporte,
        fechaGeneracion: data.fechaGeneracion ?? new Date(),
        usuario: data.usuario,
        parametros: data.parametros,
        exito: data.exito ?? true,
        mensaje: data.mensaje,
      }
    });
    return new LogReportesGeneradosEntity(row);
  }

  async update(id: string, data: LogReportesUpdate): Promise<LogReportesGeneradosEntity> {
    const row = await mongoDb.logReportesGenerados.update({ where: { id }, data: data as any });
    return new LogReportesGeneradosEntity(row);
  }

  async delete(id: string): Promise<void> {
    await mongoDb.logReportesGenerados.delete({ where: { id } });
  }
}
