import { Router, Request, Response } from 'express';
import { UsuariosService } from '../../services/sql/UsuariosService.js';

const router = Router();
const service = new UsuariosService();

// GET /api/sql/usuarios
router.get('/', async (_req: Request, res: Response) => {
  try {
    const data = await service.getAll();
    res.json(data.map((e) => e.toJSON()));
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// GET /api/sql/usuarios/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const data = await service.getById(Number(req.params.id));
    res.json(data.toJSON());
  } catch (e) {
    res.status(404).json({ error: (e as Error).message });
  }
});

// POST /api/sql/usuarios
router.post('/', async (req: Request, res: Response) => {
  try {
    const { nombre, password_user, rol } = req.body as { nombre: string; password_user: string; rol: string };
    const data = await service.create({ nombre, password_user, rol });
    res.status(201).json(data.toJSON());
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// PUT /api/sql/usuarios/:id
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const data = await service.update(Number(req.params.id), req.body);
    res.json(data.toJSON());
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// DELETE /api/sql/usuarios/:id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await service.delete(Number(req.params.id));
    res.status(204).send();
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// POST /api/sql/usuarios/login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { nombre, password_user } = req.body as { nombre: string; password_user: string };
    const data = await service.login(nombre, password_user);
    res.json(data.toJSON());
  } catch (e) {
    res.status(401).json({ error: (e as Error).message });
  }
});

export default router;
