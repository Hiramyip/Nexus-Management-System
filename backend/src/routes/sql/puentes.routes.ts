import { Router, Request, Response } from 'express';
import { PuentesService } from '../../services/sql/PuentesService.js';

const router = Router();
const service = new PuentesService();

// GET /api/sql/puentes
router.get('/', async (_req: Request, res: Response) => {
  try {
    const data = await service.getAll();
    res.json(data.map((e) => e.toJSON()));
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// GET /api/sql/puentes/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const data = await service.getById(Number(req.params.id));
    res.json(data.toJSON());
  } catch (e) {
    res.status(404).json({ error: (e as Error).message });
  }
});

// POST /api/sql/puentes
router.post('/', async (req: Request, res: Response) => {
  try {
    const data = await service.create(req.body);
    res.status(201).json(data.toJSON());
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// PUT /api/sql/puentes/:id
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const data = await service.update(Number(req.params.id), req.body);
    res.json(data.toJSON());
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// DELETE /api/sql/puentes/:id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await service.delete(Number(req.params.id));
    res.status(204).send();
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

export default router;
