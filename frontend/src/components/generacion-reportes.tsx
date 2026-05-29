import { useState } from "react";
import { Search, Filter} from "lucide-react";
import { useTheme } from "../contexts/theme-context";

interface ReporteData {
  fecha: string;
  cuadrilla: string;
  ubicacion: string;
  actividades: string[];
  tipo: string;
  folio?: string;
  ventanilla?: string;
  metrosLineales: number;
  metrosCuadrados: number;
  metrosCubicos: number;
  peso: number;
}

// Mapa para transformar el nombre de la UI al slug exacto del endpoint del Backend
const ENDPOINT_MAP: { [key: string]: string } = {
  "Oficios": "oficios",
  "CIGA": "ciga",
  "EntregaObras": "entrega-obras",
  "PCT": "pct",
  "Descacharrizacion": "descacharrizacion",
  "TiraderosGestionAmbiental": "tiraderos-gestion",
  "Escuelas": "escuelas",
  "Puentes": "puentes",
  "Panteones": "panteones",
  "ProgramacionDiaria": "programacion-diaria",
  "EmpleoColonia": "empleo-colonia",
  "ConsejoParticipacionSocial": "consejo-participacion",
  "TiraderosInspeccion": "tiraderos-inspeccion",
  "PeticionDirecta": "peticiones-directas",
  "EventoEspecial": "eventos-especiales"
};

