/**
 * Interfaz genérica del patrón Repository.
 * @template T          - Tipo de entidad que devuelve el repositorio
 * @template TCreate    - Tipo del payload para crear un registro
 * @template TUpdate    - Tipo del payload para actualizar un registro
 * @template TId        - Tipo del identificador (number para SQL, string para MongoDB)
 */
export interface IRepository<T, TCreate, TUpdate, TId = number> {
  findAll(): Promise<T[]>;
  findById(id: TId): Promise<T | null>;
  create(data: TCreate): Promise<T>;
  update(id: TId, data: TUpdate): Promise<T>;
  delete(id: TId): Promise<void>;
}
