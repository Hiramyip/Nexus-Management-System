import { sqlDb } from '../../db.js';

export class ReportesService {
  // Vistas de reportes - usando $queryRaw porque las vistas no tienen claves primarias
  async getReporteOficios(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_oficios`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReporteEscuelas(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_escuelas`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReportePanteones(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_panteones`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReportePuentes(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_puentes`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReporteEventosEspeciales(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_eventos_especiales`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReporteProgramacionDiaria(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_programacion_diaria`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReporteEmpleoColonia(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_empleo_colonia`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReporteConsejoParticipacion(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_consejo_participacion`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReportePeticionesDirectas(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_peticiones_directas`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReporteCiga(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_ciga`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReporteEntregaObras(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_entrega_obras`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReporteCasasQuemadas(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_casas_quemadas`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReportePct(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_pct`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReporteDescacharrizacion(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_descacharrizacion`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReporteTiraderosGestion(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_tiraderos_gestion`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  async getReporteTiraderosInspeccion(fechaInicio?: Date, fechaFin?: Date) {
    let query = `SELECT * FROM vw_reporte_tiraderos_inspeccion`;
    const params: any[] = [];
    
    if (fechaInicio && fechaFin) {
      query += ` WHERE Fecha BETWEEN ? AND ?`;
      params.push(fechaInicio, fechaFin);
    }
    
    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  // Endpoint unificado "Todos" - UNION ALL de las 15 vistas filtradas por fecha
  async getReporteTodos(fechaInicio?: Date, fechaFin?: Date) {
    const whereClause = fechaInicio && fechaFin
      ? ` WHERE Fecha BETWEEN ? AND ?`
      : '';

    const views = [
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
    ];

    const unionParts = views.map(v => `SELECT * FROM ${v}${whereClause}`);
    const query = unionParts.join('\nUNION ALL\n');

    const params: any[] = [];
    if (fechaInicio && fechaFin) {
      // One pair of params per view
      views.forEach(() => params.push(fechaInicio, fechaFin));
    }

    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  // Endpoint Dashboard - resumen mensual agrupado para recharts
  async getReporteDashboard(fechaInicio?: Date, fechaFin?: Date) {
    const whereClause = fechaInicio && fechaFin
      ? ` WHERE Fecha BETWEEN ? AND ?`
      : '';

    const views = [
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
    ];

    const unionParts = views.map(
      v => `SELECT
        Fecha,
        CAST([Metros Lineales] AS FLOAT)   AS metrosLineales,
        CAST([Metros Cuadrados] AS FLOAT)  AS metrosCuadrados,
        CAST([Metros Cubicos] AS FLOAT)    AS metrosCubicos,
        CAST([Peso (KG)] AS FLOAT)         AS peso
      FROM ${v}${whereClause}`
    );

    const innerUnion = unionParts.join('\nUNION ALL\n');

    const query = `
      SELECT
        FORMAT(Fecha, 'yyyy-MM')           AS mes,
        DATENAME(month, Fecha)             AS nombreMes,
        YEAR(Fecha)                        AS anio,
        SUM(metrosLineales)                AS metrosLineales,
        SUM(metrosCuadrados)               AS metrosCuadrados,
        SUM(metrosCubicos)                 AS metrosCubicos,
        SUM(peso)                          AS pesoTotal
      FROM (${innerUnion}) AS combined
      GROUP BY FORMAT(Fecha, 'yyyy-MM'), DATENAME(month, Fecha), YEAR(Fecha)
      ORDER BY mes ASC
    `;

    const params: any[] = [];
    if (fechaInicio && fechaFin) {
      views.forEach(() => params.push(fechaInicio, fechaFin));
    }

    return sqlDb.$queryRawUnsafe(query, ...params);
  }

  // Stored Procedure
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
