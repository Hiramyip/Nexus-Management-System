import { Router, Request, Response } from 'express';
import { TransaccionesExcelService } from '../../services/sql/TransaccionesExcelService.js';
import multer from 'multer';
import FormData from 'form-data';

const router = Router();
const service = new TransaccionesExcelService();

// Configuración de multer para subir archivos (en memoria)
const upload = multer({ storage: multer.memoryStorage() });

// POST /api/sql/transaccionesExcel/upload - Subir archivo al Excel Processor
router.post('/upload', upload.single('file'), async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se proporcionó ningún archivo' });
    }

    const excelProcessorUrl = process.env.EXCEL_PROCESSOR_URL || process.env.PYTHON_SERVICE_URL || 'http://localhost:8003';

    // Crear FormData para enviar al Excel Processor
    const formData = new FormData();
    formData.append('file', req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    // Enviar archivo al Excel Processor
    const response = await fetch(`${excelProcessorUrl}/process`, {
      method: 'POST',
      body: formData as any,
      headers: formData.getHeaders() as any,
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error del Excel Processor: ${errorText}`);
    }

    const result = await response.json();

    // Registrar la transacción en la base de datos
    const { idUsuario } = req.body;
    if (idUsuario) {
      await service.create({
        idUsuario: Number(idUsuario),
        nombreArchivo: req.file.originalname,
      });
    }

    res.json(result);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/', async (_req: Request, res: Response) => {
  try { res.json((await service.getAll()).map((e) => e.toJSON())); }
  catch (e) { res.status(500).json({ error: (e as Error).message }); }
});

router.get('/:id', async (req: Request, res: Response) => {
  try { res.json((await service.getById(Number(req.params.id))).toJSON()); }
  catch (e) { res.status(404).json({ error: (e as Error).message }); }
});

router.post('/', async (req: Request, res: Response) => {
  try { res.status(201).json((await service.create(req.body)).toJSON()); }
  catch (e) { res.status(500).json({ error: (e as Error).message }); }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try { await service.delete(Number(req.params.id)); res.status(204).send(); }
  catch (e) { res.status(500).json({ error: (e as Error).message }); }
});

export default router;
