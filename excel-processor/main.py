from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import io
import uuid
import math
import datetime


app = FastAPI(
    title="Nexus Manager - Excel Processor",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

TIPOS_VALIDOS = {
    "oficios", "ciga", "entregaobras", "pct", "descacharrizacion",
    "tiraderosgestionambiental", "escuelas", "puentes", "panteones",
    "programaciondiaria", "empleocolonia", "consejoparticipacionsocial",
    "tiraderosinspeccion", "peticiondirecta", "eventoespecial"
}

def clean_val(val, default=0):
    if pd.isna(val) or val is None:
        return default
    try:
        if isinstance(val, (int, float)):
            if math.isnan(val):
                return default
            return val
        return float(str(val).strip())
    except:
        return default

def clean_str(val, default=""):
    if pd.isna(val) or val is None:
        return default
    return str(val).strip()

def clean_bool(val):
    if pd.isna(val) or val is None:
        return False
    s = str(val).strip().lower()
    return s in ("true", "1", "yes", "sí", "si", "x", "✓", "checked")

@app.get("/")
def read_root():
    return {
        "status": "online",
        "message": "Procesador de Excel de Nexus Manager activo y escuchando."
    }

@app.post("/process")
async def process_excel(file: UploadFile = File(...)):
    if not file.filename.endswith(('.xlsx', '.xls')):
        raise HTTPException(status_code=400, detail="El archivo debe ser un Excel (.xlsx o .xls)")

    try:
        contents = await file.read()
        excel_file = io.BytesIO(contents)
        
        # Cargar todas las hojas
        xls = pd.ExcelFile(excel_file)
        result_reports = []

        for sheet_name in xls.sheet_names:
            df = pd.read_excel(xls, sheet_name=sheet_name)
            
            # Limpiar nombres de columnas para facilitar emparejamiento
            df.columns = [str(c).strip().lower() for c in df.columns]
            
            # Determinar tipo por el nombre de la hoja
            sheet_clean = sheet_name.strip().lower()
            tipo_hoja = "Oficios" # Default
            for t in TIPOS_VALIDOS:
                if t in sheet_clean or sheet_clean in t:
                    # Mapear a la versión Capitalizada correcta
                    tipo_hoja = sheet_name.strip()
                    break

            for idx, row in df.iterrows():
                # Saltar filas vacías
                if row.isna().all():
                    continue

                # Extraer fecha
                fecha_val = ""
                for col in ["fecha", "date"]:
                    if col in row:
                        val = row[col]
                        if pd.notna(val):
                            if isinstance(val, (datetime.datetime, datetime.date)):
                                fecha_val = val.strftime("%Y-%m-%d")
                            else:
                                fecha_val = str(val).strip()
                if not fecha_val:
                    fecha_val = datetime.date.today().strftime("%Y-%m-%d")

                # Extraer cuadrilla
                no_cuadrilla = "C-001"
                for col in ["cuadrilla", "no. cuadrilla", "no_cuadrilla", "grupo", "encargado"]:
                    if col in row and pd.notna(row[col]):
                        no_cuadrilla = str(row[col]).strip()

                # Extraer ubicacion
                ubicacion = ""
                for col in ["ubicacion", "ubicación", "direccion", "dirección"]:
                    if col in row and pd.notna(row[col]):
                        ubicacion = str(row[col]).strip()

                # Actividades
                actividades = {
                    "barridoManual": clean_bool(row.get("barrido manual") or row.get("barridomanual")),
                    "corteZacate": clean_bool(row.get("corte de zacate") or row.get("cortezacate") or row.get("zacate")),
                    "pepenaBAsura": clean_bool(row.get("pepena de basura") or row.get("pepenabasura")),
                    "levantamientoBasura": clean_bool(row.get("levantamiento de basura") or row.get("levantamientobasura")),
                    "levantamientoEscombro": clean_bool(row.get("levantamiento de escombro") or row.get("levantamientoescombro")),
                    "limpiezaTerreno": clean_bool(row.get("limpieza de terreno") or row.get("limpiezaterreno")),
                    "levantamientoRamas": clean_bool(row.get("levantamiento de ramas") or row.get("levantamientoramas")),
                }

                # Si no se detectaron actividades, marcar barrido manual por defecto
                if not any(actividades.values()):
                    actividades["barridoManual"] = True

                # Metros y peso
                metros_lineales = clean_val(row.get("metros lineales") or row.get("metro lineal") or row.get("m. lineales") or row.get("metroslineales"))
                metros_cuadrados = clean_val(row.get("metros cuadrados") or row.get("metro cuadrado") or row.get("m. cuadrados") or row.get("metroscuadrados"))
                metros_cubicos = clean_val(row.get("metros cubicos") or row.get("metro cubico") or row.get("m. cubicos") or row.get("metroscubicos") or row.get("metros cúbicos") or row.get("metros cúbico"))
                peso_kg = clean_val(row.get("peso (kg)") or row.get("peso") or row.get("pesokg"))

                # Folio y ventanilla
                folio = clean_str(row.get("folio"))
                ventanilla = clean_str(row.get("ventanilla"))

                # Tipo de reporte (si viene en la fila, lo sobreescribimos)
                tipo_final = tipo_hoja
                if "tipo" in row and pd.notna(row["tipo"]):
                    val_tipo = str(row["tipo"]).strip()
                    for t in TIPOS_VALIDOS:
                        if t == val_tipo.lower():
                            tipo_final = val_tipo
                            break

                result_reports.append({
                    "id": str(uuid.uuid4()),
                    "fecha": fecha_val,
                    "noCuadrilla": no_cuadrilla,
                    "ubicacion": ubicacion or "Sin Ubicación",
                    "actividades": actividades,
                    "tipo": tipo_final,
                    "folio": folio if folio else None,
                    "ventanilla": ventanilla if ventanilla else None,
                    "metrosLineales": int(metros_lineales),
                    "metrosCuadrados": int(metros_cuadrados),
                    "metrosCubicos": float(metros_cubicos),
                    "pesoKg": float(peso_kg)
                })

        return result_reports

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error procesando el archivo Excel: {str(e)}")