import { Router, Request, Response } from 'express';
import { CasasQuemadasService } from '../../services/sql/CasasQuemadasService.js';
const router = Router(); const service = new CasasQuemadasService();
router.get('/', async (_req, res: Response) => { try { res.json((await service.getAll()).map(e => e.toJSON())); } catch (e) { res.status(500).json({ error: (e as Error).message }); } });
router.get('/:id', async (req: Request, res: Response) => { try { res.json((await service.getById(Number(req.params.id))).toJSON()); } catch (e) { res.status(404).json({ error: (e as Error).message }); } });
router.post('/', async (req: Request, res: Response) => { try { res.status(201).json((await service.create(req.body)).toJSON()); } catch (e) { res.status(500).json({ error: (e as Error).message }); } });
router.put('/:id', async (req: Request, res: Response) => { try { res.json((await service.update(Number(req.params.id), req.body)).toJSON()); } catch (e) { res.status(500).json({ error: (e as Error).message }); } });
router.delete('/:id', async (req: Request, res: Response) => { try { await service.delete(Number(req.params.id)); res.status(204).send(); } catch (e) { res.status(500).json({ error: (e as Error).message }); } });
export default router;
