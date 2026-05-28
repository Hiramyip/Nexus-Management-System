import { Router, Request, Response } from 'express';
import { EventoInicioSesionService } from '../../services/mongo/EventoInicioSesionService.js';
import { validateBody, validationSchemas } from '../../middleware/ValidationMiddleware.js';

const router = Router();
const service = new EventoInicioSesionService();

// GET /api/mongo/eventoInicioSesion
router.get('/', async (_req: Request, res: Response) => {
  try {
    const data = await service.getAll();
    res.json(data.map((e) => e.toJSON()));
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// GET /api/mongo/eventoInicioSesion/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const data = await service.getById(req.params.id);
    res.json(data.toJSON());
  } catch (e) {
    res.status(404).json({ error: (e as Error).message });
  }
});

// POST /api/mongo/eventoInicioSesion
router.post('/', validateBody(validationSchemas.eventoInicioSesion), async (req: Request, res: Response) => {
  try {
    const { nombreUsuario, rol, fechaInicio, ip } = req.body;
    const data = await service.create({
      nombreUsuario,
      rol,
      fechaInicio: fechaInicio ? new Date(fechaInicio) : undefined,
      ip: ip || req.ip,
    });
    res.status(201).json(data.toJSON());
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// DELETE /api/mongo/eventoInicioSesion/:id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await service.delete(req.params.id);
    res.status(204).send();
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

export default router;
