import 'dotenv/config'

// 1. Importas los clientes desde sus respectivas rutas de salida
import { PrismaClient as SqlClient } from '../../prisma/generated/prisma/client'
import { PrismaClient as MongoClient } from '../../prisma/mongodb/client'

// 2. Creas las instancias globales
export const sqlDb = new SqlClient()
export const mongoDb = new MongoClient()

// Ejemplo de uso en una función:
async function testConnections() {
    console.log("Testing database connections...");

    // Consulta a SQL Server (Tus 19 modelos)
    try {
        const sqlUsers = await sqlDb.usuarios.findMany(); // note: in schema it is 'Usuarios', and model is named 'Usuarios' in PascalCase/plural. Let's make sure the client supports it as 'usuarios' (Prisma camelCases it by default).
        console.log(`✅ SQL Server connected successfully! Found ${sqlUsers.length} users.`);
    } catch (err) {
        console.error("SQL Server connection failed:", err);
    }

    // Consulta a MongoDB (Tus colecciones autogeneradas)
    try {
        const mongoLogs = await mongoDb.eventoInicioSesion.findMany(); // in mongodb schema we have 'eventoInicioSesion', Prisma camelCases it.
        console.log(`✅ MongoDB connected successfully! Found ${mongoLogs.length} login event logs.`);
    } catch (err) {
        console.error("MongoDB connection failed:", err);
    }
}

testConnections();

