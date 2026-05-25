FROM node:20-alpine

WORKDIR /app

COPY frontend/package.json .
RUN npm install

COPY prisma ./prisma
COPY frontend/ .

EXPOSE 3000

# Forzamos la generación y arrancamos con el servidor de desarrollo de Vite
CMD npx prisma@6 generate --schema=prisma/sqlserver/schema.prisma && \
    npx prisma@6 generate --schema=prisma/mongodb/schema.prisma && \
    npm run start