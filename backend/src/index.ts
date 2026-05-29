import express from 'express';
import cors from 'cors';
import { sqlDb, mongoDb } from './db';
import { requestInterceptor } from './services/RequestInterceptorService.js';

// SQL Routes
import grupoTrabajoRoutes from './routes/sql/grupoTrabajo.routes.js';
import usuariosRoutes from './routes/sql/usuarios.routes.js';
import transaccionesExcelRoutes from './routes/sql/transaccionesExcel.routes.js';
import casasQuemadasRoutes from './routes/sql/casasQuemadas.routes.js';
import cigaRoutes from './routes/sql/ciga.routes.js';
import consejoParticipacionSocialRoutes from './routes/sql/consejoParticipacionSocial.routes.js';
import descacharrizacionRoutes from './routes/sql/descacharrizacion.routes.js';
import empleoColoniaRoutes from './routes/sql/empleoColonia.routes.js';
import entregaObrasRoutes from './routes/sql/entregaObras.routes.js';
import escuelasRoutes from './routes/sql/escuelas.routes.js';
import eventosEspecialesRoutes from './routes/sql/eventosEspeciales.routes.js';
import oficiosRoutes from './routes/sql/oficios.routes.js';
import panteonesRoutes from './routes/sql/panteones.routes.js';
import pctRoutes from './routes/sql/pct.routes.js';
import peticionesDirectasRoutes from './routes/sql/peticionesDirectas.routes.js';
import programacionDiariaRoutes from './routes/sql/programacionDiaria.routes.js';
import puentesRoutes from './routes/sql/puentes.routes.js';
import tiraderosGestionAmbientalRoutes from './routes/sql/tiraderosGestionAmbiental.routes.js';
import tiraderosInspeccionRoutes from './routes/sql/tiraderosInspeccion.routes.js';
import capturaRoutes from './routes/sql/captura.routes.js';
import reportesRoutes from './routes/sql/reportes.routes.js';

// Mongo Routes
import eventoActividadDatosRoutes from './routes/mongo/eventoActividadDatos.routes.js';
import eventoInicioSesionRoutes from './routes/mongo/eventoInicioSesion.routes.js';
import infoOficiosRoutes from './routes/mongo/infoOficios.routes.js';
import logReportesGeneradosRoutes from './routes/mongo/logReportesGenerados.routes.js';
import eventoModificacionRoutes from './routes/mongo/eventoModificacion.routes.js';

const app = express();
const PORT = process.env.PORT || 8000;
const EXCEL_PROCESSOR_URL = process.env.EXCEL_PROCESSOR_URL || 'http://localhost:8003';

app.use(cors({
  origin: [
    'https://ft-nexxusms.duckdns.org',
    'http://localhost:3000',
    'https://nexus-management-system-gamma.vercel.app',
    'https://nexus-backend-2pm4.onrender.com'
  ],
  credentials: true
}));
app.use(express.json());
app.use(requestInterceptor);

// Status endpoint (keeps original logic)
app.get('/api/status', async (req, res) => {
    let sqlServerStatus = 'offline';
    let mongoDbStatus = 'offline';
    let excelProcessorStatus = 'offline';

    try {
        await sqlDb.$queryRaw`SELECT 1`;
        sqlServerStatus = 'online';
    } catch (e) {}

    try {
        await mongoDb.eventoInicioSesion.findFirst();
        mongoDbStatus = 'online';
    } catch (e) {}

    try {
        const response = await fetch(EXCEL_PROCESSOR_URL);
        if (response.ok) {
            excelProcessorStatus = 'online';
        }
    } catch (e) {}

    res.json({
        sqlServer: sqlServerStatus,
        mongoDb: mongoDbStatus,
        excelProcessor: excelProcessorStatus
    });
});

// Mount SQL routes
app.use('/api/sql/grupoTrabajo', grupoTrabajoRoutes);
app.use('/api/sql/usuarios', usuariosRoutes);
app.use('/api/sql/transaccionesExcel', transaccionesExcelRoutes);
app.use('/api/sql/casasQuemadas', casasQuemadasRoutes);
app.use('/api/sql/ciga', cigaRoutes);
app.use('/api/sql/consejoParticipacionSocial', consejoParticipacionSocialRoutes);
app.use('/api/sql/descacharrizacion', descacharrizacionRoutes);
app.use('/api/sql/empleoColonia', empleoColoniaRoutes);
app.use('/api/sql/entregaObras', entregaObrasRoutes);
app.use('/api/sql/escuelas', escuelasRoutes);
app.use('/api/sql/eventosEspeciales', eventosEspecialesRoutes);
app.use('/api/sql/oficios', oficiosRoutes);
app.use('/api/sql/panteones', panteonesRoutes);
app.use('/api/sql/pct', pctRoutes);
app.use('/api/sql/peticionesDirectas', peticionesDirectasRoutes);
app.use('/api/sql/programacionDiaria', programacionDiariaRoutes);
app.use('/api/sql/puentes', puentesRoutes);
app.use('/api/sql/tiraderosGestionAmbiental', tiraderosGestionAmbientalRoutes);
app.use('/api/sql/tiraderosInspeccion', tiraderosInspeccionRoutes);
app.use('/api/sql/captura', capturaRoutes);
app.use('/api/sql/reportes', reportesRoutes);

// Mount Mongo routes
app.use('/api/mongo/eventoActividadDatos', eventoActividadDatosRoutes);
app.use('/api/mongo/eventoInicioSesion', eventoInicioSesionRoutes);
app.use('/api/mongo/infoOficios', infoOficiosRoutes);
app.use('/api/mongo/logReportesGenerados', logReportesGeneradosRoutes);
app.use('/api/mongo/eventoModificacion', eventoModificacionRoutes);

// Legacy route aliases for backward compatibility
app.use('/api/mongo/sesiones', eventoInicioSesionRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});