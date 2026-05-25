import { useState } from "react";
import { Upload, Save, Edit2, X, Check, Eye } from "lucide-react";
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
  folio?: string; // Solo para Oficios y CIGA
  ventanilla?: string; // Solo para CIGA
  metrosLineales: number;
  metrosCuadrados: number;
  metrosCubicos: number;
  pesoKg: number;
}

const TIPOS = [
  "Oficios",
  "CIGA",
  "EntregaObras",
  "PCT",
  "Descacharrizacion",
  "TiraderosGestionAmbiental",
  "Escuelas",
  "Puentes",
  "Panteones",
  "ProgramacionDiaria",
  "EmpleoColonia",
  "ConsejoParticipacionSocial",
  "TiraderosInspeccion",
  "PeticionDirecta",
  "EventoEspecial",
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

export function CapturaReportes({
  canEdit,
  canViewTables,
}: {
  canEdit: boolean;
  canViewTables: boolean;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const [file, setFile] = useState<File | null>(null);
  const [reportesData, setReportesData] = useState<ReporteData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [editingRow, setEditingRow] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState(false);

  // Simular la respuesta del backend después de procesar el Excel
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    setIsLoading(true);

    // Simular llamada al backend
    setTimeout(() => {
      // Datos de ejemplo que vendrian del backend
      const mockData: ReporteData[] = [
        {
          id: "1",
          fecha: "2026-05-15",
          noCuadrilla: "C-001",
          ubicacion: "Av. Principal #123",
          actividades: {
            barridoManual: true,
            corteZacate: true,
            pepenaBAsura: false,
            levantamientoBasura: true,
            levantamientoEscombro: false,
            limpiezaTerreno: false,
            levantamientoRamas: false,
          },
          tipo: "Oficios",
          folio: "OFI-2026-00123",
          metrosLineales: 150,
          metrosCuadrados: 200,
          metrosCubicos: 5,
          pesoKg: 45,
        },
        {
          id: "2",
          fecha: "2026-05-15",
          noCuadrilla: "C-002",
          ubicacion: "Col. Centro, Calle 5",
          actividades: {
            barridoManual: true,
            corteZacate: false,
            pepenaBAsura: true,
            levantamientoBasura: true,
            levantamientoEscombro: true,
            limpiezaTerreno: false,
            levantamientoRamas: false,
          },
          tipo: "CIGA",
          folio: "CIGA-2026-00456",
          ventanilla: "Limpieza de Calle",
          metrosLineales: 80,
          metrosCuadrados: 120,
          metrosCubicos: 8,
          pesoKg: 120,
        },
        {
          id: "3",
          fecha: "2026-05-16",
          noCuadrilla: "C-001",
          ubicacion: "Parque Municipal",
          actividades: {
            barridoManual: true,
            corteZacate: true,
            pepenaBAsura: true,
            levantamientoBasura: false,
            levantamientoEscombro: false,
            limpiezaTerreno: true,
            levantamientoRamas: true,
          },
          tipo: "Panteones",
          metrosLineales: 200,
          metrosCuadrados: 500,
          metrosCubicos: 3,
          pesoKg: 35,
        },
      ];

      setReportesData(mockData);
      setIsLoading(false);
    }, 2000);
  };

  const handleUpdateField = (
    id: string,
    field: keyof ReporteData,
    value: any
  ) => {
    setReportesData((prev) =>
      prev.map((reporte) =>
        reporte.id === id ? { ...reporte, [field]: value } : reporte
      )
    );
  };

  const handleUpdateActividad = (
    id: string,
    actividad: keyof ActividadesRealizadas,
    value: boolean
  ) => {
    setReportesData((prev) =>
      prev.map((reporte) =>
        reporte.id === id
          ? {
              ...reporte,
              actividades: { ...reporte.actividades, [actividad]: value },
            }
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

    // Simular llamada al backend para guardar
    setTimeout(() => {
      setSuccessMessage(true);
      setTimeout(() => {
        setReportesData([]);
        setFile(null);
        setSuccessMessage(false);
        setIsLoading(false);
      }, 2000);
    }, 1500);
  };

  const handleCancelar = () => {
    if (confirm("¿Estás seguro de cancelar? Se perderán los datos cargados.")) {
      setReportesData([]);
      setFile(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-xl mb-2" style={{ color: "#6B1D3E" }}>
          Captura de Reportes
        </h3>
        <p className="text-gray-600">
          {canEdit
            ? "Sube un archivo Excel para procesar y capturar reportes"
            : "Solo tienes permisos de lectura"}
        </p>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div
          className="mb-6 p-4 rounded-lg text-white flex items-center gap-3"
          style={{ backgroundColor: "#0D5036" }}
        >
          <Check size={24} />
          <span>¡Reporte capturado correctamente!</span>
        </div>
      )}

      {/* Upload Section */}
      {reportesData.length === 0 && canEdit && (
        <div className={`rounded-lg shadow-sm p-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-xl mx-auto">
            <div
              className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors hover:border-opacity-60 ${isDark ? 'border-amber-500/50' : ''}`}
              style={{ borderColor: isDark ? "#D4A574" : "#C09447" }}
            >
              <Upload
                size={48}
                className="mx-auto mb-4"
                style={{ color: isDark ? "#D4A574" : "#C09447" }}
              />
              <h4 className={`text-lg mb-2 ${isDark ? 'text-amber-400' : ''}`} style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>
                Cargar Archivo Excel
              </h4>
              <p className={`text-sm mb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Selecciona un archivo .xlsx o .xls para procesar
              </p>
              <label
                htmlFor="file-upload"
                className="inline-block px-6 py-2 text-white rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#0D5036" }}
              >
                Seleccionar Archivo
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".xlsx,.xls"
                onChange={handleFileUpload}
                className="hidden"
              />
              {file && (
                <p className="mt-4 text-sm" style={{ color: "#0D5036" }}>
                  Archivo seleccionado: {file.name}
                </p>
              )}
            </div>

            {isLoading && (
              <div className="mt-6 text-center">
                <div
                  className="inline-block w-8 h-8 border-4 border-t-transparent rounded-full animate-spin"
                  style={{
                    borderColor: "#C09447",
                    borderTopColor: "transparent",
                  }}
                />
                <p className={`mt-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Procesando archivo...
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Sin permisos de edición */}
      {reportesData.length === 0 && !canEdit && (
        <div className={`rounded-lg shadow-sm p-8 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="max-w-xl mx-auto text-center">
            <Eye size={48} className="mx-auto mb-4 text-gray-400" />
            <h4 className={`text-lg mb-2 ${isDark ? 'text-amber-400' : ''}`} style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>
              Sin permisos de captura
            </h4>
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              No tienes permisos para capturar reportes. Contacta a un administrador.
            </p>
          </div>
        </div>
      )}

      {/* Tabla de Datos */}
      {reportesData.length > 0 && (
        <div className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h4 className={`text-lg ${isDark ? 'text-amber-400' : ''}`} style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>
                Datos Procesados ({reportesData.length} registros)
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {canEdit
                  ? "Revisa y edita la información antes de confirmar"
                  : "Vista de solo lectura"}
              </p>
            </div>
            {canEdit && (
              <div className="flex gap-3">
                <button
                  onClick={handleCancelar}
                  className={`px-6 py-2 border rounded-lg transition-colors ${
                    isDark 
                      ? 'border-gray-600 hover:bg-gray-700' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Cancelar
                </button>
                <button
                  onClick={handleConfirmarCaptura}
                  disabled={isLoading}
                  className="px-6 py-2 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50"
                  style={{ backgroundColor: "#0D5036" }}
                >
                  <Save size={18} />
                  Confirmar Captura
                </button>
              </div>
            )}
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead style={{ backgroundColor: "#6B1D3E" }}>
                <tr>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">
                    Fecha
                  </th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">
                    No. Cuadrilla
                  </th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">
                    Ubicación
                  </th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">
                    Actividades Realizadas
                  </th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">
                    Tipo
                  </th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">
                    Folio
                  </th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">
                    Ventanilla
                  </th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">
                    M. Lineales
                  </th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">
                    M. Cuadrados
                  </th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">
                    M. Cúbicos
                  </th>
                  <th className="px-4 py-3 text-left text-white whitespace-nowrap">
                    Peso (Kg)
                  </th>
                  {canEdit && (
                    <th className="px-4 py-3 text-left text-white whitespace-nowrap">
                      Acciones
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className={isDark ? "divide-y divide-gray-700" : "divide-y divide-gray-200"}>
                {reportesData.map((reporte) => {
                  const isEditing = editingRow === reporte.id && canEdit;
                  return (
                    <tr
                      key={reporte.id}
                      className={isDark ? "hover:bg-gray-700 transition-colors" : "hover:bg-gray-50 transition-colors"}
                    >
                      {/* Fecha */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="date"
                            value={reporte.fecha}
                            onChange={(e) =>
                              handleUpdateField(
                                reporte.id,
                                "fecha",
                                e.target.value
                              )
                            }
                            className={`w-full px-2 py-1 border rounded text-sm ${
                              isDark 
                                ? 'bg-gray-600 border-gray-500 text-gray-100' 
                                : 'bg-white border-gray-300'
                            }`}
                          />
                        ) : (
                          <span className={`whitespace-nowrap ${isDark ? 'text-gray-200' : ''}`}>
                            {reporte.fecha}
                          </span>
                        )}
                      </td>

                      {/* No. Cuadrilla */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="text"
                            value={reporte.noCuadrilla}
                            onChange={(e) =>
                              handleUpdateField(
                                reporte.id,
                                "noCuadrilla",
                                e.target.value
                              )
                            }
                            className={`w-full px-2 py-1 border rounded text-sm ${
                              isDark 
                                ? 'bg-gray-600 border-gray-500 text-gray-100' 
                                : 'bg-white border-gray-300'
                            }`}
                          />
                        ) : (
                          <span className={`whitespace-nowrap ${isDark ? 'text-gray-200' : ''}`}>
                            {reporte.noCuadrilla}
                          </span>
                        )}
                      </td>

                      {/* Ubicación */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="text"
                            value={reporte.ubicacion}
                            onChange={(e) =>
                              handleUpdateField(
                                reporte.id,
                                "ubicacion",
                                e.target.value
                              )
                            }
                            className={`w-full px-2 py-1 border rounded text-sm ${
                              isDark 
                                ? 'bg-gray-600 border-gray-500 text-gray-100' 
                                : 'bg-white border-gray-300'
                            }`}
                          />
                        ) : (
                          <span className={isDark ? 'text-gray-200' : ''}>{reporte.ubicacion}</span>
                        )}
                      </td>

                      {/* Actividades Realizadas */}
                      <td className="px-4 py-3">
                        <div className="space-y-1 min-w-[200px]">
                          {Object.entries(ACTIVIDADES_LABELS).map(
                            ([key, label]) => (
                              <label
                                key={key}
                                className={`flex items-center gap-2 text-xs ${isDark ? 'text-gray-200' : ''}`}
                              >
                                <input
                                  type="checkbox"
                                  checked={
                                    reporte.actividades[
                                      key as keyof ActividadesRealizadas
                                    ]
                                  }
                                  onChange={(e) =>
                                    handleUpdateActividad(
                                      reporte.id,
                                      key as keyof ActividadesRealizadas,
                                      e.target.checked
                                    )
                                  }
                                  disabled={!canEdit || !isEditing}
                                  className="rounded"
                                  style={{ accentColor: "#0D5036" }}
                                />
                                <span>{label}</span>
                              </label>
                            )
                          )}
                        </div>
                      </td>

                      {/* Tipo */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <select
                            value={reporte.tipo}
                            onChange={(e) =>
                              handleUpdateField(
                                reporte.id,
                                "tipo",
                                e.target.value
                              )
                            }
                            className={`w-full px-2 py-1 border rounded text-sm ${
                              isDark 
                                ? 'bg-gray-600 border-gray-500 text-gray-100' 
                                : 'bg-white border-gray-300'
                            }`}
                          >
                            {TIPOS.map((tipo) => (
                              <option key={tipo} value={tipo}>
                                {tipo}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <span className={`whitespace-nowrap ${isDark ? 'text-gray-200' : ''}`}>
                            {reporte.tipo}
                          </span>
                        )}
                      </td>

                      {/* Folio */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="text"
                            value={reporte.folio || ""}
                            onChange={(e) =>
                              handleUpdateField(
                                reporte.id,
                                "folio",
                                e.target.value
                              )
                            }
                            placeholder={reporte.tipo === "Oficios" || reporte.tipo === "CIGA" ? "Requerido" : "N/A"}
                            disabled={reporte.tipo !== "Oficios" && reporte.tipo !== "CIGA"}
                            className={`w-full px-2 py-1 border rounded text-sm ${
                              isDark 
                                ? 'bg-gray-600 border-gray-500 text-gray-100 disabled:bg-gray-800' 
                                : 'bg-white border-gray-300 disabled:bg-gray-100'
                            }`}
                          />
                        ) : (
                          <span className={`whitespace-nowrap ${isDark ? 'text-gray-200' : ''}`}>
                            {reporte.folio || "-"}
                          </span>
                        )}
                      </td>

                      {/* Ventanilla */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <select
                            value={reporte.ventanilla || ""}
                            onChange={(e) =>
                              handleUpdateField(
                                reporte.id,
                                "ventanilla",
                                e.target.value
                              )
                            }
                            placeholder={reporte.tipo === "CIGA" ? "Requerido" : "N/A"}
                            disabled={reporte.tipo !== "CIGA"}
                            className={`w-full px-2 py-1 border rounded text-sm ${
                              isDark 
                                ? 'bg-gray-600 border-gray-500 text-gray-100 disabled:bg-gray-800' 
                                : 'bg-white border-gray-300 disabled:bg-gray-100'
                            }`}
                          >
                            <option value="">Selecciona una ventanilla</option>
                            {VENTANILLAS_CIGA.map((ventanilla) => (
                              <option key={ventanilla} value={ventanilla}>
                                {ventanilla}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <span className={`whitespace-nowrap ${isDark ? 'text-gray-200' : ''}`}>
                            {reporte.ventanilla || "-"}
                          </span>
                        )}
                      </td>

                      {/* Metros Lineales */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="number"
                            value={reporte.metrosLineales}
                            onChange={(e) =>
                              handleUpdateField(
                                reporte.id,
                                "metrosLineales",
                                parseFloat(e.target.value)
                              )
                            }
                            className={`w-20 px-2 py-1 border rounded text-sm ${
                              isDark 
                                ? 'bg-gray-600 border-gray-500 text-gray-100' 
                                : 'bg-white border-gray-300'
                            }`}
                          />
                        ) : (
                          <span className={isDark ? 'text-gray-200' : ''}>{reporte.metrosLineales}</span>
                        )}
                      </td>

                      {/* Metros Cuadrados */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="number"
                            value={reporte.metrosCuadrados}
                            onChange={(e) =>
                              handleUpdateField(
                                reporte.id,
                                "metrosCuadrados",
                                parseFloat(e.target.value)
                              )
                            }
                            className={`w-20 px-2 py-1 border rounded text-sm ${
                              isDark 
                                ? 'bg-gray-600 border-gray-500 text-gray-100' 
                                : 'bg-white border-gray-300'
                            }`}
                          />
                        ) : (
                          <span className={isDark ? 'text-gray-200' : ''}>{reporte.metrosCuadrados}</span>
                        )}
                      </td>

                      {/* Metros Cúbicos */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="number"
                            value={reporte.metrosCubicos}
                            onChange={(e) =>
                              handleUpdateField(
                                reporte.id,
                                "metrosCubicos",
                                parseFloat(e.target.value)
                              )
                            }
                            className={`w-20 px-2 py-1 border rounded text-sm ${
                              isDark 
                                ? 'bg-gray-600 border-gray-500 text-gray-100' 
                                : 'bg-white border-gray-300'
                            }`}
                          />
                        ) : (
                          <span className={isDark ? 'text-gray-200' : ''}>{reporte.metrosCubicos}</span>
                        )}
                      </td>

                      {/* Peso (Kg) */}
                      <td className="px-4 py-3">
                        {isEditing ? (
                          <input
                            type="number"
                            value={reporte.pesoKg}
                            onChange={(e) =>
                              handleUpdateField(
                                reporte.id,
                                "pesoKg",
                                parseFloat(e.target.value)
                              )
                            }
                            className={`w-20 px-2 py-1 border rounded text-sm ${
                              isDark 
                                ? 'bg-gray-600 border-gray-500 text-gray-100' 
                                : 'bg-white border-gray-300'
                            }`}
                          />
                        ) : (
                          <span className={isDark ? 'text-gray-200' : ''}>{reporte.pesoKg}</span>
                        )}
                      </td>

                      {/* Acciones */}
                      {canEdit && (
                        <td className="px-4 py-3">
                          {isEditing ? (
                            <button
                              onClick={() => setEditingRow(null)}
                              className={`p-2 rounded-lg transition-colors ${
                                isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
                              }`}
                              style={{ color: "#0D5036" }}
                            >
                              <Check size={18} />
                            </button>
                          ) : (
                            <button
                              onClick={() => setEditingRow(reporte.id)}
                              className={`p-2 rounded-lg transition-colors ${
                                isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
                              }`}
                              style={{ color: "#C09447" }}
                            >
                              <Edit2 size={18} />
                            </button>
                          )}
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