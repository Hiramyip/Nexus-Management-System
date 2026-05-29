import { useState } from "react";
import { Upload, Save, Edit2, Check, Eye } from "lucide-react";
import { useTheme } from "../contexts/theme-context";

interface ActividadesRealizadas {
  barridoManual: boolean;
  corteZacate: boolean;
  pepenaBAsura: boolean;
  levantamientoBasura: boolean;
  levantamientoEscombro: boolean;
  limpiezaTerreno: boolean;
  levantamientoRamas: boolean;
}

interface ReporteData {
  id: string;
  fecha: string;
  noCuadrilla: string;
  ubicacion: string;
  actividades: ActividadesRealizadas;
  tipo: string;
  folio?: string;
  ventanilla?: string;
  metrosLineales: number;
  metrosCuadrados: number;
  metrosCubicos: number;
  pesoKg: number;
}

const TIPOS = [
  "Oficios", "CIGA", "EntregaObras", "PCT", "Descacharrizacion",
  "TiraderosGestionAmbiental", "Escuelas", "Puentes", "Panteones",
  "ProgramacionDiaria", "EmpleoColonia", "ConsejoParticipacionSocial",
  "TiraderosInspeccion", "PeticionDirecta", "EventoEspecial",
];

const ACTIVIDADES_LABELS = {
  barridoManual: "Barrido Manual",
  corteZacate: "Corte de Zacate",
  pepenaBAsura: "Pepena de Basura",
  levantamientoBasura: "Levantamiento de Basura",
  levantamientoEscombro: "Levantamiento de Escombro",
  limpiezaTerreno: "Limpieza de Terreno",
  levantamientoRamas: "Levantamiento de Ramas",
};

const VENTANILLAS_CIGA = [
  "Limpieza de Calle",
  "Descacharrizacion",
  "Tiradero Clandestino",
  "Levantamiento de Animales Muertos",
];

const API_UPLOAD_URL = `${import.meta.env.VITE_API_URL}/api/sql/transaccionesExcel/upload`;
const API_BULK_URL = `${import.meta.env.VITE_API_URL}/api/sql/captura/bulk`;

