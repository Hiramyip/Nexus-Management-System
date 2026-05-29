import { Router, Request, Response } from 'express';
import { sqlDb } from '../../db.js';

const router = Router();

const ACTIVIDADES_LABELS: Record<string, string> = {
  barridoManual: "Barrido Manual",
  corteZacate: "Corte de Zacate",
  pepenaBAsura: "Pepena de Basura",
  levantamientoBasura: "Levantamiento de Basura",
  levantamientoEscombro: "Levantamiento de Escombro",
  limpiezaTerreno: "Limpieza de Terreno",
  levantamientoRamas: "Levantamiento de Ramas",
};

async function getOrCreateGrupoTrabajo(noCuadrilla: string): Promise<number> {
  const name = noCuadrilla || 'Cuadrilla General';
  // Buscar por nombre de encargado
  let gt = await sqlDb.grupoTrabajo.findFirst({
    where: { encargado: name }
  });
  if (!gt) {
    // Intentar buscar por ID numérico si la cadena contiene dígitos
    const idNum = parseInt(name.replace(/\D/g, ''));
    if (!isNaN(idNum)) {
      gt = await sqlDb.grupoTrabajo.findUnique({
        where: { idGrupoTrabajo: idNum }
      });
    }
  }
  if (!gt) {
    // Crear uno nuevo — algunos entornos tienen la columna `NumeroCuadrilla` como NOT NULL,
    // así que intentamos insertar explícitamente ese campo usando una consulta raw.
    const numero = noCuadrilla || name || 'General';
    try {
      // Usar OUTPUT INSERTED.idGrupoTrabajo para obtener el id insertado en SQL Server
      const inserted: any = await sqlDb.$queryRaw`
        INSERT INTO GrupoTrabajo (encargado, NumeroCuadrilla)
        OUTPUT INSERTED.idGrupoTrabajo
        VALUES (${name}, ${numero})
      `;

      // $queryRaw puede devolver diferentes shapes; buscar primer valor numérico
      if (inserted && inserted[0]) {
        const row = inserted[0];
        const id = row.idGrupoTrabajo ?? Object.values(row)[0];
        return Number(id);
      }
    } catch (err) {
      // Si la inserción raw falla, reintentar con prisma.create (más seguro en esquemas locales)
      try {
        gt = await sqlDb.grupoTrabajo.create({ data: { encargado: name } });
        return gt.idGrupoTrabajo;
      } catch (err2) {
        console.error('Error creando GrupoTrabajo (raw y prisma):', err, err2);
        throw err2;
      }
    }

    // Si por alguna razón no obtuvimos el id, lanzar error
    throw new Error('No fue posible crear GrupoTrabajo');
  }
  return gt.idGrupoTrabajo;
}

function getActividadesString(actividades: Record<string, boolean>): string {
  if (!actividades) return "Ninguna";
  const names = Object.entries(actividades)
    .filter(([_, val]) => val === true)
    .map(([key, _]) => ACTIVIDADES_LABELS[key] || key);
  return names.length > 0 ? names.join(", ") : "Ninguna";
}

// POST /api/sql/captura/bulk
router.post('/bulk', async (req: Request, res: Response) => {
  const reports = req.body as any[];
  if (!Array.isArray(reports)) {
    return res.status(400).json({ error: 'El cuerpo de la petición debe ser un arreglo de reportes.' });
  }

  const results: any[] = [];
  for (const r of reports) {
    try {
      const idGrupoTrabajo = await getOrCreateGrupoTrabajo(r.noCuadrilla);
      const fecha = r.fecha ? new Date(r.fecha) : new Date();
      const tipo = (r.tipo || '').toLowerCase();
      const actStr = getActividadesString(r.actividades);

      let createdRecord: any = null;

      // Mapear el reporte a su respectiva tabla Prisma
      switch (tipo) {
        case 'oficios':
          createdRecord = await sqlDb.oficios.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'ciga':
          createdRecord = await sqlDb.ciga.create({
            data: {
              idGrupoTrabajo,
              numeroVentanilla: r.ventanilla ? parseInt(r.ventanilla.replace(/\D/g, '')) || 1 : 1,
              folioCiga: r.folio || 'S/F',
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'entregaobras':
          createdRecord = await sqlDb.entregaObras.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'pct':
          createdRecord = await sqlDb.pCT.create({
            data: {
              idGrupoTrabajo,
              numeroReferencia: r.folio ? parseInt(r.folio.replace(/\D/g, '')) || 0 : 0,
              tipoPeriodo: 'Mensual',
              estatus: 'Pendiente',
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'descacharrizacion':
          createdRecord = await sqlDb.descacharrizacion.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              pesoIngresadoDocumento: r.pesoKg || 0,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'tiraderosgestionambiental':
          createdRecord = await sqlDb.tiraderosGestionAmbiental.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'escuelas':
          createdRecord = await sqlDb.escuelas.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              actividadesRealizadas: actStr,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'puentes':
          createdRecord = await sqlDb.puentes.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              actividadesRealizadas: actStr,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'panteones':
          createdRecord = await sqlDb.panteones.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              actividadesRealizadas: actStr,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'programaciondiaria':
          createdRecord = await sqlDb.programacionDiaria.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              actividadesRealizadas: actStr,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'empleocolonia':
          createdRecord = await sqlDb.empleoColonia.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              actividadesRealizadas: actStr,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'consejoparticipacionsocial':
          createdRecord = await sqlDb.consejoParticipacionSocial.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              actividadesRealizadas: actStr,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'tiraderosinspeccion':
          createdRecord = await sqlDb.tiraderosInspeccion.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'peticiondirecta':
        case 'peticionesdirectas':
          createdRecord = await sqlDb.peticionesDirectas.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              actividadesRealizadas: actStr,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        case 'eventoespecial':
        case 'eventosespeciales':
          createdRecord = await sqlDb.eventosEspeciales.create({
            data: {
              idGrupoTrabajo,
              ubicacion: r.ubicacion || 'Sin Ubicación',
              fecha,
              actividadesRealizadas: actStr,
              metroLineal: r.metrosLineales || 0,
              metroCuadrado: r.metrosCuadrados || 0,
              metroCubico: r.metrosCubicos || 0,
              peso: r.pesoKg || 0,
            }
          });
          break;
        default:
          throw new Error(`Tipo de reporte no reconocido: ${r.tipo}`);
      }

      results.push({ idOriginal: r.id, success: true, record: createdRecord });
    } catch (error: any) {
      console.error('Error procesando reporte:', { report: r, error });
      results.push({ idOriginal: r.id, success: false, error: error?.message || String(error) });
      // continuar con el siguiente registro sin abortar todo el batch
      continue;
    }
  }

  res.status(201).json({ message: 'Procesamiento por item completado.', results });
});

export default router;
