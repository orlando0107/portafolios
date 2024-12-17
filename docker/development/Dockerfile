# syntax=docker.io/docker/dockerfile:1

# Usa una imagen base de Node.js adecuada
FROM node:23.4-alpine3.21 AS base

# Instala dependencias necesarias del sistema
RUN apk add --no-cache libc6-compat

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de dependencias
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

# Instala las dependencias (incluidas las de desarrollo)
RUN \
  if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm install; \
  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm install; \
  else echo "Lockfile not found." && exit 1; \
  fi

# Copia el resto del código fuente
COPY . .

# Configurar variables de entorno predeterminadas
ENV NODE_ENV=development
ENV PORT=3000

# Exponer el puerto para desarrollo
EXPOSE 3000

# Comando para desarrollo (habilita hot-reloading)
CMD ["npm", "run", "dev"]
