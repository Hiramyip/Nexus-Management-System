import { useState } from "react";
import {
  Search,
  Calendar,
  FileText,
  Download,
  MapPin,
  Filter,
  TrendingUp,
  BarChart3,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import { useTheme } from "../contexts/theme-context";

interface ReporteData {
  fecha: string;
  cuadrilla: string;
  ubicacion: string;
  actividades: string[];
  tipo: string;
  folio?: string; // Solo para Oficios y CIGA
  ventanilla?: string; // Solo para CIGA
  metrosLineales: number;
  metrosCuadrados: number;
  metrosCubicos: number;
  peso: number;
}

interface DatosMensuales {
  mes: string;
  metrosLineales: number;
  metrosCuadrados: number;
  metrosCubicos: number;
  peso: number;
}

// Datos mock con múltiples meses y años para el dashboard
const getDatosMockCompletos = (): ReporteData[] => {
  return [
    // 2025 - Datos completos del año anterior
    { fecha: "2025-01-10", cuadrilla: "C-001", ubicacion: "Av. Insurgentes", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-001", metrosLineales: 110, metrosCuadrados: 240, metrosCubicos: 28, peso: 1700 },
    { fecha: "2025-01-15", cuadrilla: "C-002", ubicacion: "Calle Morelos", actividades: ["Pepena de Basura"], tipo: "CIGA", folio: "F-002", ventanilla: "Limpieza de Calle", metrosLineales: 75, metrosCuadrados: 170, metrosCubicos: 23, peso: 1400 },
    { fecha: "2025-01-20", cuadrilla: "C-003", ubicacion: "Escuela Primaria", actividades: ["Limpieza de Terreno"], tipo: "Escuelas", metrosLineales: 55, metrosCuadrados: 290, metrosCubicos: 18, peso: 1100 },
    
    { fecha: "2025-02-08", cuadrilla: "C-001", ubicacion: "Av. Reforma", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-003", metrosLineales: 130, metrosCuadrados: 270, metrosCubicos: 33, peso: 2000 },
    { fecha: "2025-02-14", cuadrilla: "C-002", ubicacion: "Centro Histórico", actividades: ["Levantamiento de Basura"], tipo: "CIGA", folio: "F-004", ventanilla: "Descacharrizacion", metrosLineales: 88, metrosCuadrados: 190, metrosCubicos: 26, peso: 1600 },
    { fecha: "2025-02-22", cuadrilla: "C-004", ubicacion: "Parque Industrial", actividades: ["Corte de Zacate"], tipo: "PCT", metrosLineales: 140, metrosCuadrados: 390, metrosCubicos: 42, peso: 2900 },
    
    { fecha: "2025-03-05", cuadrilla: "C-001", ubicacion: "Av. Juárez", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-005", metrosLineales: 145, metrosCuadrados: 295, metrosCubicos: 37, peso: 2300 },
    { fecha: "2025-03-12", cuadrilla: "C-002", ubicacion: "Plaza Central", actividades: ["Pepena de Basura"], tipo: "CIGA", folio: "F-006", ventanilla: "Tiradero Clandestino", metrosLineales: 95, metrosCuadrados: 215, metrosCubicos: 29, peso: 1750 },
    { fecha: "2025-03-18", cuadrilla: "C-003", ubicacion: "Preparatoria", actividades: ["Limpieza de Terreno"], tipo: "Escuelas", metrosLineales: 73, metrosCuadrados: 335, metrosCubicos: 23, peso: 1500 },
    
    { fecha: "2025-04-06", cuadrilla: "C-001", ubicacion: "Av. Hidalgo", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-007", metrosLineales: 142, metrosCuadrados: 285, metrosCubicos: 35, peso: 2250 },
    { fecha: "2025-04-11", cuadrilla: "C-002", ubicacion: "Calle Allende", actividades: ["Levantamiento de Escombro"], tipo: "CIGA", folio: "F-008", ventanilla: "Levantamiento de Animales Muertos", metrosLineales: 100, metrosCuadrados: 235, metrosCubicos: 32, peso: 1950 },
    { fecha: "2025-04-19", cuadrilla: "C-006", ubicacion: "Puente Vehicular", actividades: ["Limpieza de Terreno"], tipo: "Puentes", metrosLineales: 110, metrosCuadrados: 190, metrosCubicos: 28, peso: 1900 },
    
    { fecha: "2025-05-07", cuadrilla: "C-001", ubicacion: "Av. Insurgentes Norte", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-009", metrosLineales: 155, metrosCuadrados: 310, metrosCubicos: 39, peso: 2500 },
    { fecha: "2025-05-14", cuadrilla: "C-002", ubicacion: "Centro Comercial", actividades: ["Pepena de Basura"], tipo: "CIGA", folio: "F-010", ventanilla: "Limpieza de Calle", metrosLineales: 105, metrosCuadrados: 255, metrosCubicos: 34, peso: 2050 },
    { fecha: "2025-05-21", cuadrilla: "C-005", ubicacion: "Panteón Municipal", actividades: ["Barrido Manual"], tipo: "Panteones", metrosLineales: 92, metrosCuadrados: 265, metrosCubicos: 30, peso: 1850 },

    { fecha: "2025-06-03", cuadrilla: "C-001", ubicacion: "Av. Libertad", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-011", metrosLineales: 148, metrosCuadrados: 300, metrosCubicos: 38, peso: 2400 },
    { fecha: "2025-06-10", cuadrilla: "C-002", ubicacion: "Mercado Central", actividades: ["Levantamiento de Basura"], tipo: "CIGA", folio: "F-012", ventanilla: "Descacharrizacion", metrosLineales: 98, metrosCuadrados: 240, metrosCubicos: 31, peso: 1900 },
    
    { fecha: "2025-07-05", cuadrilla: "C-001", ubicacion: "Av. Constitución", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-013", metrosLineales: 152, metrosCuadrados: 305, metrosCubicos: 40, peso: 2550 },
    { fecha: "2025-07-15", cuadrilla: "C-002", ubicacion: "Colonia Norte", actividades: ["Pepena de Basura"], tipo: "CIGA", folio: "F-014", ventanilla: "Tiradero Clandestino", metrosLineales: 102, metrosCuadrados: 248, metrosCubicos: 33, peso: 2000 },
    
    { fecha: "2025-08-08", cuadrilla: "C-001", ubicacion: "Av. Independencia", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-015", metrosLineales: 158, metrosCuadrados: 315, metrosCubicos: 41, peso: 2600 },
    { fecha: "2025-08-18", cuadrilla: "C-002", ubicacion: "Zona Industrial", actividades: ["Levantamiento de Basura"], tipo: "CIGA", folio: "F-016", ventanilla: "Limpieza de Calle", metrosLineales: 108, metrosCuadrados: 260, metrosCubicos: 35, peso: 2100 },
    
    { fecha: "2025-09-09", cuadrilla: "C-001", ubicacion: "Av. Revolución", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-017", metrosLineales: 160, metrosCuadrados: 320, metrosCubicos: 42, peso: 2650 },
    { fecha: "2025-09-20", cuadrilla: "C-002", ubicacion: "Parque Central", actividades: ["Pepena de Basura"], tipo: "CIGA", folio: "F-018", ventanilla: "Descacharrizacion", metrosLineales: 110, metrosCuadrados: 265, metrosCubicos: 36, peso: 2150 },
    
    { fecha: "2025-10-10", cuadrilla: "C-001", ubicacion: "Av. Juárez", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-019", metrosLineales: 165, metrosCuadrados: 325, metrosCubicos: 43, peso: 2700 },
    { fecha: "2025-10-22", cuadrilla: "C-002", ubicacion: "Colonia Sur", actividades: ["Levantamiento de Escombro"], tipo: "CIGA", folio: "F-020", ventanilla: "Tiradero Clandestino", metrosLineales: 112, metrosCuadrados: 270, metrosCubicos: 37, peso: 2200 },
    
    { fecha: "2025-11-12", cuadrilla: "C-001", ubicacion: "Av. Hidalgo", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-021", metrosLineales: 168, metrosCuadrados: 330, metrosCubicos: 44, peso: 2750 },
    { fecha: "2025-11-25", cuadrilla: "C-002", ubicacion: "Mercado Municipal", actividades: ["Pepena de Basura"], tipo: "CIGA", folio: "F-022", ventanilla: "Levantamiento de Animales Muertos", metrosLineales: 115, metrosCuadrados: 275, metrosCubicos: 38, peso: 2250 },
    
    { fecha: "2025-12-08", cuadrilla: "C-001", ubicacion: "Av. Insurgentes", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-023", metrosLineales: 170, metrosCuadrados: 335, metrosCubicos: 45, peso: 2800 },
    { fecha: "2025-12-20", cuadrilla: "C-002", ubicacion: "Plaza Principal", actividades: ["Levantamiento de Basura"], tipo: "CIGA", folio: "F-024", ventanilla: "Limpieza de Calle", metrosLineales: 118, metrosCuadrados: 280, metrosCubicos: 39, peso: 2300 },

    // 2026 - Año actual (Enero a Mayo)
    // Enero 2026
    { fecha: "2026-01-10", cuadrilla: "C-001", ubicacion: "Av. Insurgentes", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-101", metrosLineales: 120, metrosCuadrados: 250, metrosCubicos: 30, peso: 1800 },
    { fecha: "2026-01-15", cuadrilla: "C-002", ubicacion: "Calle Morelos", actividades: ["Pepena de Basura"], tipo: "CIGA", folio: "F-102", ventanilla: "Limpieza de Calle", metrosLineales: 80, metrosCuadrados: 180, metrosCubicos: 25, peso: 1500 },
    { fecha: "2026-01-18", cuadrilla: "C-007", ubicacion: "Colonia Norte", actividades: ["Levantamiento de Basura"], tipo: "CIGA", folio: "F-103", ventanilla: "Descacharrizacion", metrosLineales: 70, metrosCuadrados: 160, metrosCubicos: 22, peso: 1350 },
    { fecha: "2026-01-20", cuadrilla: "C-003", ubicacion: "Escuela Primaria", actividades: ["Limpieza de Terreno"], tipo: "Escuelas", metrosLineales: 60, metrosCuadrados: 300, metrosCubicos: 20, peso: 1200 },
    { fecha: "2026-01-25", cuadrilla: "C-004", ubicacion: "Parque Industrial", actividades: ["Corte de Zacate"], tipo: "PCT", metrosLineales: 150, metrosCuadrados: 400, metrosCubicos: 45, peso: 3000 },
    
    // Febrero 2026
    { fecha: "2026-02-05", cuadrilla: "C-001", ubicacion: "Av. Reforma", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-201", metrosLineales: 140, metrosCuadrados: 280, metrosCubicos: 35, peso: 2100 },
    { fecha: "2026-02-10", cuadrilla: "C-008", ubicacion: "Zona Centro", actividades: ["Levantamiento de Animales"], tipo: "CIGA", folio: "F-202", ventanilla: "Levantamiento de Animales Muertos", metrosLineales: 45, metrosCuadrados: 100, metrosCubicos: 15, peso: 800 },
    { fecha: "2026-02-12", cuadrilla: "C-002", ubicacion: "Centro Histórico", actividades: ["Levantamiento de Basura"], tipo: "CIGA", folio: "F-203", ventanilla: "Tiradero Clandestino", metrosLineales: 95, metrosCuadrados: 200, metrosCubicos: 28, peso: 1700 },
    { fecha: "2026-02-18", cuadrilla: "C-003", ubicacion: "Secundaria", actividades: ["Barrido Manual"], tipo: "Escuelas", metrosLineales: 70, metrosCuadrados: 320, metrosCubicos: 22, peso: 1400 },
    { fecha: "2026-02-25", cuadrilla: "C-005", ubicacion: "Zona Industrial", actividades: ["Limpieza de Terreno"], tipo: "Panteones", metrosLineales: 85, metrosCuadrados: 220, metrosCubicos: 26, peso: 1600 },
    
    // Marzo 2026
    { fecha: "2026-03-05", cuadrilla: "C-001", ubicacion: "Av. Juárez", actividades: ["Barrido Manual", "Corte de Zacate"], tipo: "Oficios", folio: "F-301", metrosLineales: 160, metrosCuadrados: 310, metrosCubicos: 40, peso: 2500 },
    { fecha: "2026-03-08", cuadrilla: "C-009", ubicacion: "Colonia Sur", actividades: ["Limpieza"], tipo: "CIGA", folio: "F-302", ventanilla: "Limpieza de Calle", metrosLineales: 88, metrosCuadrados: 195, metrosCubicos: 27, peso: 1650 },
    { fecha: "2026-03-10", cuadrilla: "C-002", ubicacion: "Plaza Central", actividades: ["Pepena de Basura"], tipo: "CIGA", folio: "F-303", ventanilla: "Descacharrizacion", metrosLineales: 105, metrosCuadrados: 230, metrosCubicos: 32, peso: 1900 },
    { fecha: "2026-03-15", cuadrilla: "C-003", ubicacion: "Preparatoria", actividades: ["Limpieza de Terreno"], tipo: "Escuelas", metrosLineales: 80, metrosCuadrados: 350, metrosCubicos: 25, peso: 1600 },
    { fecha: "2026-03-20", cuadrilla: "C-004", ubicacion: "Parque Tecnológico", actividades: ["Corte de Zacate"], tipo: "PCT", metrosLineales: 175, metrosCuadrados: 450, metrosCubicos: 50, peso: 3500 },
    { fecha: "2026-03-25", cuadrilla: "C-005", ubicacion: "Mercado Municipal", actividades: ["Levantamiento de Basura"], tipo: "ProgramacionDiaria", metrosLineales: 90, metrosCuadrados: 240, metrosCubicos: 28, peso: 1800 },
    
    // Abril 2026
    { fecha: "2026-04-03", cuadrilla: "C-001", ubicacion: "Av. Hidalgo", actividades: ["Barrido Manual"], tipo: "Oficios", folio: "F-401", metrosLineales: 155, metrosCuadrados: 300, metrosCubicos: 38, peso: 2400 },
    { fecha: "2026-04-06", cuadrilla: "C-010", ubicacion: "Basurero Ilegal", actividades: ["Retiro de Basura"], tipo: "CIGA", folio: "F-402", ventanilla: "Tiradero Clandestino", metrosLineales: 125, metrosCuadrados: 275, metrosCubicos: 40, peso: 2250 },
    { fecha: "2026-04-08", cuadrilla: "C-002", ubicacion: "Calle Allende", actividades: ["Levantamiento de Escombro"], tipo: "CIGA", folio: "F-403", ventanilla: "Descacharrizacion", metrosLineales: 110, metrosCuadrados: 250, metrosCubicos: 35, peso: 2100 },
    { fecha: "2026-04-14", cuadrilla: "C-003", ubicacion: "Universidad", actividades: ["Barrido Manual"], tipo: "Escuelas", metrosLineales: 85, metrosCuadrados: 380, metrosCubicos: 28, peso: 1700 },
    { fecha: "2026-04-20", cuadrilla: "C-006", ubicacion: "Puente Vehicular", actividades: ["Limpieza de Terreno"], tipo: "Puentes", metrosLineales: 120, metrosCuadrados: 200, metrosCubicos: 30, peso: 2000 },
    { fecha: "2026-04-27", cuadrilla: "C-004", ubicacion: "Oficinas Gobierno", actividades: ["Corte de Zacate"], tipo: "EntregaObras", metrosLineales: 95, metrosCuadrados: 260, metrosCubicos: 29, peso: 1850 },
    
    // Mayo 2026 (mes actual)
    { fecha: "2026-05-05", cuadrilla: "C-001", ubicacion: "Av. Insurgentes Norte", actividades: ["Barrido Manual", "Corte de Zacate"], tipo: "Oficios", folio: "F-501", metrosLineales: 170, metrosCuadrados: 330, metrosCubicos: 42, peso: 2700 },
    { fecha: "2026-05-07", cuadrilla: "C-011", ubicacion: "Av. Principal", actividades: ["Limpieza de Vía"], tipo: "CIGA", folio: "F-502", ventanilla: "Limpieza de Calle", metrosLineales: 98, metrosCuadrados: 220, metrosCubicos: 31, peso: 1850 },
    { fecha: "2026-05-08", cuadrilla: "C-002", ubicacion: "Centro Comercial", actividades: ["Pepena de Basura"], tipo: "CIGA", folio: "F-503", ventanilla: "Descacharrizacion", metrosLineales: 115, metrosCuadrados: 270, metrosCubicos: 36, peso: 2200 },
    { fecha: "2026-05-11", cuadrilla: "C-012", ubicacion: "Carretera Norte", actividades: ["Retiro de Animal"], tipo: "CIGA", folio: "F-504", ventanilla: "Levantamiento de Animales Muertos", metrosLineales: 30, metrosCuadrados: 80, metrosCubicos: 12, peso: 600 },
    { fecha: "2026-05-12", cuadrilla: "C-003", ubicacion: "Escuela Primaria Benito Juárez", actividades: ["Limpieza de Terreno"], tipo: "Escuelas", metrosLineales: 90, metrosCuadrados: 390, metrosCubicos: 30, peso: 1850 },
    { fecha: "2026-05-15", cuadrilla: "C-004", ubicacion: "Parque Industrial Norte", actividades: ["Corte de Zacate"], tipo: "PCT", metrosLineales: 190, metrosCuadrados: 480, metrosCubicos: 55, peso: 3800 },
    { fecha: "2026-05-16", cuadrilla: "C-005", ubicacion: "Panteón Municipal", actividades: ["Barrido Manual"], tipo: "Panteones", metrosLineales: 100, metrosCuadrados: 280, metrosCubicos: 32, peso: 1950 },
    { fecha: "2026-05-17", cuadrilla: "C-006", ubicacion: "Colonia Centro", actividades: ["Levantamiento de Basura"], tipo: "EmpleoColonia", metrosLineales: 75, metrosCuadrados: 190, metrosCubicos: 24, peso: 1500 },
    { fecha: "2026-05-18", cuadrilla: "C-001", ubicacion: "Av. Revolución", actividades: ["Pepena de Basura"], tipo: "Oficios", folio: "F-505", metrosLineales: 130, metrosCuadrados: 260, metrosCubicos: 34, peso: 2100 },
  ];
};

export function GeneracionReportes({
  allowedReportTypes,
}: {
  allowedReportTypes?: string[];
  userRole: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const [tipoUbicacion, setTipoUbicacion] = useState("");
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [resultados, setResultados] = useState<ReporteData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [añoComparacion, setAñoComparacion] = useState<number>(2026); // Año para dashboard

  const tiposUbicacion = [
    "Todos",
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

  const tiposDisponibles =
    allowedReportTypes && allowedReportTypes.length > 0
      ? tiposUbicacion.filter((tipo) => allowedReportTypes.includes(tipo))
      : tiposUbicacion;

  const isConsultorRole = allowedReportTypes && allowedReportTypes.length > 0;

  // Fecha actual del sistema (Mayo 18, 2026)
  const fechaActual = new Date(2026, 4, 18); // Mes 4 = Mayo (0-indexed)
  const mesActual = fechaActual.getMonth() + 1; // 5 = Mayo
  const añoActual = fechaActual.getFullYear(); // 2026

  // Nombres de meses
  const nombresMeses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  // Calcular datos mensuales dinámicamente según el año seleccionado
  const calcularDatosMensuales = (año: number): DatosMensuales[] => {
    const todosDatos = getDatosMockCompletos();
    const mesesAMostrar = año === añoActual ? mesActual : 12; // Si es año actual, solo hasta mes actual
    
    return Array.from({ length: mesesAMostrar }, (_, index) => {
      const mesNum = index + 1;
      const reportesDelMes = todosDatos.filter((r) => {
        const fecha = new Date(r.fecha);
        return fecha.getMonth() + 1 === mesNum && fecha.getFullYear() === año;
      });

      return {
        mes: nombresMeses[index],
        metrosLineales: reportesDelMes.reduce((sum, r) => sum + r.metrosLineales, 0),
        metrosCuadrados: reportesDelMes.reduce((sum, r) => sum + r.metrosCuadrados, 0),
        metrosCubicos: reportesDelMes.reduce((sum, r) => sum + r.metrosCubicos, 0),
        peso: reportesDelMes.reduce((sum, r) => sum + r.peso, 0),
      };
    });
  };

  // Calcular reportes del mes actual por tipo
  const calcularReportesMesActual = () => {
    const todosDatos = getDatosMockCompletos();
    const reportesMesActual = todosDatos.filter((r) => {
      const fecha = new Date(r.fecha);
      return fecha.getMonth() + 1 === mesActual && fecha.getFullYear() === añoActual;
    });

    const porTipo: { [key: string]: number } = {};
    reportesMesActual.forEach((r) => {
      porTipo[r.tipo] = (porTipo[r.tipo] || 0) + 1;
    });

    return Object.entries(porTipo)
      .map(([tipo, cantidad]) => ({ tipo, cantidad }))
      .sort((a, b) => b.cantidad - a.cantidad);
  };

  const datosMensuales = calcularDatosMensuales(añoComparacion);
  const reportesPorTipo = calcularReportesMesActual();

  const handleBuscar = async () => {
    if (!tipoUbicacion || !fechaInicio || !fechaFin) {
      alert("Por favor completa todos los campos");
      return;
    }

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const datosMock = getDatosMockCompletos();

    const filtrados = datosMock.filter((reporte) => {
      const fechaReporte = new Date(reporte.fecha);
      const inicio = new Date(fechaInicio);
      const fin = new Date(fechaFin);
      const cumpleFecha = fechaReporte >= inicio && fechaReporte <= fin;
      const cumpleTipo =
        tipoUbicacion === "Todos" || reporte.tipo === tipoUbicacion;
      return cumpleFecha && cumpleTipo;
    });

    setResultados(filtrados);
    setIsLoading(false);
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

  // Agrupar resultados por tipo cuando se selecciona "Todos"
  const resultadosPorTipo = () => {
    if (!resultados || tipoUbicacion !== "Todos") return null;

    const grupos: { [key: string]: ReporteData[] } = {};
    resultados.forEach((r) => {
      if (!grupos[r.tipo]) grupos[r.tipo] = [];
      grupos[r.tipo].push(r);
    });

    return Object.entries(grupos).map(([tipo, datos]) => ({
      tipo,
      datos,
      sumatorias: calcularSumatorias(datos),
    }));
  };

  // Agrupar CIGA por ventanilla cuando se busca específicamente CIGA
  const resultadosCIGAPorVentanilla = () => {
    if (!resultados || tipoUbicacion !== "CIGA") return null;

    const grupos: { [key: string]: ReporteData[] } = {};
    resultados.forEach((r) => {
      const ventanilla = r.ventanilla || "Sin Ventanilla";
      if (!grupos[ventanilla]) grupos[ventanilla] = [];
      grupos[ventanilla].push(r);
    });

    return Object.entries(grupos).map(([ventanilla, datos]) => ({
      ventanilla,
      datos,
      sumatorias: calcularSumatorias(datos),
    }));
  };

  const mostrarColumnaFolio = resultados?.some(
    (r) => r.tipo === "Oficios" || r.tipo === "CIGA"
  );

  const mostrarColumnaVentanilla = resultados?.some((r) => r.tipo === "CIGA");

  const mostrarPorTipos = tipoUbicacion === "Todos" && resultados && resultados.length > 0;
  const mostrarPorVentanillas = tipoUbicacion === "CIGA" && resultados && resultados.length > 0;

  return (
    <div>
      {/* Dashboard Analítico - Siempre visible */}
      {!isConsultorRole && !resultados && (
        <>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 gap-4">
            <h3 className={`text-xl md:text-2xl flex items-center gap-2 ${isDark ? 'text-amber-400' : ''}`} style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>
              <TrendingUp size={24} className="md:w-7 md:h-7" />
              Dashboard Analítico
            </h3>
            
            {/* Selector de Año */}
            <div className="flex items-center gap-3">
              <label className={`text-xs md:text-sm whitespace-nowrap ${isDark ? 'text-amber-400' : ''}`} style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>
                <strong>Comparar año:</strong>
              </label>
              <select
                value={añoComparacion}
                onChange={(e) => setAñoComparacion(Number(e.target.value))}
                className={`px-3 md:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 text-sm md:text-base ${
                  isDark 
                    ? 'bg-gray-700 border-gray-600 text-gray-100' 
                    : 'bg-white border-gray-300'
                }`}
                style={{ borderColor: isDark ? "#4B5563" : "#C09447" }}
              >
                <option value={2025}>2025</option>
                <option value={2026}>2026 (Actual)</option>
              </select>
            </div>
          </div>

          {/* Gráfica de Evolución Mensual */}
          <div className={`rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <h4 className={`text-base md:text-lg mb-3 md:mb-4 flex flex-col md:flex-row md:items-center gap-2 ${isDark ? 'text-amber-400' : ''}`} style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>
              <div className="flex items-center gap-2">
                <BarChart3 size={18} className="md:w-5 md:h-5" />
                <span>Evolución Mensual de Indicadores - {añoComparacion}</span>
              </div>
              {añoComparacion === añoActual && (
                <span className={`text-xs md:text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  (Hasta {nombresMeses[mesActual - 1]})
                </span>
              )}
            </h4>
            <ResponsiveContainer width="100%" height={300} className="md:h-[350px]">
              <LineChart data={datosMensuales}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#E5E7EB"} />
                <XAxis dataKey="mes" tick={{ fontSize: 12, fill: isDark ? "#9CA3AF" : "#000" }} />
                <YAxis yAxisId="left" tick={{ fontSize: 12, fill: isDark ? "#9CA3AF" : "#000" }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12, fill: isDark ? "#9CA3AF" : "#000" }} />
                <Tooltip contentStyle={{ backgroundColor: isDark ? "#1F2937" : "#FFF", borderColor: isDark ? "#374151" : "#E5E7EB", color: isDark ? "#F3F4F6" : "#000" }} />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="metrosLineales"
                  stroke="#D4869D"
                  name="M. Lineales"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="metrosCuadrados"
                  stroke="#C09447"
                  name="M. Cuadrados"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="metrosCubicos"
                  stroke="#1A8A5A"
                  name="M. Cúbicos"
                  strokeWidth={2}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="peso"
                  stroke="#A78BCA"
                  name="Peso (kg)"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Reportes por Tipo - Mes Actual */}
          <div className={`rounded-lg shadow-sm p-4 md:p-6 mb-4 md:mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <h4 className={`text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2 ${isDark ? 'text-amber-400' : ''}`} style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>
              <FileText size={18} className="md:w-5 md:h-5" />
              <span className="text-sm md:text-base">Solicitudes por Tipo - {nombresMeses[mesActual - 1]} {añoActual}</span>
            </h4>
            <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
              <BarChart data={reportesPorTipo}>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#E5E7EB"} />
                <XAxis dataKey="tipo" angle={-45} textAnchor="end" height={100} tick={{ fontSize: 10, fill: isDark ? "#9CA3AF" : "#000" }} />
                <YAxis tick={{ fontSize: 12, fill: isDark ? "#9CA3AF" : "#000" }} />
                <Tooltip contentStyle={{ backgroundColor: isDark ? "#1F2937" : "#FFF", borderColor: isDark ? "#374151" : "#E5E7EB", color: isDark ? "#F3F4F6" : "#000" }} />
                <Bar dataKey="cantidad" fill={isDark ? "#D4869D" : "#6B1D3E"} name="Cantidad de Solicitudes" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      )}

      {/* Mensaje de filtro para consultores */}
      {isConsultorRole && (
        <div
          className="mb-6 p-4 rounded-lg flex items-center gap-3"
          style={{ backgroundColor: "#FFF9E6", borderLeft: "4px solid #C09447" }}
        >
          <Filter size={20} style={{ color: "#C09447" }} />
          <div>
            <p style={{ color: "#6B1D3E" }}>
              <strong>Vista filtrada:</strong> Solo puedes generar reportes de
              tipo <strong>{allowedReportTypes.join(", ")}</strong>
            </p>
          </div>
        </div>
      )}

      {/* Formulario de Búsqueda */}
      <div className={`rounded-lg shadow-sm p-6 mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <h3 className={`text-xl mb-4 flex items-center gap-2 ${isDark ? 'text-amber-400' : ''}`} style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>
          <Search size={24} />
          Parámetros de Búsqueda
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label
              className={`block text-sm mb-2 flex items-center gap-2 ${isDark ? 'text-gray-300' : ''}`}
              style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}
            >
              <MapPin size={16} />
              Tipo de Ubicación
            </label>
            <select
              value={tipoUbicacion}
              onChange={(e) => setTipoUbicacion(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-gray-100' 
                  : 'bg-white border-gray-300'
              }`}
            >
              <option value="">Selecciona un tipo</option>
              {tiposDisponibles.map((tipo) => (
                <option key={tipo} value={tipo}>
                  {tipo}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              className={`block text-sm mb-2 flex items-center gap-2 ${isDark ? 'text-gray-300' : ''}`}
              style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}
            >
              <Calendar size={16} />
              Fecha Inicio
            </label>
            <input
              type="date"
              value={fechaInicio}
              onChange={(e) => setFechaInicio(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-gray-100' 
                  : 'bg-white border-gray-300'
              }`}
            />
          </div>

          <div>
            <label
              className={`block text-sm mb-2 flex items-center gap-2 ${isDark ? 'text-gray-300' : ''}`}
              style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}
            >
              <Calendar size={16} />
              Fecha Fin
            </label>
            <input
              type="date"
              value={fechaFin}
              onChange={(e) => setFechaFin(e.target.value)}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                isDark 
                  ? 'bg-gray-700 border-gray-600 text-gray-100' 
                  : 'bg-white border-gray-300'
              }`}
            />
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={handleBuscar}
            disabled={isLoading || !tipoUbicacion || !fechaInicio || !fechaFin}
            className="px-6 py-2 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: "#0D5036" }}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Buscando...</span>
              </>
            ) : (
              <>
                <Search size={20} />
                <span>Generar Reporte</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Resultados */}
      {resultados && (
        <>
          {/* Sumatorias Generales */}
          {sumatorias && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Metros Lineales</p>
                <p className="text-3xl" style={{ color: isDark ? "#D4869D" : "#6B1D3E" }}>
                  {sumatorias.metrosLineales.toFixed(2)}
                </p>
                <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>ml</p>
              </div>

              <div className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Metros Cuadrados</p>
                <p className="text-3xl" style={{ color: "#C09447" }}>
                  {sumatorias.metrosCuadrados.toFixed(2)}
                </p>
                <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>m²</p>
              </div>

              <div className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Metros Cúbicos</p>
                <p className="text-3xl" style={{ color: isDark ? "#1A8A5A" : "#0D5036" }}>
                  {sumatorias.metrosCubicos.toFixed(2)}
                </p>
                <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>m³</p>
              </div>

              <div className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                <p className={`text-sm mb-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Peso Total</p>
                <p className="text-3xl" style={{ color: isDark ? "#D4869D" : "#6B1D3E" }}>
                  {sumatorias.peso.toLocaleString()}
                </p>
                <p className={`text-xs mt-1 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>kg</p>
              </div>
            </div>
          )}

          {/* Si es CIGA, mostrar desglose por ventanilla */}
          {mostrarPorVentanillas && resultadosCIGAPorVentanilla() ? (
            <div className="space-y-6">
              <h3 className={`text-xl ${isDark ? 'text-amber-400' : ''}`} style={isDark ? {} : { color: "#6B1D3E" }}>
                Desglose CIGA por Ventanilla
              </h3>
              
              {resultadosCIGAPorVentanilla()!.map(({ ventanilla, datos, sumatorias: sumaVentanilla }) => (
                <div key={ventanilla} className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`text-lg flex items-center gap-2 ${isDark ? 'text-amber-400' : ''}`} style={isDark ? {} : { color: "#6B1D3E" }}>
                      <FileText size={20} />
                      {ventanilla}
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        ({datos.length} {datos.length === 1 ? "solicitud" : "solicitudes"})
                      </span>
                    </h4>
                  </div>

                  {/* Sumatorias de la ventanilla */}
                  {sumaVentanilla && (
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className={`rounded p-3 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>M. Lineales</p>
                        <p className="text-lg" style={{ color: isDark ? "#D4869D" : "#6B1D3E" }}>
                          {sumaVentanilla.metrosLineales.toFixed(2)}
                        </p>
                      </div>
                      <div className={`rounded p-3 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>M. Cuadrados</p>
                        <p className="text-lg" style={{ color: "#C09447" }}>
                          {sumaVentanilla.metrosCuadrados.toFixed(2)}
                        </p>
                      </div>
                      <div className={`rounded p-3 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>M. Cúbicos</p>
                        <p className="text-lg" style={{ color: isDark ? "#1A8A5A" : "#0D5036" }}>
                          {sumaVentanilla.metrosCubicos.toFixed(2)}
                        </p>
                      </div>
                      <div className={`rounded p-3 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Peso (kg)</p>
                        <p className="text-lg" style={{ color: isDark ? "#D4869D" : "#6B1D3E" }}>
                          {sumaVentanilla.peso.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Tabla de la ventanilla */}
                  <TablaReportes 
                    datos={datos} 
                    mostrarFolio={true}
                    mostrarVentanilla={true}
                  />
                </div>
              ))}
            </div>
          ) : mostrarPorTipos && resultadosPorTipo() ? (
            /* Si es "Todos", mostrar desglose por tipo */
            <div className="space-y-6">
              <h3 className={`text-xl ${isDark ? 'text-amber-400' : ''}`} style={isDark ? {} : { color: "#6B1D3E" }}>
                Desglose por Tipo de Ubicación
              </h3>
              
              {resultadosPorTipo()!.map(({ tipo, datos, sumatorias: sumaTipo }) => (
                <div key={tipo} className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`text-lg flex items-center gap-2 ${isDark ? 'text-amber-400' : ''}`} style={isDark ? {} : { color: "#6B1D3E" }}>
                      <FileText size={20} />
                      {tipo}
                      <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        ({datos.length} {datos.length === 1 ? "solicitud" : "solicitudes"})
                      </span>
                    </h4>
                  </div>

                  {/* Sumatorias del tipo */}
                  {sumaTipo && (
                    <div className="grid grid-cols-4 gap-4 mb-4">
                      <div className={`rounded p-3 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>M. Lineales</p>
                        <p className="text-lg" style={{ color: isDark ? "#D4869D" : "#6B1D3E" }}>
                          {sumaTipo.metrosLineales.toFixed(2)}
                        </p>
                      </div>
                      <div className={`rounded p-3 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>M. Cuadrados</p>
                        <p className="text-lg" style={{ color: "#C09447" }}>
                          {sumaTipo.metrosCuadrados.toFixed(2)}
                        </p>
                      </div>
                      <div className={`rounded p-3 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>M. Cúbicos</p>
                        <p className="text-lg" style={{ color: isDark ? "#1A8A5A" : "#0D5036" }}>
                          {sumaTipo.metrosCubicos.toFixed(2)}
                        </p>
                      </div>
                      <div className={`rounded p-3 ${isDark ? 'bg-gray-700' : 'bg-gray-50'}`}>
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Peso (kg)</p>
                        <p className="text-lg" style={{ color: isDark ? "#D4869D" : "#6B1D3E" }}>
                          {sumaTipo.peso.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Tabla del tipo */}
                  <TablaReportes 
                    datos={datos} 
                    mostrarFolio={tipo === "Oficios" || tipo === "CIGA"}
                    mostrarVentanilla={tipo === "CIGA"}
                  />
                </div>
              ))}
            </div>
          ) : (
            /* Tabla única si no es "Todos" ni "CIGA" */
            <div className={`rounded-lg shadow-sm p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl flex items-center gap-2 ${isDark ? 'text-amber-400' : ''}`} style={isDark ? {} : { color: "#6B1D3E" }}>
                  <FileText size={24} />
                  Desglose Detallado
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                    ({resultados.length} {resultados.length === 1 ? "solicitud" : "solicitudes"})
                  </span>
                </h3>

                <button
                  onClick={() => alert("Exportando reporte a Excel...")}
                  className="px-4 py-2 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
                  style={{ backgroundColor: "#C09447" }}
                >
                  <Download size={18} />
                  Exportar
                </button>
              </div>

              {resultados.length === 0 ? (
                <div className={`text-center py-12 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  <FileText size={48} className="mx-auto mb-4 opacity-30" />
                  <p>No se encontraron reportes con los criterios seleccionados</p>
                </div>
              ) : (
                <TablaReportes 
                  datos={resultados} 
                  mostrarFolio={mostrarColumnaFolio || false}
                  mostrarVentanilla={mostrarColumnaVentanilla}
                  mostrarTotales={true}
                  sumatorias={sumatorias}
                />
              )}
            </div>
          )}
        </>
      )}

      {/* Estado inicial cuando no se ha buscado */}
      {!resultados && !isConsultorRole && (
        <div className={`rounded-lg shadow-sm p-12 text-center ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <FileText
            size={64}
            className="mx-auto mb-4 opacity-20"
            style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}
          />
          <h3 className={`text-xl mb-2 ${isDark ? 'text-amber-400' : ''}`} style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>
            Genera tu Reporte
          </h3>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            Selecciona el tipo de ubicación y el rango de fechas para generar
            un reporte detallado
          </p>
        </div>
      )}
    </div>
  );
}

// Componente reutilizable para tablas
function TablaReportes({ 
  datos, 
  mostrarFolio,
  mostrarVentanilla = false,
  mostrarTotales = false,
  sumatorias = null
}: { 
  datos: ReporteData[];
  mostrarFolio: boolean;
  mostrarVentanilla?: boolean;
  mostrarTotales?: boolean;
  sumatorias?: any;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs sm:text-sm min-w-[900px]">
        <thead style={{ backgroundColor: "#6B1D3E" }}>
          <tr>
            <th className="px-3 md:px-4 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">FECHA</th>
            <th className="px-3 md:px-4 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">NO. CUADRILLA</th>
            <th className="px-3 md:px-4 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">UBICACIÓN</th>
            <th className="px-3 md:px-4 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">ACTIVIDADES</th>
            <th className="px-3 md:px-4 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">TIPO</th>
            {mostrarFolio && <th className="px-3 md:px-4 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">FOLIO</th>}
            {mostrarVentanilla && <th className="px-3 md:px-4 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">VENTANILLA</th>}
            <th className="px-3 md:px-4 py-3 text-right text-xs sm:text-sm text-white whitespace-nowrap">M. LINEALES</th>
            <th className="px-3 md:px-4 py-3 text-right text-xs sm:text-sm text-white whitespace-nowrap">M. CUADRADOS</th>
            <th className="px-3 md:px-4 py-3 text-right text-xs sm:text-sm text-white whitespace-nowrap">M. CÚBICOS</th>
            <th className="px-3 md:px-4 py-3 text-right text-xs sm:text-sm text-white whitespace-nowrap">PESO (KG)</th>
          </tr>
        </thead>
        <tbody className={isDark ? "divide-y divide-gray-700" : "divide-y divide-gray-200"}>
          {datos.map((reporte, index) => (
            <tr key={index} className={isDark ? "hover:bg-gray-700" : "hover:bg-gray-50"}>
              <td className={`px-3 md:px-4 py-3 whitespace-nowrap text-xs sm:text-sm ${isDark ? 'text-gray-200' : ''}`}>
                {new Date(reporte.fecha).toLocaleDateString("es-MX")}
              </td>
              <td className={`px-3 md:px-4 py-3 whitespace-nowrap text-xs sm:text-sm ${isDark ? 'text-gray-200' : ''}`}>{reporte.cuadrilla}</td>
              <td className={`px-3 md:px-4 py-3 text-xs sm:text-sm ${isDark ? 'text-gray-200' : ''}`}>{reporte.ubicacion}</td>
              <td className="px-3 md:px-4 py-3">
                <div className="flex flex-wrap gap-1">
                  {reporte.actividades.map((act, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded text-xs ${isDark ? 'bg-amber-900/30 text-amber-300' : ''}`}
                      style={isDark ? {} : {
                        backgroundColor: "#FFF9E6",
                        color: "#C09447",
                      }}
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </td>
              <td className="px-3 md:px-4 py-3">
                <span
                  className={`px-2 sm:px-3 py-1 rounded-full text-xs whitespace-nowrap ${isDark ? 'bg-green-900/30 text-green-300' : ''}`}
                  style={isDark ? {} : {
                    backgroundColor: "#E8F5E9",
                    color: "#0D5036",
                  }}
                >
                  {reporte.tipo}
                </span>
              </td>
              {mostrarFolio && (
                <td className={`px-3 md:px-4 py-3 text-left text-xs sm:text-sm whitespace-nowrap ${isDark ? 'text-gray-200' : ''}`}>{reporte.folio || "-"}</td>
              )}
              {mostrarVentanilla && (
                <td className="px-3 md:px-4 py-3 text-left">
                  <span
                    className={`px-2 py-1 rounded text-xs whitespace-nowrap ${isDark ? 'bg-purple-900/30 text-purple-300' : ''}`}
                    style={isDark ? {} : {
                      backgroundColor: "#F3E5F5",
                      color: "#6B1D3E",
                    }}
                  >
                    {reporte.ventanilla || "-"}
                  </span>
                </td>
              )}
              <td className={`px-3 md:px-4 py-3 text-right text-xs sm:text-sm whitespace-nowrap ${isDark ? 'text-gray-200' : ''}`}>{reporte.metrosLineales.toFixed(2)}</td>
              <td className={`px-3 md:px-4 py-3 text-right text-xs sm:text-sm whitespace-nowrap ${isDark ? 'text-gray-200' : ''}`}>{reporte.metrosCuadrados.toFixed(2)}</td>
              <td className={`px-3 md:px-4 py-3 text-right text-xs sm:text-sm whitespace-nowrap ${isDark ? 'text-gray-200' : ''}`}>{reporte.metrosCubicos.toFixed(2)}</td>
              <td className={`px-3 md:px-4 py-3 text-right text-xs sm:text-sm whitespace-nowrap ${isDark ? 'text-gray-200' : ''}`}>{reporte.peso.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
        {mostrarTotales && sumatorias && (
          <tfoot className={isDark ? 'bg-gray-700' : ''} style={isDark ? {} : { backgroundColor: "#F9FAFB" }}>
            <tr>
              <td
                colSpan={5 + (mostrarFolio ? 1 : 0) + (mostrarVentanilla ? 1 : 0)}
                className={`px-3 md:px-4 py-3 text-right text-xs sm:text-sm ${isDark ? 'text-amber-400' : ''}`}
                style={isDark ? {} : { color: "#6B1D3E" }}
              >
                <strong>TOTALES:</strong>
              </td>
              <td className={`px-3 md:px-4 py-3 text-right text-xs sm:text-sm ${isDark ? 'text-gray-200' : ''}`}>
                <strong>{sumatorias.metrosLineales.toFixed(2)}</strong>
              </td>
              <td className={`px-3 md:px-4 py-3 text-right text-xs sm:text-sm ${isDark ? 'text-gray-200' : ''}`}>
                <strong>{sumatorias.metrosCuadrados.toFixed(2)}</strong>
              </td>
              <td className={`px-3 md:px-4 py-3 text-right text-xs sm:text-sm ${isDark ? 'text-gray-200' : ''}`}>
                <strong>{sumatorias.metrosCubicos.toFixed(2)}</strong>
              </td>
              <td className={`px-3 md:px-4 py-3 text-right text-xs sm:text-sm ${isDark ? 'text-gray-200' : ''}`}>
                <strong>{sumatorias.peso.toLocaleString()}</strong>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </div>
  );
}