export function GeneracionReportes({ allowedReportTypes }: { allowedReportTypes?: string[]; userRole: string }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const [tipoUbicacion, setTipoUbicacion] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [resultados, setResultados] = useState<ReporteData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const tiposUbicacion = ["Todos", ...Object.keys(ENDPOINT_MAP)];
  const tiposDisponibles = allowedReportTypes && allowedReportTypes.length > 0
      ? tiposUbicacion.filter((tipo) => allowedReportTypes.includes(tipo))
      : tiposUbicacion;

  const isConsultorRole = allowedReportTypes && allowedReportTypes.length > 0;

  const handleBuscar = async () => {
    if (!tipoUbicacion || !fechaInicio || !fechaFin) {
      alert("Por favor completa todos los campos");
      return;
    }

    setIsLoading(true);

    try {
      if (tipoUbicacion === "Todos") {
        // Al seleccionar 'Todos', se llama al endpoint general unificado (ver notas al final)
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/sql/reportes/todos?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
        if (!res.ok) throw new Error("Error obteniendo el consolidado global.");
        const data = await res.json();
        setResultados(data);
      } else {
        // Consumir el endpoint específico de la vista
        const slug = ENDPOINT_MAP[tipoUbicacion];
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/sql/reportes/${slug}?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
        if (!res.ok) throw new Error("Error obteniendo el reporte filtrado.");
        
        const data = await res.json();
        
        // Mapear los nombres de columnas que vienen de las vistas SQL a la interfaz del front
        const mapped: ReporteData[] = data.map((r: any) => ({
          fecha: r.fecha || r.fechaRegistro,
          cuadrilla: r.cuadrilla || r.noCuadrilla || "Sin Especificar",
          ubicacion: r.ubicacion || r.direccion || "Sin dirección",
          actividades: Array.isArray(r.actividades) ? r.actividades : [r.actividadPrincipal || "General"],
          tipo: tipoUbicacion,
          folio: r.folio || undefined,
          ventanilla: r.ventanilla || undefined,
          metrosLineales: parseFloat(r.metrosLineales || 0),
          metrosCuadrados: parseFloat(r.metrosCuadrados || 0),
          metrosCubicos: parseFloat(r.metrosCubicos || 0),
          peso: parseFloat(r.peso || r.pesoKg || 0)
        }));
        
        setResultados(mapped);
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Error al conectar con los endpoints de las vistas.");
    } finally {
      setIsLoading(false);
    }
  };

  const calcularSumatorias = (datos: ReporteData[]) => {
    if (datos.length === 0) return null;
    return {
      metrosLineales: datos.reduce((sum, r) => sum + r.metrosLineales, 0),
      metrosCuadrados: datos.reduce((sum, r) => sum + r.metrosCuadrados, 0),
      metrosCubicos: datos.reduce((sum, r) => sum + r.metrosCubicos, 0),
      peso: datos.reduce((sum, r) => sum + r.peso, 0),
    };
  };

  const sumatorias = resultados ? calcularSumatorias(resultados) : null;

  const resultadosPorTipo = () => {
    if (!resultados || tipoUbicacion !== "Todos") return null;
    const grupos: { [key: string]: ReporteData[] } = {};
    resultados.forEach((r) => {
      if (!grupos[r.tipo]) grupos[r.tipo] = [];
      grupos[r.tipo].push(r);
    });
    return Object.entries(grupos).map(([tipo, datos]) => ({
      tipo, datos, sumatorias: calcularSumatorias(datos),
    }));
  };

  const resultadosCIGAPorVentanilla = () => {
    if (!resultados || tipoUbicacion !== "CIGA") return null;
    const grupos: { [key: string]: ReporteData[] } = {};
    resultados.forEach((r) => {
      const ventanilla = r.ventanilla || "Sin Ventanilla";
      if (!grupos[ventanilla]) grupos[ventanilla] = [];
      grupos[ventanilla].push(r);
    });
    return Object.entries(grupos).map(([ventanilla, datos]) => ({
      ventanilla, datos, sumatorias: calcularSumatorias(datos),
    }));
  };

  return (
    <div>
      {isConsultorRole && (
        <div className="mb-6 p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: "#FFF9E6", borderLeft: "4px solid #C09447" }}>
          <Filter size={20} style={{ color: "#C09447" }} />
          <p style={{ color: "#6B1D3E" }}>
            <strong>Vista filtrada:</strong> Solo puedes generar reportes de tipo <strong>{allowedReportTypes.join(", ")}</strong>
          </p>
        </div>
      )}

      {/* Formulario */}
      <div className={`rounded-lg shadow-sm p-6 mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <h3 className="text-xl mb-4 flex items-center gap-2" style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>
          <Search size={24} /> Parámetros de Búsqueda de Vistas SQL
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm mb-2 font-medium">Tipo de Ubicación / Tabla</label>
            <select value={tipoUbicacion} onChange={(e) => setTipoUbicacion(e.target.value)} className={`w-full px-4 py-2 border rounded-lg ${isDark ? 'bg-gray-700 text-white' : ''}`}>
              <option value="">Selecciona un tipo</option>
              {tiposDisponibles.map((tipo) => <option key={tipo} value={tipo}>{tipo}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm mb-2 font-medium">Fecha Inicio</label>
            <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} className={`w-full px-4 py-2 border rounded-lg ${isDark ? 'bg-gray-700 text-white' : ''}`} />
          </div>
          <div>
            <label className="block text-sm mb-2 font-medium">Fecha Fin</label>
            <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} className={`w-full px-4 py-2 border rounded-lg ${isDark ? 'bg-gray-700 text-white' : ''}`} />
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button onClick={handleBuscar} disabled={isLoading || !tipoUbicacion || !fechaInicio || !fechaFin} className="px-6 py-2 text-white rounded-lg flex items-center gap-2 font-medium text-sm disabled:opacity-40" style={{ backgroundColor: "#0D5036" }}>
            {isLoading ? "Consultando..." : "Generar Reporte"}
          </button>
        </div>
      </div>

      {/* Resultados */}
      {resultados && sumatorias && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <p className="text-xs text-gray-400">Metros Lineales Totales</p>
              <p className="text-2xl font-bold" style={{ color: "#6B1D3E" }}>{sumatorias.metrosLineales.toFixed(2)} ml</p>
            </div>
            <div className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <p className="text-xs text-gray-400">Metros Cuadrados Totales</p>
              <p className="text-2xl font-bold" style={{ color: "#C09447" }}>{sumatorias.metrosCuadrados.toFixed(2)} m²</p>
            </div>
            <div className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <p className="text-xs text-gray-400">Metros Cúbicos Totales</p>
              <p className="text-2xl font-bold" style={{ color: "#0D5036" }}>{sumatorias.metrosCubicos.toFixed(2)} m³</p>
            </div>
            <div className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <p className="text-xs text-gray-400">Peso Total Acumulado</p>
              <p className="text-2xl font-bold" style={{ color: "#6B1D3E" }}>{sumatorias.peso.toLocaleString()} kg</p>
            </div>
          </div>

          {tipoUbicacion === "CIGA" && resultadosCIGAPorVentanilla() ? (
            <div className="space-y-6">
              {resultadosCIGAPorVentanilla()!.map(({ ventanilla, datos }) => (
                <div key={ventanilla} className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <h4 className="text-base font-semibold mb-3" style={{ color: "#6B1D3E" }}>{ventanilla} ({datos.length})</h4>
                  <TablaReportes datos={datos} mostrarFolio={true} mostrarVentanilla={true} />
                </div>
              ))}
            </div>
          ) : tipoUbicacion === "Todos" && resultadosPorTipo() ? (
            <div className="space-y-6">
              {resultadosPorTipo()!.map(({ tipo, datos }) => (
                <div key={tipo} className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <h4 className="text-base font-semibold mb-3" style={{ color: "#6B1D3E" }}>{tipo} ({datos.length})</h4>
                  <TablaReportes datos={datos} mostrarFolio={tipo === "Oficios" || tipo === "CIGA"} mostrarVentanilla={tipo === "CIGA"} />
                </div>
              ))}
            </div>
          ) : (
            <div className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <TablaReportes datos={resultados} mostrarFolio={resultados.some(r => r.folio)} mostrarVentanilla={resultados.some(r => r.ventanilla)} mostrarTotales={true} sumatorias={sumatorias} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

function TablaReportes({ datos, mostrarFolio, mostrarVentanilla = false, mostrarTotales = false, sumatorias = null }: { datos: ReporteData[]; mostrarFolio: boolean; mostrarVentanilla?: boolean; mostrarTotales?: boolean; sumatorias?: any }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs sm:text-sm min-w-[900px]">
        <thead style={{ backgroundColor: "#6B1D3E" }}>
          <tr>
            <th className="px-3 py-2 text-left text-white">FECHA</th>
            <th className="px-3 py-2 text-left text-white">CUADRILLA</th>
            <th className="px-3 py-2 text-left text-white">UBICACIÓN</th>
            <th className="px-3 py-2 text-left text-white">ACTIVIDADES</th>
            <th className="px-3 py-2 text-left text-white">TIPO</th>
            {mostrarFolio && <th className="px-3 py-2 text-left text-white">FOLIO</th>}
            {mostrarVentanilla && <th className="px-3 py-2 text-left text-white">VENTANILLA</th>}
            <th className="px-3 py-2 text-right text-white">M. LIN</th>
            <th className="px-3 py-2 text-right text-white">M. CUAD</th>
            <th className="px-3 py-2 text-right text-white">M. CUB</th>
            <th className="px-3 py-2 text-right text-white">PESO (KG)</th>
          </tr>
        </thead>
        <tbody className={isDark ? "divide-y divide-gray-700 text-gray-200" : "divide-y divide-gray-200"}>
          {datos.map((reporte, index) => (
            <tr key={index} className={isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"}>
              <td className="px-3 py-2 whitespace-nowrap">{new Date(reporte.fecha).toLocaleDateString("es-MX")}</td>
              <td className="px-3 py-2">{reporte.cuadrilla}</td>
              <td className="px-3 py-2">{reporte.ubicacion}</td>
              <td className="px-3 py-2">
                <div className="flex flex-wrap gap-1">
                  {reporte.actividades.map((act, i) => <span key={i} className="px-1.5 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs">{act}</span>)}
                </div>
              </td>
              <td className="px-3 py-2"><span className="px-2 py-0.5 bg-green-100 text-green-800 rounded-full text-xs">{reporte.tipo}</span></td>
              {mostrarFolio && <td className="px-3 py-2">{reporte.folio || "-"}</td>}
              {mostrarVentanilla && <td className="px-3 py-2">{reporte.ventanilla || "-"}</td>}
              <td className="px-3 py-2 text-right">{reporte.metrosLineales.toFixed(1)}</td>
              <td className="px-3 py-2 text-right">{reporte.metrosCuadrados.toFixed(1)}</td>
              <td className="px-3 py-2 text-right">{reporte.metrosCubicos.toFixed(1)}</td>
              <td className="px-3 py-2 text-right">{reporte.peso.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}