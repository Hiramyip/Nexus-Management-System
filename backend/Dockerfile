FROM node:22-alpine

WORKDIR /app

COPY backend/package.json ./
RUN npm install

# Copiamos el código fuente del backend y la configuración de Prisma
COPY backend/ ./
COPY prisma ./prisma

EXPOSE 8000

# Genera clientes Prisma en arranque para que Render pueda inyectar la URL de conexión
CMD npx prisma@6 generate --schema=prisma/sqlserver/schema.prisma && \
    npx prisma@6 generate --schema=prisma/mongodb/schema.prisma && \
    npm start