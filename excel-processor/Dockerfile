FROM python:3.11-slim

WORKDIR /app

# Instalar dependencias esenciales del sistema por si las librerías de Python las requieren
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    g++ \
    && rm -rf /var/lib/apt/lists/*

# CAMBIADO: Apunta a la subcarpeta porque el contexto ahora es la raíz
COPY excel-processor/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# CAMBIADO: Copia solo el contenido de la subcarpeta del procesador de excel
COPY excel-processor/ .

EXPOSE 8001

# Mantenemos tu comando original para que corra Uvicorn en el puerto 8001
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8001", "--reload"]