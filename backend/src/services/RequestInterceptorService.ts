import { Request, Response, NextFunction } from 'express';

/**
 * RequestInterceptorService
 * Middleware global que intercepta TODAS las peticiones entrantes,
 * las loguea y las delega al siguiente handler (repositorio/servicio).
 *
 * También agrega el header `X-Processed-By` en la respuesta.
 */
export function requestInterceptor(req: Request, res: Response, next: NextFunction): void {
  const timestamp = new Date().toISOString();
  const { method, originalUrl, ip } = req;

  console.log(`[${timestamp}] ${method} ${originalUrl} — IP: ${ip}`);

  // Agrega header informativo en la respuesta
  res.setHeader('X-Processed-By', 'nexus-backend');
  res.setHeader('X-Request-Time', timestamp);

  // Intercept response para loguear el status code al terminar
  const originalSend = res.send.bind(res);
  res.send = (body?: unknown) => {
    console.log(`[${timestamp}] → ${method} ${originalUrl} — Status: ${res.statusCode}`);
    return originalSend(body);
  };

  next();
}
