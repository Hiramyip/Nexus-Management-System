from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from openpyxl import load_workbook
import pandas as pd
import io
import uuid
import math
import datetime
import unicodedata


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

TIPO_ALIASES = {
    "eventosespeciales": "eventoespecial",
    "peticionesdirectas": "peticiondirecta",
}


def normalize_text(value):
    if value is None:
        return ""
    text = str(value).strip().lower()
    text = unicodedata.normalize('NFKD', text)
    text = ''.join(char for char in text if not unicodedata.combining(char))
    return ''.join(ch for ch in text if ch.isalnum())


def resolve_report_type(raw_name, fallback):
    candidate = normalize_text(raw_name)
    if candidate in TIPO_ALIASES:
        return TIPO_ALIASES[candidate]
    if candidate in TIPOS_VALIDOS:
        return candidate
    for value in TIPOS_VALIDOS:
        if normalize_text(value) == candidate or candidate.startswith(normalize_text(value)):
            return value
    return fallback

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


def is_meaningful_location(val):
    text = clean_str(val)
    return bool(text) and not clean_bool(val)


def has_meaningful_report_data(row):
    if row is None:
        return False

    values = [str(v).strip() for v in row if pd.notna(v) and str(v).strip()]
    if not values:
        return False

    # Skip schematic/template rows that are only headings, totals, or repeated check marks.
    placeholder_tokens = {
        'cuadrilla', 'ubicación', 'ubicacion', 'descripción', 'descripcion',
        'solicitó', 'solicito', 'barrido manual', 'área', 'm3', 'peso',
        'total', 'totales', 'acumulado', 'bm', 'cz', 'pb', 'lb', 'le', 'lt', 'lm', 'la'
    }
    normalized_values = {normalize_text(v) for v in values}
    if normalized_values & placeholder_tokens:
        # These are template labels, not real report records.
        return False

    metrics = [
        clean_val(row.get('metros lineales') or row.get('metro lineal') or row.get('m. lineales') or row.get('metroslineales')),
        clean_val(row.get('metros cuadrados') or row.get('metro cuadrado') or row.get('m. cuadrados') or row.get('metroscuadrados')),
        clean_val(row.get('metros cubicos') or row.get('metro cubico') or row.get('m. cubicos') or row.get('metroscubicos') or row.get('metros cúbicos') or row.get('metros cúbico')),
        clean_val(row.get('peso (kg)') or row.get('peso') or row.get('pesokg')),
    ]
    if any(m > 0 for m in metrics):
        return True

    # If the row contains a real description/location/folio, keep it.
    text_fields = [
        clean_str(row.get('ubicacion') or row.get('ubicación') or row.get('direccion') or row.get('dirección')),
        clean_str(row.get('descripcion') or row.get('descripción')),
        clean_str(row.get('folio')),
        clean_str(row.get('ventanilla')),
    ]
    return any(text_fields)

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
        workbook = load_workbook(io.BytesIO(contents), data_only=False)
        result_reports = []

        for sheet in workbook.worksheets:
            tipo_hoja = resolve_report_type(sheet.title, "oficios")
            rows = list(sheet.iter_rows(values_only=False))

            for r_index, row in enumerate(rows[4:], start=5):
                values = [cell.value for cell in row]
                if not any(v is not None and str(v).strip() not in ('', '✓') for v in values):
                    continue

                no_cuadrilla = clean_str(values[1]) if len(values) > 1 else 'C-001'
                ubicacion = clean_str(values[2]) if len(values) > 2 and is_meaningful_location(values[2]) else ''
                if not ubicacion and len(values) > 3 and is_meaningful_location(values[3]):
                    ubicacion = clean_str(values[3])

                actividades = {
                    "barridoManual": clean_bool(values[3]) if len(values) > 3 else False,
                    "corteZacate": clean_bool(values[4]) if len(values) > 4 else False,
                    "pepenaBAsura": clean_bool(values[5]) if len(values) > 5 else False,
                    "levantamientoBasura": clean_bool(values[6]) if len(values) > 6 else False,
                    "levantamientoEscombro": clean_bool(values[7]) if len(values) > 7 else False,
                    "limpiezaTerreno": clean_bool(values[8]) if len(values) > 8 else False,
                    "levantamientoRamas": clean_bool(values[9]) if len(values) > 9 else False,
                }
                if not any(actividades.values()):
                    actividades['barridoManual'] = True

                metros_lineales = clean_val(values[12]) if len(values) > 12 else 0
                metros_cuadrados = clean_val(values[13]) if len(values) > 13 else 0
                metros_cubicos = clean_val(values[14]) if len(values) > 14 else 0
                peso_kg = clean_val(values[15]) if len(values) > 15 else 0

                if not any([metros_lineales, metros_cuadrados, metros_cubicos, peso_kg]) and not is_meaningful_location(ubicacion):
                    continue

                result_reports.append({
                    "id": str(uuid.uuid4()),
                    "fecha": datetime.date.today().strftime("%Y-%m-%d"),
                    "noCuadrilla": no_cuadrilla or 'C-001',
                    "ubicacion": ubicacion or 'Sin Ubicación',
                    "actividades": actividades,
                    "tipo": tipo_hoja,
                    "folio": None,
                    "ventanilla": None,
                    "metrosLineales": int(metros_lineales),
                    "metrosCuadrados": int(metros_cuadrados),
                    "metrosCubicos": float(metros_cubicos),
                    "pesoKg": float(peso_kg),
                })

        return result_reports

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error procesando el archivo Excel: {str(e)}")