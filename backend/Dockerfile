FROM node:22-alpine

WORKDIR /app

COPY backend/package.json .
RUN npm install

# Copiamos el código y la carpeta prisma para tenerlos listos
COPY backend/ .
COPY prisma ./prisma

EXPOSE 8000

# EL CAMBIO CLAVE: Forzamos la generación de Prisma justo antes de iniciar la app
CMD npx prisma@6 generate --schema=prisma/sqlserver/schema.prisma && \
    npx prisma@6 generate --schema=prisma/mongodb/schema.prisma && \
    npm start