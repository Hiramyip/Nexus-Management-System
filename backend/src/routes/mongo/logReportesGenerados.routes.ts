import { Router, Request, Response } from 'express';
import { LogReportesGeneradosService } from '../../services/mongo/LogReportesGeneradosService.js';

const router = Router();
const service = new LogReportesGeneradosService();

// GET /api/mongo/logReportesGenerados
router.get('/', async (_req: Request, res: Response) => {
  try {
    const data = await service.getAll();
    res.json(data.map((e) => e.toJSON()));
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// GET /api/mongo/logReportesGenerados/:id
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const data = await service.getById(req.params.id);
    res.json(data.toJSON());
  } catch (e) {
    res.status(404).json({ error: (e as Error).message });
  }
});

// POST /api/mongo/logReportesGenerados
router.post('/', async (_req: Request, res: Response) => {
  try {
    const data = await service.create();
    res.status(201).json(data.toJSON());
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// DELETE /api/mongo/logReportesGenerados/:id
router.delete('/:id', async (req: Request, res: Response) => {
  try {
    await service.delete(req.params.id);
    res.status(204).send();
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

export default router;
