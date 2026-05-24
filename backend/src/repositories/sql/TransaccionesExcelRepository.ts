import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { TransaccionesExcelEntity } from '../../entities/sql/TransaccionesExcel.entity.js';

type TransaccionesExcelCreate = {
  idUsuario: number;
  nombreArchivo: string;
  fechaTransaccion: Date;
};
type TransaccionesExcelUpdate = Partial<TransaccionesExcelCreate>;

export class TransaccionesExcelRepository
  implements IRepository<TransaccionesExcelEntity, TransaccionesExcelCreate, TransaccionesExcelUpdate>
{
  async findAll(): Promise<TransaccionesExcelEntity[]> {
    const rows = await sqlDb.transaccionesExcel.findMany();
    return rows.map((r) => new TransaccionesExcelEntity(r));
  }

  async findById(id: number): Promise<TransaccionesExcelEntity | null> {
    const row = await sqlDb.transaccionesExcel.findUnique({ where: { idTransaccionExcel: id } });
    return row ? new TransaccionesExcelEntity(row) : null;
  }

  async create(data: TransaccionesExcelCreate): Promise<TransaccionesExcelEntity> {
    const row = await sqlDb.transaccionesExcel.create({ data });
    return new TransaccionesExcelEntity(row);
  }

  async update(id: number, data: TransaccionesExcelUpdate): Promise<TransaccionesExcelEntity> {
    const row = await sqlDb.transaccionesExcel.update({ where: { idTransaccionExcel: id }, data });
    return new TransaccionesExcelEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.transaccionesExcel.delete({ where: { idTransaccionExcel: id } });
  }
}
