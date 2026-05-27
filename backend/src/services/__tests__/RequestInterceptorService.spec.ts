import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Request, Response, NextFunction } from 'express';
import { requestInterceptor } from '../RequestInterceptorService.js';

describe('RequestInterceptorService', () => {
  let req: Partial<Request>;
  let res: Partial<Response>;
  let next: NextFunction;
  let consoleSpy: any;

  beforeEach(() => {
    // Mock Request
    req = {
      method: 'GET',
      originalUrl: '/api/test',
      ip: '127.0.0.1',
    };

    // Mock Response
    res = {
      setHeader: vi.fn(),
      statusCode: 200,
      send: vi.fn().mockImplementation(function (this: Response, body?: any) {
        return this;
      }),
    };

    // Mock Next
    next = vi.fn() as unknown as NextFunction;

    // Spy on console.log
    consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('debería registrar la petición en consola', () => {
    requestInterceptor(req as Request, res as Response, next);

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('GET /api/test — IP: 127.0.0.1')
    );
  });

  it('debería agregar los headers informativos en la respuesta', () => {
    requestInterceptor(req as Request, res as Response, next);

    expect(res.setHeader).toHaveBeenCalledWith('X-Processed-By', 'nexus-backend');
    expect(res.setHeader).toHaveBeenCalledWith('X-Request-Time', expect.any(String));
  });

  it('debería delegar el flujo llamando a next()', () => {
    requestInterceptor(req as Request, res as Response, next);

    expect(next).toHaveBeenCalledTimes(1);
  });

  it('debería interceptar res.send y registrar el status code de respuesta en consola', () => {
    // Guardar referencia del spy original antes de llamar al interceptor
    const originalMockSend = res.send;

    requestInterceptor(req as Request, res as Response, next);

    // Ejecutar el método send que ahora está interceptado
    res.send!('body-content');

    expect(consoleSpy).toHaveBeenCalledWith(
      expect.stringContaining('→ GET /api/test — Status: 200')
    );
    expect(originalMockSend).toHaveBeenCalledWith('body-content');
  });
});
