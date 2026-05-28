import { defineConfig, env } from "@prisma/config";

// Evaluamos el objetivo de la base de datos
const isMongo = process.env.PRISMA_TARGET_DB === "mongodb";

export default defineConfig({
  // Selecciona dinámicamente la ruta del esquema
  schema: isMongo
    ? "./prisma/mongodb/schema.prisma"
    : "./prisma/sqlserver/schema.prisma",

  datasource: {
    // Si isMongo es true, usa MONGODB_URL. Si no, usa SQL_SERVER_URL.
    // Usamos env() nativo de Prisma y un string vacío de respaldo para evitar que explote si no se detecta la variable
    url: isMongo
      ? (env("MONGODB_URL") || "")
      : (env("SQL_SERVER_URL") || "")
  }
});
