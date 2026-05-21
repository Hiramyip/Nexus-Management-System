import express from 'express';
import cors from 'cors';
import { sqlDb, mongoDb } from './db';

const app = express();
const PORT = process.env.PORT || 8000;
const EXCEL_PROCESSOR_URL = process.env.EXCEL_PROCESSOR_URL || 'http://localhost:8003';

app.use(cors());
app.use(express.json());

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

app.get('/api/sql/usuarios', async (req, res) => {
    try {
        const users = await sqlDb.usuarios.findMany();
        res.json(users);
    } catch (e) {
        res.status(500).json({ error: (e as Error).message });
    }
});

app.post('/api/sql/usuarios', async (req, res) => {
    try {
        const { nombre, password_user, rol } = req.body;
        const user = await sqlDb.usuarios.create({
            data: {
                nombre,
                password_user,
                rol,
                fechaRegistro: new Date()
            }
        });
        res.json(user);
    } catch (e) {
        res.status(500).json({ error: (e as Error).message });
    }
});

app.get('/api/mongo/sesiones', async (req, res) => {
    try {
        const sessions = await mongoDb.eventoInicioSesion.findMany();
        res.json(sessions);
    } catch (e) {
        res.status(500).json({ error: (e as Error).message });
    }
});

app.post('/api/mongo/sesiones', async (req, res) => {
    try {
        const session = await mongoDb.eventoInicioSesion.create({
            data: {}
        });
        res.json(session);
    } catch (e) {
        res.status(500).json({ error: (e as Error).message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});