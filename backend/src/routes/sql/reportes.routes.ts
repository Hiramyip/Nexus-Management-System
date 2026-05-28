import { Router, Request, Response } from 'express';
import { ReportesService } from '../../services/sql/ReportesService.js';

const router = Router();
const service = new ReportesService();

// Vistas de reportes
router.get('/oficios', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReporteOficios(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/escuelas', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReporteEscuelas(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/panteones', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReportePanteones(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/puentes', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReportePuentes(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/eventos-especiales', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReporteEventosEspeciales(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/programacion-diaria', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReporteProgramacionDiaria(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/empleo-colonia', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReporteEmpleoColonia(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/consejo-participacion', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReporteConsejoParticipacion(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/peticiones-directas', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReportePeticionesDirectas(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/ciga', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReporteCiga(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/entrega-obras', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReporteEntregaObras(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/casas-quemadas', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReporteCasasQuemadas(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/pct', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReportePct(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/descacharrizacion', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReporteDescacharrizacion(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/tiraderos-gestion', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReporteTiraderosGestion(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

router.get('/tiraderos-inspeccion', async (req: Request, res: Response) => {
  try {
    const { fechaInicio, fechaFin } = req.query;
    const data = await service.getReporteTiraderosInspeccion(
      fechaInicio ? new Date(fechaInicio as string) : undefined,
      fechaFin ? new Date(fechaFin as string) : undefined
    );
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

// Stored Procedure
router.post('/insertar-registro-dinamico', async (req: Request, res: Response) => {
  try {
    const data = await service.insertarRegistroDinamico(req.body);
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

export default router;
