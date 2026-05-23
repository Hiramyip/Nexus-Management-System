FROM node:20-alpine

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

# Copy Prisma schemas from parent directory
COPY ../prisma ./prisma

# Generate Prisma clients for both SQL Server and MongoDB
RUN npx prisma generate --schema=prisma/sqlserver/schema.prisma
RUN npx prisma generate --schema=prisma/mongodb/schema.prisma

EXPOSE 8000

CMD ["npm", "start"]