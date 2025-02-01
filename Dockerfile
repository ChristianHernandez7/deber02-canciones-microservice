# Etapa 1: Construcción
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY .env .env
RUN npm run build

# Etapa 2: Producción
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
COPY .env .env
RUN npm install --only=production
EXPOSE 5000
CMD ["node", "dist/main"]