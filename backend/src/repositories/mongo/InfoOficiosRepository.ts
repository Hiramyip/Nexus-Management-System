import { mongoDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { InfoOficiosEntity } from '../../entities/mongo/InfoOficios.entity.js';

type InfoOficiosCreate = {
  idOficio: number;
  idGrupoTrabajo: number;
  ubicacion: string;
  fecha?: Date | null;
  metroLineal?: number | null;
  metroCuadrado?: number | null;
  metroCubico?: number | null;
  peso?: number | null;
  usuarioModificacion?: string;
  fechaModificacion?: Date | null;
};
type InfoOficiosUpdate = Partial<InfoOficiosCreate>;

export class InfoOficiosRepository
  implements IRepository<InfoOficiosEntity, InfoOficiosCreate, InfoOficiosUpdate, string>
{
  async findAll(): Promise<InfoOficiosEntity[]> {
    const rows = await mongoDb.infoOficios.findMany();
    return rows.map((r: any) => new InfoOficiosEntity(r));
  }

  async findById(id: string): Promise<InfoOficiosEntity | null> {
    const row = await mongoDb.infoOficios.findUnique({ where: { id } });
    return row ? new InfoOficiosEntity(row) : null;
  }

  async create(data: InfoOficiosCreate): Promise<InfoOficiosEntity> {
    const row = await mongoDb.infoOficios.create({
      data: {
        idOficio: data.idOficio,
        idGrupoTrabajo: data.idGrupoTrabajo,
        ubicacion: data.ubicacion,
        fecha: data.fecha ?? new Date(),
        metroLineal: data.metroLineal,
        metroCuadrado: data.metroCuadrado,
        metroCubico: data.metroCubico,
        peso: data.peso,
        usuarioModificacion: data.usuarioModificacion ?? 'sistema',
        fechaModificacion: data.fechaModificacion ?? new Date(),
      }
    });
    return new InfoOficiosEntity(row);
  }

  async update(id: string, data: InfoOficiosUpdate): Promise<InfoOficiosEntity> {
    const row = await mongoDb.infoOficios.update({
      where: { id },
      data: {
        ...data,
        usuarioModificacion: data.usuarioModificacion ?? undefined,
      } as any
    });
    return new InfoOficiosEntity(row);
  }

  async delete(id: string): Promise<void> {
    await mongoDb.infoOficios.delete({ where: { id } });
  }
}
