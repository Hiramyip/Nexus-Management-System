import { Request, Response, NextFunction } from 'express';

/**
 * RequestInterceptorService
 * Middleware global que intercepta TODAS las peticiones entrantes,
 * las loguea de forma segura y las delega al siguiente handler (repositorio/servicio).
 *
 * No expone información sensible como contraseñas, tokens o datos personales.
 */
export function requestInterceptor(req: Request, res: Response, next: NextFunction): void {
  const timestamp = new Date().toISOString();
  const { method, originalUrl, ip } = req;

  // Sanitizar URL para no exponer parámetros sensibles en query params
  const sanitizedUrl = originalUrl.replace(/password=[^&]+/g, 'password=***')
                                   .replace(/token=[^&]+/g, 'token=***')
                                   .replace(/apiKey=[^&]+/g, 'apiKey=***');

  console.log(`[${timestamp}] ${method} ${sanitizedUrl} — IP: ${ip}`);

  // Agrega header informativo en la respuesta
  res.setHeader('X-Processed-By', 'nexus-backend');
  res.setHeader('X-Request-Time', timestamp);

  // Intercept response para loguear el status code al terminar
  const originalSend = res.send.bind(res);
  res.send = (body?: unknown) => {
    console.log(`[${timestamp}] → ${method} ${sanitizedUrl} — Status: ${res.statusCode}`);
    return originalSend(body);
  };

  next();
}
