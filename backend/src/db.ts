import path from 'path';
import dotenv from 'dotenv';
dotenv.config();
dotenv.config({ path: path.resolve(process.cwd(), '../.env') });

// CORREGIDO: Ahora sube un solo nivel (de src/ a /app/) y entra a prisma
import { PrismaClient as SqlClient } from '../prisma/generated/prisma';
import { PrismaClient as MongoClient } from '../prisma/mongodb/client';

export const sqlDb = new SqlClient();
export const mongoDb = new MongoClient();