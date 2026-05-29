from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import io
import uuid
import math
import datetime
import re


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

# Spanish months mapping
MONTHS_ES = {
    "enero": 1, "febrero": 2, "marzo": 3, "abril": 4, "mayo": 5, "junio": 6,
    "julio": 7, "agosto": 8, "septiembre": 9, "octubre": 10, "noviembre": 11, "diciembre": 12
}

def extract_year_month_from_filename(filename: str):
    now = datetime.date.today()
    year = now.year
    month = now.month
    
    filename_lower = filename.lower()
    for m_name, m_val in MONTHS_ES.items():
        if m_name in filename_lower:
            month = m_val
            break
            
    # Find year (look for 4 digit number starting with 20)
    years = re.findall(r'\b(20\d{2})\b', filename)
    if years:
        year = int(years[0])
        
    return year, month

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

def decide_tipo_from_solicito(solicito_raw: str, default_tipo: str):
    """Decide el tipo de reporte según el texto del campo 'Solicitó'.
    Reglas:
    - Si contiene 'ciga' o 'ventanilla' → 'ciga'
    - Si contiene 'oficio' → 'oficios'
    - Si parece un nombre o contiene títulos (Lic., Licenciado, Sr., Sra.) → 'peticiondirecta'
    - En caso contrario devuelve el tipo por defecto
    """
    if solicito_raw is None:
        return default_tipo
    s = str(solicito_raw).strip()
    if not s:
        return default_tipo
    s_low = s.lower()

    # Priorizar CIGA
    if 'ciga' in s_low or 'ventanilla' in s_low:
        return 'ciga'

    # Priorizar OFICIOS
    if 'oficio' in s_low or 'oficios' in s_low:
        return 'oficios'

    # Detectar títulos formales que probablemente indican petición directa
    if re.search(r'\blic\.?\b|\blicenciado|\bsr\.?\b|\bsra\.?\b|\bprof\.?\b|\bdr\.?\b', s_low):
        return 'peticiondirecta'

    # Si el texto tiene múltiples palabras (probable nombre) y no contiene dígitos ni símbolos
    words = [w for w in re.split(r'\s+', s) if w]
    if len(words) >= 2 and not re.search(r'[0-9@#$/%]', s):
        return 'peticiondirecta'

    return default_tipo
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
        
        # Cargar todas las hojas con pandas
        xls = pd.ExcelFile(excel_file)
        result_reports = []

        # Extraer año y mes del nombre de archivo
        year, month = extract_year_month_from_filename(file.filename)

        for sheet_name in xls.sheet_names:
            # Leer sin cabeceras primero para detectar el layout
            df_raw = pd.read_excel(xls, sheet_name=sheet_name, header=None)
            
            if df_raw.empty:
                continue
                
            # Determinar tipo por el nombre de la hoja
            sheet_clean = sheet_name.strip().lower()
            tipo_hoja = "oficios" # Default
            for t in TIPOS_VALIDOS:
                if t in sheet_clean or sheet_clean in t:
                    tipo_hoja = t
                    break

            # Determinar fecha a nivel de hoja (si el nombre es el día del mes)
            fecha_val = ""
            day_str = sheet_name.strip()
            if day_str.isdigit():
                day = int(day_str)
                try:
                    fecha_val = datetime.date(year, month, day).strftime("%Y-%m-%d")
                except ValueError:
                    pass

            # Buscar fila de cabecera dinámica que contenga la palabra "cuadrilla"
            header_idx = None
            for idx, row in df_raw.iterrows():
                row_str_values = [str(val).strip().lower() for val in row if pd.notna(val)]
                if any("cuadrilla" in val for val in row_str_values):
                    header_idx = idx
                    break

            if header_idx is not None:
                # Caso A: Estructura con cabecera personalizada y sub-actividades abreviadas
                header_row = df_raw.iloc[header_idx]
                
                col_cuadrilla = None
                col_ubicacion = None
                col_solicito = None
                col_folio = None
                col_ventanilla = None
                col_tipo = None
                
                col_m_lineales = None
                col_m_cuadrados = None
                col_m_cubicos = None
                col_peso = None
                
                for c_idx, val in enumerate(header_row):
                    if pd.isna(val):
                        continue
                    val_str = str(val).strip().lower()
                    
                    if "cuadrilla" in val_str or "grupo" in val_str:
                        if col_cuadrilla is None: col_cuadrilla = c_idx
                    elif "ubicacion" in val_str or "ubicación" in val_str or "direccion" in val_str or "dirección" in val_str:
                        if col_ubicacion is None: col_ubicacion = c_idx
                    elif "solicitó" in val_str or "solicito" in val_str:
                        if col_solicito is None: col_solicito = c_idx
                    elif "folio" in val_str:
                        if col_folio is None: col_folio = c_idx
                    elif "ventanilla" in val_str:
                        if col_ventanilla is None: col_ventanilla = c_idx
                    elif "tipo" in val_str:
                        if col_tipo is None: col_tipo = c_idx
                    elif "lineal" in val_str or "lineales" in val_str or "ml" in val_str:
                        if col_m_lineales is None: col_m_lineales = c_idx
                    elif "cuadrado" in val_str or "cuadrados" in val_str or "m2" in val_str or "área" in val_str or "area" in val_str:
                        if col_m_cuadrados is None: col_m_cuadrados = c_idx
                    elif "cubico" in val_str or "cubicos" in val_str or "cúbico" in val_str or "cúbicos" in val_str or "m3" in val_str:
                        if col_m_cubicos is None: col_m_cubicos = c_idx
                    elif "peso" in val_str or "kg" in val_str:
                        if col_peso is None: col_peso = c_idx
                
                has_sub_activities = False
                activity_cols = {}
                if header_idx + 1 < len(df_raw):
                    next_row = df_raw.iloc[header_idx + 1]
                    next_row_clean = [str(v).strip().upper() for v in next_row]
                    if "BM" in next_row_clean or "CZ" in next_row_clean:
                        has_sub_activities = True
                        abbrev_mapping = {
                            "BM": "barridoManual",
                            "CZ": "corteZacate",
                            "PB": "pepenaBAsura",
                            "LB": "levantamientoBasura",
                            "LE": "levantamientoEscombro",
                            "LT": "limpiezaTerreno",
                            "LM": "levantamientoRamas",
                            "LA": "levantamientoRamas",
                        }
                        for c_idx, val in enumerate(next_row):
                            if pd.isna(val): continue
                            val_str = str(val).strip().upper()
                            if val_str in abbrev_mapping:
                                activity_cols[c_idx] = abbrev_mapping[val_str]
                
                data_start_idx = header_idx + 2 if has_sub_activities else header_idx + 1
                
                for idx in range(data_start_idx, len(df_raw)):
                    row = df_raw.iloc[idx]
                    
                    # Saltar filas de totales
                    if col_solicito is not None and pd.notna(row[col_solicito]):
                        if str(row[col_solicito]).strip().lower() in ("total", "totales"):
                            continue
                    if col_cuadrilla is not None and pd.notna(row[col_cuadrilla]):
                        if str(row[col_cuadrilla]).strip().lower() in ("total", "totales"):
                            continue
                    
                    cuadrilla_raw = row[col_cuadrilla] if col_cuadrilla is not None else None
                    ubicacion_raw = row[col_ubicacion] if col_ubicacion is not None else None
                    
                    if pd.isna(cuadrilla_raw) and pd.isna(ubicacion_raw):
                        continue
                        
                    no_cuadrilla = str(cuadrilla_raw).strip() if pd.notna(cuadrilla_raw) else "C-001"
                    if no_cuadrilla.endswith(".0"):
                        no_cuadrilla = no_cuadrilla[:-2]
                        
                    ubicacion = str(ubicacion_raw).strip() if pd.notna(ubicacion_raw) else "Sin Ubicación"
                    
                    row_fecha = fecha_val
                    if not row_fecha:
                        row_fecha = datetime.date.today().strftime("%Y-%m-%d")
                        
                    actividades = {
                        "barridoManual": False,
                        "corteZacate": False,
                        "pepenaBAsura": False,
                        "levantamientoBasura": False,
                        "levantamientoEscombro": False,
                        "limpiezaTerreno": False,
                        "levantamientoRamas": False,
                    }
                    
                    if has_sub_activities:
                        for c_idx, key in activity_cols.items():
                            if clean_bool(row[c_idx]):
                                actividades[key] = True
                    
                    if not any(actividades.values()):
                        actividades["barridoManual"] = True
                        
                    m_lin = clean_val(row[col_m_lineales]) if col_m_lineales is not None else 0
                    m_cua = clean_val(row[col_m_cuadrados]) if col_m_cuadrados is not None else 0
                    m_cub = clean_val(row[col_m_cubicos]) if col_m_cubicos is not None else 0
                    peso = clean_val(row[col_peso]) if col_peso is not None else 0
                    
                    folio = clean_str(row[col_folio]) if col_folio is not None else ""
                    ventanilla = clean_str(row[col_ventanilla]) if col_ventanilla is not None else ""
                    
                    tipo_final = tipo_hoja
                    if col_tipo is not None and pd.notna(row[col_tipo]):
                        val_tipo = str(row[col_tipo]).strip().lower()
                        for t in TIPOS_VALIDOS:
                            if t == val_tipo:
                                tipo_final = t
                                break
                    # Si existe columna "Solicitó", decidir tipo por su contenido
                    if col_solicito is not None and pd.notna(row[col_solicito]):
                        solicito_raw = row[col_solicito]
                        tipo_final = decide_tipo_from_solicito(solicito_raw, tipo_final)
                    
                    result_reports.append({
                        "id": str(uuid.uuid4()),
                        "fecha": row_fecha,
                        "noCuadrilla": no_cuadrilla,
                        "ubicacion": ubicacion,
                        "actividades": actividades,
                        "tipo": tipo_final,
                        "folio": folio if folio else None,
                        "ventanilla": ventanilla if ventanilla else None,
                        "metrosLineales": int(m_lin),
                        "metrosCuadrados": int(m_cua),
                        "metrosCubicos": float(m_cub),
                        "pesoKg": float(peso)
                    })
            else:
                # Caso B: Estructura plana (Format B)
                df = pd.read_excel(xls, sheet_name=sheet_name)
                df.columns = [str(c).strip().lower() for c in df.columns]
                
                for idx, row in df.iterrows():
                    if row.isna().all():
                        continue
                    
                    row_fecha = ""
                    for col in ["fecha", "date"]:
                        if col in row and pd.notna(row[col]):
                            val = row[col]
                            if isinstance(val, (datetime.datetime, datetime.date)):
                                row_fecha = val.strftime("%Y-%m-%d")
                            else:
                                row_fecha = str(val).strip()
                    if not row_fecha:
                        row_fecha = fecha_val or datetime.date.today().strftime("%Y-%m-%d")
                        
                    no_cuadrilla = "C-001"
                    for col in ["cuadrilla", "no. cuadrilla", "no_cuadrilla", "grupo", "encargado"]:
                        if col in row and pd.notna(row[col]):
                            no_cuadrilla = str(row[col]).strip()
                    if no_cuadrilla.endswith(".0"):
                        no_cuadrilla = no_cuadrilla[:-2]
                            
                    ubicacion = "Sin Ubicación"
                    for col in ["ubicacion", "ubicación", "direccion", "dirección"]:
                        if col in row and pd.notna(row[col]):
                            ubicacion = str(row[col]).strip()
                            
                    actividades = {
                        "barridoManual": clean_bool(row.get("barrido manual") or row.get("barridomanual")),
                        "corteZacate": clean_bool(row.get("corte de zacate") or row.get("cortezacate") or row.get("zacate")),
                        "pepenaBAsura": clean_bool(row.get("pepena de basura") or row.get("pepenabasura")),
                        "levantamientoBasura": clean_bool(row.get("levantamiento de basura") or row.get("levantamientobasura")),
                        "levantamientoEscombro": clean_bool(row.get("levantamiento de escombro") or row.get("levantamientoescombro")),
                        "limpiezaTerreno": clean_bool(row.get("limpieza de terreno") or row.get("limpiezaterreno")),
                        "levantamientoRamas": clean_bool(row.get("levantamiento de ramas") or row.get("levantamientoramas")),
                    }
                    if not any(actividades.values()):
                        actividades["barridoManual"] = True
                        
                    m_lin = clean_val(row.get("metros lineales") or row.get("metro lineal") or row.get("m. lineales") or row.get("metroslineales") or row.get("ml"))
                    m_cua = clean_val(row.get("metros cuadrados") or row.get("metro cuadrado") or row.get("m. cuadrados") or row.get("metroscuadrados") or row.get("m2") or row.get("área") or row.get("area"))
                    m_cub = clean_val(row.get("metros cubicos") or row.get("metro cubico") or row.get("m. cubicos") or row.get("metroscubicos") or row.get("metros cúbicos") or row.get("metros cúbico") or row.get("m3"))
                    peso = clean_val(row.get("peso (kg)") or row.get("peso") or row.get("pesokg") or row.get("kg"))
                    
                    folio = clean_str(row.get("folio"))
                    ventanilla = clean_str(row.get("ventanilla"))
                    
                    tipo_final = tipo_hoja
                    if "tipo" in row and pd.notna(row["tipo"]):
                        val_tipo = str(row["tipo"]).strip().lower()
                        for t in TIPOS_VALIDOS:
                            if t == val_tipo:
                                tipo_final = t
                                break
                    # Revisar columna 'solicitó' o 'solicito' en estructura plana
                    solicit_field = None
                    for candidate in ("solicitó", "solicito", "solicito "):
                        if candidate in row and pd.notna(row[candidate]):
                            solicit_field = candidate
                            break
                    if solicit_field is not None:
                        tipo_final = decide_tipo_from_solicito(row[solicit_field], tipo_final)
                    
                    result_reports.append({
                        "id": str(uuid.uuid4()),
                        "fecha": row_fecha,
                        "noCuadrilla": no_cuadrilla,
                        "ubicacion": ubicacion,
                        "actividades": actividades,
                        "tipo": tipo_final,
                        "folio": folio if folio else None,
                        "ventanilla": ventanilla if ventanilla else None,
                        "metrosLineales": int(m_lin),
                        "metrosCuadrados": int(m_cua),
                        "metrosCubicos": float(m_cub),
                        "pesoKg": float(peso)
                    })
                    
        return result_reports

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error procesando el archivo Excel: {str(e)}")
