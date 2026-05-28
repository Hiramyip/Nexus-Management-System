import { UsuariosRepository } from '../../repositories/sql/UsuariosRepository.js';
import { UsuariosEntity } from '../../entities/sql/Usuarios.entity.js';
import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

export class UsuariosService {
  private readonly repo = new UsuariosRepository();

  async getAll(): Promise<UsuariosEntity[]> {
    return this.repo.findAll();
  }

  async getById(id: number): Promise<UsuariosEntity> {
    const entity = await this.repo.findById(id);
    if (!entity) throw new Error('Usuario no encontrado');
    return entity;
  }

  async create(data: {
    nombre: string;
    password_user: string;
    rol: string;
  }): Promise<UsuariosEntity> {
    // Encriptar contraseña antes de guardar
    const hashedPassword = await bcrypt.hash(data.password_user, SALT_ROUNDS);
    return this.repo.create({ 
      nombre: data.nombre, 
      password_user: hashedPassword, 
      rol: data.rol,
      fechaRegistro: new Date() 
    });
  }

  async update(
    id: number,
    data: Partial<{ nombre: string; password_user: string; rol: string }>
  ): Promise<UsuariosEntity> {
    await this.getById(id); // valida existencia
    
    // Si se está actualizando la contraseña, encriptarla
    const updateData = { ...data };
    if (data.password_user) {
      updateData.password_user = await bcrypt.hash(data.password_user, SALT_ROUNDS);
    }
    
    return this.repo.update(id, updateData);
  }

  async delete(id: number): Promise<void> {
    await this.getById(id); // valida existencia
    return this.repo.delete(id);
  }

  async login(nombre: string, password_user: string): Promise<UsuariosEntity> {
    const entity = await this.repo.findByNombre(nombre);
    if (!entity) throw new Error('Credenciales inválidas');
    
    // Verificar contraseña encriptada
    const isValidPassword = await bcrypt.compare(password_user, entity.password_user);
    if (!isValidPassword) throw new Error('Credenciales inválidas');
    
    return entity;
  }
}
