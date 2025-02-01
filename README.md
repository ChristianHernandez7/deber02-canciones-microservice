# Microservicio CRUD de Canciones

## Descripción
Este proyecto es un microservicio para la gestión de canciones, permitiendo operaciones CRUD (Crear, Leer, Actualizar y Eliminar). Está desarrollado con **NestJS** en el backend y utiliza **Supabase** como base de datos PostgreSQL. El microservicio está desplegado en **Google Cloud Run** y se ejecuta en un contenedor Docker.

## Tecnologías Utilizadas
- **Backend**: NestJS (TypeScript)
- **Base de datos**: PostgreSQL en Supabase
- **ORM**: TypeORM
- **Contenerización**: Docker
- **Despliegue en la nube**: Google Cloud Run
- **Pruebas**: Postman

## Instalación y Configuración
### Requisitos Previos
- Node.js y npm instalados
- Docker instalado (para despliegue local)
- Cuenta en Google Cloud (para despliegue en la nube)

### Instalación del Proyecto
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar las variables de entorno creando un archivo `.env`:
   ```plaintext
   DATABASE_URL=postgresql://usuario:contraseña@host:puerto/base_de_datos
   ```

## Uso
### Ejecutar en Local
1. Iniciar el servidor:
   ```bash
   npm run start
   ```
2. Acceder a la API en `http://localhost:5000`

### Ejecutar con Docker
1. Construir la imagen Docker:
   ```bash
   docker build -t backend-songs .
   ```
2. Ejecutar el contenedor:
   ```bash
   docker run -p 5000:5000 backend-songs
   ```

### Despliegue en Google Cloud Run
1. Subir la imagen a Docker Hub:
   ```bash
   docker push tu-usuario/backend-songs:latest
   ```
2. Desplegar en Google Cloud Run:
   ```bash
   gcloud run deploy backend-songs \
   --image=docker.io/tu-usuario/backend-songs:latest \
   --platform=managed \
   --region=us-central1 \
   --allow-unauthenticated \
   --port=5000 \
   --set-env-vars=DATABASE_URL="postgresql://usuario:contraseña@host:puerto/base_de_datos"
   ```

## Endpoints de la API
| Método | Endpoint | Descripción |
|--------|---------|-------------|
| GET | `https://backend-songs-service-341898809698.us-central1.run.app/songs` | Obtener todas las canciones |
| GET | `https://backend-songs-service-341898809698.us-central1.run.app/songs/:id` | Obtener una canción por ID |
| POST | `https://backend-songs-service-341898809698.us-central1.run.app/songs` | Crear una nueva canción |
| PUT | `https://backend-songs-service-341898809698.us-central1.run.app/songs/:id` | Actualizar una canción |
| DELETE | `https://backend-songs-service-341898809698.us-central1.run.app/songs/:id` | Eliminar una canción |

## Contacto
Para más información o consultas, contáctame a mi correo electrónico christian.hernandez.14@outlook.com.
