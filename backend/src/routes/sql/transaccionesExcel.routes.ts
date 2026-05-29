import { Router, Request, Response } from 'express';
import { TransaccionesExcelService } from '../../services/sql/TransaccionesExcelService.js';
import multer from 'multer';
import FormData from 'form-data';

const BACKEND_URL = process.env.BACKEND_URL || 'https://nexus-backend-2pm4.onrender.com';

const router = Router();
const service = new TransaccionesExcelService();

// Configuración de multer para subir archivos (en memoria)
const upload = multer({ storage: multer.memoryStorage() });

async function processExcelFile(req: Request, res: Response) {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No se proporcionó ningún archivo' });
    }

    const excelProcessorUrl = process.env.EXCEL_PROCESSOR_URL || process.env.PYTHON_SERVICE_URL || 'https://nexus-excel-processor-onrender-com.onrender.com';
    const formData = new FormData();
    formData.append('file', req.file.buffer, {
      filename: req.file.originalname,
      contentType: req.file.mimetype,
    });

    const response = await fetch(`${excelProcessorUrl}/process`, {
      method: 'POST',
      body: formData.getBuffer(),
      headers: formData.getHeaders(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMsg = errorText;
      try {
        const errorJson = JSON.parse(errorText);
        errorMsg = errorJson.detail || errorJson.error || errorText;
      } catch { /* no es JSON, usamos el texto crudo */ }
      throw new Error(`Error del Excel Processor: ${errorMsg}`);
    }

    return res.json(await response.json());
  } catch (e) {
    return res.status(500).json({ error: (e as Error).message });
  }
}

// POST /api/sql/transaccionesExcel/process - Procesa el Excel y devuelve los datos sin guardar aún
router.post('/process', upload.single('file'), processExcelFile);

// POST /api/sql/transaccionesExcel/upload - Alias para compatibilidad con el flujo anterior
router.post('/upload', upload.single('file'), processExcelFile);

// POST /api/sql/transaccionesExcel/save - Guarda los datos ya procesados en la base de datos
router.post('/save', async (req: Request, res: Response) => {
  try {
    const { reports, idUsuario, nombreArchivo } = req.body || {};

    if (!Array.isArray(reports) || reports.length === 0) {
      return res.status(400).json({ error: 'No se proporcionaron reportes procesados para guardar.' });
    }

    const saveResponse = await fetch(`${BACKEND_URL}/api/sql/captura/bulk`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reports),
    });

    const saveResult = await saveResponse.json().catch(() => ({}));
    if (!saveResponse.ok) {
      throw new Error((saveResult as any)?.error || 'No se pudieron guardar los reportes en la base de datos.');
    }

    if (idUsuario) {
      await service.create({
        idUsuario: Number(idUsuario),
        nombreArchivo: nombreArchivo || 'Excel procesado',
      });
    }

    return res.status(201).json({
      message: 'Reportes guardados correctamente.',
      saved: saveResult,
    });
  } catch (e) {
    return res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/', async (_req: Request, res: Response) => {
  try { res.json((await service.getAll()).map((e) => e.toJSON())); }
  catch (e) { res.status(500).json({ error: (e as Error).message }); }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'ID inválido' });
    res.json((await service.getById(id)).toJSON());
  } catch (e) { res.status(404).json({ error: (e as Error).message }); }
});

router.post('/', async (req: Request, res: Response) => {
  try { res.status(201).json((await service.create(req.body)).toJSON()); }
  catch (e) { res.status(500).json({ error: (e as Error).message }); }
});

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) return res.status(400).json({ error: 'ID inválido' });
    await service.delete(id);
    res.status(204).send();
  } catch (e) { res.status(500).json({ error: (e as Error).message }); }
});

export default router;
