import { Router, Request, Response } from 'express';
import { InfoOficiosService } from '../../services/mongo/InfoOficiosService.js';
import { validateBody, validationSchemas } from '../../middleware/ValidationMiddleware.js';

const router = Router();
const service = new InfoOficiosService();

// GET /api/mongo/infoOficios
router.get('/', async (_req: Request, res: Response) => {
  try {
    const data = await service.getAll();
    res.json(data.map((e) => e.toJSON()));
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// GET /api/mongo/infoOficios/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const data = await service.getById(req.params.id);
    res.json(data.toJSON());
  } catch (e) {
    res.status(404).json({ error: (e as Error).message });
  }
});

// POST /api/mongo/infoOficios
router.post('/', validateBody(validationSchemas.infoOficios), async (req: Request, res: Response) => {
  try {
    const data = await service.create(req.body);
    res.status(201).json(data.toJSON());
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// DELETE /api/mongo/infoOficios/:id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await service.delete(req.params.id);
    res.status(204).send();
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

export default router;
