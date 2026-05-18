from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Creamos la instancia que busca Uvicorn (app)
app = FastAPI(
    title="Nexus Manager - Excel Processor",
    version="1.0.0"
)

# Configuración básica de CORS por si tu backend TS se comunica con este worker
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {
        "status": "online",
        "message": "Procesador de Excel de Nexus Manager activo y escuchando."
    }

# Aquí abajo irán tus rutas para procesar los archivos de Excel más adelante
# @app.post("/upload-excel")
# def process_excel():
#     pass