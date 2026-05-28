import { describe, it, expect, vi, beforeEach } from 'vitest';
import { UsuariosService } from '../UsuariosService.js';
import { UsuariosEntity } from '../../../entities/sql/Usuarios.entity.js';
import bcrypt from 'bcryptjs';

// Mocks hoisted por Vitest. Deben comenzar con 'mock' obligatoriamente.
const mockFindAll = vi.fn();
const mockFindById = vi.fn();
const mockFindByNombre = vi.fn();
const mockCreate = vi.fn();
const mockUpdate = vi.fn();
const mockDelete = vi.fn();

// Mockear bcrypt
vi.mock('bcryptjs', () => ({
  default: {
    hash: vi.fn(),
    compare: vi.fn(),
  },
}));

// Mock del repositorio usando clase ES6 para evitar incompatibilidades de constructor
vi.mock('../../../repositories/sql/UsuariosRepository.js', () => {
  return {
    UsuariosRepository: class {
      findAll = mockFindAll;
      findById = mockFindById;
      findByNombre = mockFindByNombre;
      create = mockCreate;
      update = mockUpdate;
      delete = mockDelete;
    },
  };
});

describe('UsuariosService', () => {
  let service: UsuariosService;

  beforeEach(() => {
    vi.clearAllMocks();
    service = new UsuariosService();
  });

  describe('getAll', () => {
    it('debería retornar un listado de usuarios', async () => {
      const mockUsers: UsuariosEntity[] = [
        new UsuariosEntity({ idUsuario: 1, nombre: 'Admin', password_user: 'pwd', rol: 'Developer', fechaRegistro: new Date() }),
      ];
      mockFindAll.mockResolvedValue(mockUsers);

      const result = await service.getAll();

      expect(result).toEqual(mockUsers);
      expect(mockFindAll).toHaveBeenCalledTimes(1);
    });
  });

  describe('getById', () => {
    it('debería retornar el usuario si existe', async () => {
      const mockUser = new UsuariosEntity({ idUsuario: 1, nombre: 'Admin', password_user: 'pwd', rol: 'Developer', fechaRegistro: new Date() });
      mockFindById.mockResolvedValue(mockUser);

      const result = await service.getById(1);

      expect(result).toEqual(mockUser);
      expect(mockFindById).toHaveBeenCalledWith(1);
    });

    it('debería lanzar un error si el usuario no existe', async () => {
      mockFindById.mockResolvedValue(null);

      await expect(service.getById(99)).rejects.toThrow('Usuario no encontrado');
      expect(mockFindById).toHaveBeenCalledWith(99);
    });
  });

  describe('create', () => {
    it('debería crear un usuario asignándole la fecha de registro', async () => {
      const inputData = { nombre: 'Capturador1', password_user: 'pass123', rol: 'Capturador' };
      const expectedUser = new UsuariosEntity({ idUsuario: 2, ...inputData, fechaRegistro: new Date() });
      mockCreate.mockResolvedValue(expectedUser);

      const result = await service.create(inputData);

      expect(result).toEqual(expectedUser);
      expect(mockCreate).toHaveBeenCalledWith(expect.objectContaining({
        nombre: 'Capturador1',
        rol: 'Capturador',
        fechaRegistro: expect.any(Date),
      }));
    });
  });

  describe('update', () => {
    it('debería actualizar un usuario si existe', async () => {
      const mockUser = new UsuariosEntity({ idUsuario: 1, nombre: 'Admin', password_user: 'pwd', rol: 'Developer', fechaRegistro: new Date() });
      mockFindById.mockResolvedValue(mockUser);
      mockUpdate.mockResolvedValue({ ...mockUser, nombre: 'AdminNuevo' });

      const result = await service.update(1, { nombre: 'AdminNuevo' });

      expect(result.nombre).toBe('AdminNuevo');
      expect(mockFindById).toHaveBeenCalledWith(1);
      expect(mockUpdate).toHaveBeenCalledWith(1, { nombre: 'AdminNuevo' });
    });
  });

  describe('delete', () => {
    it('debería eliminar el usuario si existe', async () => {
      const mockUser = new UsuariosEntity({ idUsuario: 1, nombre: 'Admin', password_user: 'pwd', rol: 'Developer', fechaRegistro: new Date() });
      mockFindById.mockResolvedValue(mockUser);
      mockDelete.mockResolvedValue(undefined);

      await service.delete(1);

      expect(mockFindById).toHaveBeenCalledWith(1);
      expect(mockDelete).toHaveBeenCalledWith(1);
    });
  });

  describe('login', () => {
    it('debería autenticar exitosamente con credenciales válidas', async () => {
      const mockUser = new UsuariosEntity({ idUsuario: 1, nombre: 'Coordinador1', password_user: 'hashedPassword', rol: 'Coordinador', fechaRegistro: new Date() });
      mockFindByNombre.mockResolvedValue(mockUser);
      (bcrypt.compare as any).mockResolvedValue(true);

      const result = await service.login('Coordinador1', 'pass');

      expect(result).toEqual(mockUser);
      expect(mockFindByNombre).toHaveBeenCalledWith('Coordinador1');
      expect(bcrypt.compare).toHaveBeenCalledWith('pass', 'hashedPassword');
    });

    it('debería lanzar un error si el usuario no existe', async () => {
      mockFindByNombre.mockResolvedValue(null);

      await expect(service.login('NoExiste', 'pass')).rejects.toThrow('Credenciales inválidas');
    });

    it('debería lanzar un error si la contraseña es incorrecta', async () => {
      const mockUser = new UsuariosEntity({ idUsuario: 1, nombre: 'Admin', password_user: 'hashedPassword', rol: 'Developer', fechaRegistro: new Date() });
      mockFindByNombre.mockResolvedValue(mockUser);
      (bcrypt.compare as any).mockResolvedValue(false);

      await expect(service.login('Admin', 'incorrecta')).rejects.toThrow('Credenciales inválidas');
    });
  });
});
