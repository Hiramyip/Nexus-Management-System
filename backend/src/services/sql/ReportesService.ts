import { sqlDb } from '../../db.js';

// SQL Server usa @p1, @p2, ... como placeholders en $queryRawUnsafe
// (NO usa ? como MySQL/PostgreSQL)

const VIEWS = [
  'vw_reporte_oficios',
  'vw_reporte_escuelas',
  'vw_reporte_panteones',
  'vw_reporte_puentes',
  'vw_reporte_eventos_especiales',
  'vw_reporte_programacion_diaria',
  'vw_reporte_empleo_colonia',
  'vw_reporte_consejo_participacion',
  'vw_reporte_peticiones_directas',
  'vw_reporte_ciga',
  'vw_reporte_entrega_obras',
  'vw_reporte_casas_quemadas',
  'vw_reporte_pct',
  'vw_reporte_descacharrizacion',
  'vw_reporte_tiraderos_gestion',
  'vw_reporte_tiraderos_inspeccion',
] as const;

/** Construye la cláusula WHERE con @pN placeholders y devuelve los params */
function buildWhere(
  fechaInicio: Date | undefined,
  fechaFin: Date | undefined,
  startIndex = 1
): { clause: string; params: any[] } {
  if (fechaInicio && fechaFin) {
    return {
      clause: ` WHERE Fecha BETWEEN @p${startIndex} AND @p${startIndex + 1}`,
      params: [fechaInicio, fechaFin],
    };
  }
  return { clause: '', params: [] };
}

export class ReportesService {
  // ── Endpoints individuales por vista ────────────────────────────────────────

  async getReporteOficios(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_oficios${clause}`, ...params);
  }

  async getReporteEscuelas(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_escuelas${clause}`, ...params);
  }

  async getReportePanteones(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_panteones${clause}`, ...params);
  }

  async getReportePuentes(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_puentes${clause}`, ...params);
  }

  async getReporteEventosEspeciales(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_eventos_especiales${clause}`, ...params);
  }

  async getReporteProgramacionDiaria(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_programacion_diaria${clause}`, ...params);
  }

  async getReporteEmpleoColonia(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_empleo_colonia${clause}`, ...params);
  }

  async getReporteConsejoParticipacion(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_consejo_participacion${clause}`, ...params);
  }

  async getReportePeticionesDirectas(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_peticiones_directas${clause}`, ...params);
  }

  async getReporteCiga(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_ciga${clause}`, ...params);
  }

  async getReporteEntregaObras(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_entrega_obras${clause}`, ...params);
  }

  async getReporteCasasQuemadas(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_casas_quemadas${clause}`, ...params);
  }

  async getReportePct(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_pct${clause}`, ...params);
  }

  async getReporteDescacharrizacion(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_descacharrizacion${clause}`, ...params);
  }

  async getReporteTiraderosGestion(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_tiraderos_gestion${clause}`, ...params);
  }

  async getReporteTiraderosInspeccion(fechaInicio?: Date, fechaFin?: Date) {
    const { clause, params } = buildWhere(fechaInicio, fechaFin);
    return sqlDb.$queryRawUnsafe(`SELECT * FROM vw_reporte_tiraderos_inspeccion${clause}`, ...params);
  }

  // ── Endpoint unificado "Todos": UNION ALL de las 16 vistas ─────────────────
  // Cada sub-query necesita su propio par único de @pN porque SQL Server
  // numera los parámetros secuencialmente en toda la query.
  async getReporteTodos(fechaInicio?: Date, fechaFin?: Date) {
    const allParams: any[] = [];

    const unionParts = VIEWS.map((view) => {
      if (fechaInicio && fechaFin) {
        const p1 = allParams.length + 1;
        const p2 = allParams.length + 2;
        allParams.push(fechaInicio, fechaFin);
        return `SELECT * FROM ${view} WHERE Fecha BETWEEN @p${p1} AND @p${p2}`;
      }
      return `SELECT * FROM ${view}`;
    });

    const query = unionParts.join('\nUNION ALL\n');
    return sqlDb.$queryRawUnsafe(query, ...allParams);
  }

  // ── Endpoint Dashboard: resumen mensual agrupado para recharts ─────────────
  async getReporteDashboard(fechaInicio?: Date, fechaFin?: Date) {
    const allParams: any[] = [];

    const unionParts = VIEWS.map((view) => {
      let whereClause = '';
      if (fechaInicio && fechaFin) {
        const p1 = allParams.length + 1;
        const p2 = allParams.length + 2;
        allParams.push(fechaInicio, fechaFin);
        whereClause = ` WHERE Fecha BETWEEN @p${p1} AND @p${p2}`;
      }
      return `SELECT
        Fecha,
        CAST([Metros Lineales]  AS FLOAT) AS metrosLineales,
        CAST([Metros Cuadrados] AS FLOAT) AS metrosCuadrados,
        CAST([Metros Cubicos]   AS FLOAT) AS metrosCubicos,
        CAST([Peso (KG)]        AS FLOAT) AS peso
      FROM ${view}${whereClause}`;
    });

    const innerUnion = unionParts.join('\nUNION ALL\n');

    const query = `
      SELECT
        FORMAT(Fecha, 'yyyy-MM')  AS mes,
        DATENAME(month, Fecha)    AS nombreMes,
        YEAR(Fecha)               AS anio,
        SUM(metrosLineales)       AS metrosLineales,
        SUM(metrosCuadrados)      AS metrosCuadrados,
        SUM(metrosCubicos)        AS metrosCubicos,
        SUM(peso)                 AS pesoTotal
      FROM (${innerUnion}) AS combined
      GROUP BY FORMAT(Fecha, 'yyyy-MM'), DATENAME(month, Fecha), YEAR(Fecha)
      ORDER BY mes ASC
    `;

    return sqlDb.$queryRawUnsafe(query, ...allParams);
  }

  // ── Stored Procedure ────────────────────────────────────────────────────────
  async insertarRegistroDinamico(params: {
    tabla: string;
    idGrupoTrabajo: number;
    ubicacion: string;
    fecha?: Date;
    metroLineal?: number;
    metroCuadrado?: number;
    metroCubico?: number;
    peso?: number;
    numeroVentanilla?: number;
    folioCiga?: string;
    numeroReferencia?: number;
    tipoPeriodo?: string;
    estatus?: string;
    pesoIngresadoDocumento?: number;
    actividadesRealizadas?: string;
  }) {
    const result = await sqlDb.$queryRaw`
      EXEC sp_InsertarRegistroDinamico
        @Tabla = ${params.tabla},
        @idGrupoTrabajo = ${params.idGrupoTrabajo},
        @ubicacion = ${params.ubicacion},
        @fecha = ${params.fecha || null},
        @metroLineal = ${params.metroLineal || null},
        @metroCuadrado = ${params.metroCuadrado || null},
        @metroCubico = ${params.metroCubico || null},
        @peso = ${params.peso || null},
        @numeroVentanilla = ${params.numeroVentanilla || null},
        @folioCiga = ${params.folioCiga || null},
        @numeroReferencia = ${params.numeroReferencia || null},
        @tipoPeriodo = ${params.tipoPeriodo || null},
        @estatus = ${params.estatus || null},
        @pesoIngresadoDocumento = ${params.pesoIngresadoDocumento || null},
        @actividadesRealizadas = ${params.actividadesRealizadas || null}
    `;
    return result;
  }
}
