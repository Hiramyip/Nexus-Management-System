import { UsuariosRepository } from '../../repositories/sql/UsuariosRepository.js';
import { UsuariosEntity } from '../../entities/sql/Usuarios.entity.js';
import bcrypt from 'bcryptjs';

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
    const hashedPassword = await bcrypt.hash(data.password_user, 10);
    return this.repo.create({
      ...data,
      password_user: hashedPassword,
      fechaRegistro: new Date(),
    });
  }

  async update(
    id: number,
    data: Partial<{ nombre: string; password_user: string; rol: string }>
  ): Promise<UsuariosEntity> {
    await this.getById(id); // valida existencia
    
    const updateData = { ...data };
    if (updateData.password_user) {
      updateData.password_user = await bcrypt.hash(updateData.password_user, 10);
    }
    
    return this.repo.update(id, updateData);
  }

  async delete(id: number): Promise<void> {
    await this.getById(id); // valida existencia
    return this.repo.delete(id);
  }

  async login(nombre: string, password_user: string): Promise<UsuariosEntity> {
    const entity = await this.repo.findByNombre(nombre);
    if (!entity) throw new Error('Usuario no encontrado');
    
    const isPasswordValid = await bcrypt.compare(password_user, entity.password_user);
    if (!isPasswordValid) throw new Error('Contraseña incorrecta');
    
    return entity;
  }
}

