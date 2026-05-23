import { UsuariosRepository } from '../../repositories/sql/UsuariosRepository.js';
import { UsuariosEntity } from '../../entities/sql/Usuarios.entity.js';

export class UsuariosService {
  private readonly repo = new UsuariosRepository();

  async getAll(): Promise<UsuariosEntity[]> {
    return this.repo.findAll();
  }

  async getById(id: number): Promise<UsuariosEntity> {
    const entity = await this.repo.findById(id);
    if (!entity) throw new Error(`Usuario con id ${id} no encontrado`);
    return entity;
  }

  async create(data: {
    nombre: string;
    password_user: string;
    rol: string;
  }): Promise<UsuariosEntity> {
    return this.repo.create({ ...data, fechaRegistro: new Date() });
  }

  async update(
    id: number,
    data: Partial<{ nombre: string; password_user: string; rol: string }>
  ): Promise<UsuariosEntity> {
    await this.getById(id); // valida existencia
    return this.repo.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.getById(id); // valida existencia
    return this.repo.delete(id);
  }
}
