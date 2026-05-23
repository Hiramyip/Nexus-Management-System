import { sqlDb } from '../../db.js';
import { IRepository } from '../IRepository.js';
import { UsuariosEntity } from '../../entities/sql/Usuarios.entity.js';

type UsuariosCreate = {
  nombre: string;
  password_user: string;
  rol: string;
  fechaRegistro?: Date;
};
type UsuariosUpdate = Partial<UsuariosCreate>;

export class UsuariosRepository
  implements IRepository<UsuariosEntity, UsuariosCreate, UsuariosUpdate>
{
  async findAll(): Promise<UsuariosEntity[]> {
    const rows = await sqlDb.usuarios.findMany();
    return rows.map((r) => new UsuariosEntity(r));
  }

  async findById(id: number): Promise<UsuariosEntity | null> {
    const row = await sqlDb.usuarios.findUnique({ where: { idUsuario: id } });
    return row ? new UsuariosEntity(row) : null;
  }

  async findByNombre(nombre: string): Promise<UsuariosEntity | null> {
    const row = await sqlDb.usuarios.findFirst({ where: { nombre } });
    return row ? new UsuariosEntity(row) : null;
  }

  async create(data: UsuariosCreate): Promise<UsuariosEntity> {
    const row = await sqlDb.usuarios.create({
      data: {
        ...data,
        fechaRegistro: data.fechaRegistro ?? new Date(),
      },
    });
    return new UsuariosEntity(row);
  }

  async update(id: number, data: UsuariosUpdate): Promise<UsuariosEntity> {
    const row = await sqlDb.usuarios.update({ where: { idUsuario: id }, data });
    return new UsuariosEntity(row);
  }

  async delete(id: number): Promise<void> {
    await sqlDb.usuarios.delete({ where: { idUsuario: id } });
  }
}