export function CapturaReportes({ canEdit }: { canEdit: boolean }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [, setFile] = useState<File | null>(null);
  const [reportesData, setReportesData] = useState<ReporteData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingRow, setEditingRow] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState(false);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setIsLoading(true);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // Mandamos el archivo al backend de Python
      const response = await fetch(API_UPLOAD_URL, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        const msg = errData.error || errData.detail || "Error al procesar el archivo Excel.";
        throw new Error(msg);
      }

      const data = await response.json();
      // El backend de Python retorna directamente la lista mapeada
      setReportesData(data);
      
    } catch (error: any) {
      console.error("Error en procesador Python:", error);
      alert(error.message || "Error de red al subir el documento.");
      setFile(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateField = (id: string, field: keyof ReporteData, value: any) => {
    setReportesData((prev) =>
      prev.map((reporte) => (reporte.id === id ? { ...reporte, [field]: value } : reporte))
    );
  };

  const handleUpdateActividad = (id: string, actividad: keyof ActividadesRealizadas, value: boolean) => {
    setReportesData((prev) =>
      prev.map((reporte) =>
        reporte.id === id
          ? { ...reporte, actividades: { ...reporte.actividades, [actividad]: value } }
          : reporte
      )
    );
  };

  const handleConfirmarCaptura = async () => {
    if (!canEdit) {
      alert("No tienes permisos para realizar esta acción");
      return;
    }

    setIsLoading(true);

    try {
      // Enviar datos en batches para evitar el límite de 10MB de Render
      const BATCH_SIZE = 50;
      const totalBatches = Math.ceil(reportesData.length / BATCH_SIZE);
      let successCount = 0;
      let errorCount = 0;

      for (let i = 0; i < totalBatches; i++) {
        const start = i * BATCH_SIZE;
        const end = Math.min(start + BATCH_SIZE, reportesData.length);
        const batch = reportesData.slice(start, end);

        try {
          const response = await fetch(API_BULK_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(batch),
          });

          if (!response.ok) {
            const errData = await response.json().catch(() => ({}));
            throw new Error(errData.error || `Error al guardar batch ${i + 1}/${totalBatches}`);
          }

          successCount += batch.length;
        } catch (error: any) {
          console.error(`Error en batch ${i + 1}/${totalBatches}:`, error);
          errorCount += batch.length;
          // Continuar con el siguiente batch aunque falle este
        }
      }

      if (errorCount > 0) {
        alert(`Guardado parcial: ${successCount} registros exitosos, ${errorCount} fallidos.`);
      } else {
        setSuccessMessage(true);
        setTimeout(() => {
          setReportesData([]);
          setFile(null);
          setSuccessMessage(false);
        }, 2000);
      }
    } catch (error: any) {
      console.error("Error en Node.js Bulk Insert:", error);
      alert(error.message || "Error al guardar los registros en la base de datos.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelar = () => {
    if (confirm("¿Estás seguro de cancelar? Se perderán los datos cargados.")) {
      setReportesData([]);
      setFile(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 flex flex-col items-center gap-3 shadow-lg" style={{ minWidth: 280 }}>
            <div className="inline-block w-12 h-12 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: '#C09447', borderTopColor: 'transparent' }} />
            <div className="text-center">
              <div className="font-medium" style={{ color: isDark ? '#D4A574' : '#6B1D3E' }}>{reportesData.length > 0 ? 'Subiendo y guardando reportes...' : 'Procesando archivo...'}</div>
              <div className="text-sm text-gray-500">Por favor espera — no cierres ni naveges hasta completar.</div>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl mb-2" style={{ color: "#6B1D3E" }}>Captura de Reportes</h3>
        <p className="text-gray-600">
          {canEdit ? "Sube un archivo Excel para procesar y capturar reportes" : "Solo tienes permisos de lectura"}
        </p>
      </div>

      {successMessage && (
        <div className="mb-6 p-4 rounded-lg text-white flex items-center gap-3" style={{ backgroundColor: "#0D5036" }}>
          <Check size={24} />
          <span>¡Lote de reportes insertado y registrado correctamente en SQL Server!</span>
        </div>
      )}

      {reportesData.length === 0 && canEdit && (
        <div className={`rounded-lg shadow-sm p-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-xl mx-auto">
            <div className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors`} style={{ borderColor: isDark ? "#D4A574" : "#C09447" }}>
              <Upload size={48} className="mx-auto mb-4" style={{ color: isDark ? "#D4A574" : "#C09447" }} />
              <h4 className="text-lg mb-2" style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>Cargar Archivo Excel</h4>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Selecciona un archivo .xlsx o .xls para procesar</p>
              <label htmlFor="file-upload" className="inline-block px-6 py-2 text-white rounded-lg cursor-pointer font-medium text-sm" style={{ backgroundColor: "#0D5036" }}>
                Seleccionar Archivo
              </label>
              <input id="file-upload" type="file" accept=".xlsx,.xls" onChange={handleFileUpload} className="hidden" />
            </div>
            {isLoading && (
              <div className="mt-6 text-center">
                <div className="inline-block w-8 h-8 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: "#C09447", borderTopColor: "transparent" }} />
                <p className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Procesando archivo mediante API Worker...</p>
              </div>
            )}
          </div>
        </div>
      )}

      {reportesData.length === 0 && !canEdit && (
        <div className={`rounded-lg shadow-sm p-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-xl mx-auto text-center">
            <Eye size={48} className="mx-auto mb-4 text-gray-400" />
            <h4 className="text-lg mb-2" style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>Sin permisos de captura</h4>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>No tienes privilegios para inyectar archivos Excel al sistema.</p>
          </div>
        </div>
      )}

      {reportesData.length > 0 && (
        <div className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className="text-lg" style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>Datos Procesados ({reportesData.length} registros)</h4>
              <p className="text-sm text-gray-500">Revisa la información estructurada antes de guardarla permanentemente</p>
            </div>
            {canEdit && (
              <div className="flex gap-3">
                <button onClick={handleCancelar} className={`px-6 py-2 border rounded-lg text-sm ${isDark ? 'border-gray-600 text-gray-300' : 'border-gray-300'}`}>
                  Cancelar
                </button>
                <button onClick={handleConfirmarCaptura} disabled={isLoading} className="px-6 py-2 text-white rounded-lg flex items-center gap-2 text-sm" style={{ backgroundColor: "#0D5036" }}>
                  <Save size={18} /> Confirmar Captura
                </button>
              </div>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead style={{ backgroundColor: "#6B1D3E" }}>
                <tr>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">Fecha</th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">No. Cuadrilla</th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">Ubicación</th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">Actividades</th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">Tipo</th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">Folio</th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">Ventanilla</th>
                  <th className="px-4 py-3 text-right text-white whitespace-nowrap">M. Lin</th>
                  <th className="px-4 py-3 text-right text-white whitespace-nowrap">M. Cuad</th>
                  <th className="px-4 py-3 text-right text-white whitespace-nowrap">M. Cub</th>
                  <th className="px-4 py-3 text-right text-white whitespace-nowrap">Peso (Kg)</th>
                  {canEdit && <th className="px-4 py-3 text-left text-white">Acciones</th>}
                </tr>
              </thead>
              <tbody className={isDark ? "divide-y divide-gray-700 text-gray-200" : "divide-y divide-gray-200"}>
                {reportesData.map((reporte) => {
                  const isEditing = editingRow === reporte.id;
                  return (
                    <tr key={reporte.id} className={isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"}>
                      <td className="px-4 py-3">
                        {isEditing ? <input type="date" value={reporte.fecha} onChange={(e) => handleUpdateField(reporte.id, "fecha", e.target.value)} className="bg-transparent border border-gray-400 px-1 rounded text-xs" /> : reporte.fecha}
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? <input type="text" value={reporte.noCuadrilla} onChange={(e) => handleUpdateField(reporte.id, "noCuadrilla", e.target.value)} className="bg-transparent border border-gray-400 px-1 rounded text-xs w-16" /> : reporte.noCuadrilla}
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? <input type="text" value={reporte.ubicacion} onChange={(e) => handleUpdateField(reporte.id, "ubicacion", e.target.value)} className="bg-transparent border border-gray-400 px-1 rounded text-xs w-full" /> : reporte.ubicacion}
                      </td>
                      <td className="px-4 py-3">
                        <div className="space-y-1 min-w-[160px]">
                          {Object.entries(ACTIVIDADES_LABELS).map(([key, label]) => (
                            <label key={key} className="flex items-center gap-1 text-xs">
                              <input type="checkbox" checked={reporte.actividades[key as keyof ActividadesRealizadas]} disabled={!isEditing} onChange={(e) => handleUpdateActividad(reporte.id, key as keyof ActividadesRealizadas, e.target.checked)} />
                              <span>{label}</span>
                            </label>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <select value={reporte.tipo} onChange={(e) => handleUpdateField(reporte.id, "tipo", e.target.value)} className="bg-transparent border border-gray-400 text-xs rounded">
                            {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        ) : reporte.tipo}
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? <input type="text" value={reporte.folio || ""} disabled={reporte.tipo !== "Oficios" && reporte.tipo !== "CIGA"} onChange={(e) => handleUpdateField(reporte.id, "folio", e.target.value)} className="bg-transparent border border-gray-400 text-xs w-20" /> : (reporte.folio || "-")}
                      </td>
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <select value={reporte.ventanilla || ""} disabled={reporte.tipo !== "CIGA"} onChange={(e) => handleUpdateField(reporte.id, "ventanilla", e.target.value)} className="bg-transparent border border-gray-400 text-xs">
                            <option value="">Selecciona</option>
                            {VENTANILLAS_CIGA.map((v) => <option key={v} value={v}>{v}</option>)}
                          </select>
                        ) : (reporte.ventanilla || "-")}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {isEditing ? <input type="number" value={reporte.metrosLineales} onChange={(e) => handleUpdateField(reporte.id, "metrosLineales", parseFloat(e.target.value))} className="bg-transparent border border-gray-400 text-xs w-12 text-right" /> : reporte.metrosLineales}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {isEditing ? <input type="number" value={reporte.metrosCuadrados} onChange={(e) => handleUpdateField(reporte.id, "metrosCuadrados", parseFloat(e.target.value))} className="bg-transparent border border-gray-400 text-xs w-12 text-right" /> : reporte.metrosCuadrados}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {isEditing ? <input type="number" value={reporte.metrosCubicos} onChange={(e) => handleUpdateField(reporte.id, "metrosCubicos", parseFloat(e.target.value))} className="bg-transparent border border-gray-400 text-xs w-12 text-right" /> : reporte.metrosCubicos}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {isEditing ? <input type="number" value={reporte.pesoKg} onChange={(e) => handleUpdateField(reporte.id, "pesoKg", parseFloat(e.target.value))} className="bg-transparent border border-gray-400 text-xs w-16 text-right" /> : reporte.pesoKg}
                      </td>
                      {canEdit && (
                        <td className="px-4 py-3">
                          <button onClick={() => setEditingRow(isEditing ? null : reporte.id)} className="p-1 rounded" style={{ color: isEditing ? "#0D5036" : "#C09447" }}>
                            {isEditing ? <Check size={16} /> : <Edit2 size={16} />}
                          </button>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}