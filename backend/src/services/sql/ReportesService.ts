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
