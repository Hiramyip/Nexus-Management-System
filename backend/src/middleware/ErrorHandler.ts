import { Request, Response, NextFunction } from 'express';

/**
 * ErrorHandler
 * Middleware global para manejar errores de forma segura sin exponer información sensible.
 * No expone stack traces, detalles de implementación o información de la base de datos.
 */
export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // Log del error en el servidor (sin exponer información sensible al cliente)
  console.error(`[ERROR] ${new Date().toISOString()} - ${err.message}`);
  
  // En desarrollo, log más detallado pero solo en consola del servidor
  if (process.env.NODE_ENV === 'development') {
    console.error('Stack trace:', err.stack);
  }

  // Determinar el código de estado HTTP apropiado
  let statusCode = 500;
  let userMessage = 'Error interno del servidor';

  // Clasificar errores para dar mensajes más específicos pero seguros
  if (err.name === 'ValidationError') {
    statusCode = 400;
    userMessage = 'Error de validación de datos';
  } else if (err.name === 'UnauthorizedError') {
    statusCode = 401;
    userMessage = 'No autorizado';
  } else if (err.name === 'NotFoundError') {
    statusCode = 404;
    userMessage = 'Recurso no encontrado';
  } else if (err.message.includes('no encontrado') || err.message.includes('not found')) {
    statusCode = 404;
    userMessage = 'Recurso no encontrado';
  } else if (err.message.includes('inválido') || err.message.includes('invalid')) {
    statusCode = 400;
    userMessage = 'Datos inválidos';
  } else if (err.message.includes('credenciales') || err.message.includes('credentials')) {
    statusCode = 401;
    userMessage = 'Credenciales inválidas';
  }

  // Respuesta al cliente sin exponer detalles internos
  res.status(statusCode).json({
    error: userMessage,
    // En desarrollo, incluir más detalles pero nunca stack traces o información de BD
    ...(process.env.NODE_ENV === 'development' && {
      details: err.message
    })
  });
}

/**
 * AsyncHandler
 * Wrapper para manejar errores en funciones async de rutas
 */
export function asyncHandler(
  fn: (req: Request, res: Response, next: NextFunction) => Promise<any>
) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

/**
 * NotFoundHandler
 * Middleware para rutas no encontradas
 */
export function notFoundHandler(req: Request, res: Response): void {
  res.status(404).json({
    error: 'Ruta no encontrada',
    path: req.path
  });
}
