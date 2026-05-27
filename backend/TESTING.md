# 🧪 Manual de Pruebas Unitarias e Integración (Nexus Backend)

Bienvenido a la guía oficial de pruebas para la API en TypeScript de **Nexus Management System**. Este documento explica la arquitectura de pruebas, cómo ejecutar los tests, las convenciones de nombres, y cómo escribir nuevas pruebas manteniendo la consistencia del sistema.

---

## 📌 Índice
1. [Filosofía de Pruebas](#-filosofía-de-pruebas)
2. [Estructura del Código de Pruebas](#%EF%B8%8F-estructura-del-código-de-pruebas)
3. [Comandos de Referencia](#-comandos-de-referencia)
4. [Guía de Mocking de Repositorios (Prisma)](#-guía-de-mocking-de-repositorios-prisma)
5. [Estándar de Redacción y Auto-documentación (BDD)](#-estándar-de-redacción-y-auto-documentación-bdd)
6. [Medición de Cobertura de Código](#-medición-de-cobertura-de-código)

---

## 🏛️ Filosofía de Pruebas

Para garantizar que el sistema sea estable, escalable y mantenible a largo plazo, implementamos una estrategia de pruebas en tres niveles dentro del backend:

1.  **Pruebas Unitarias de Servicios (`Service Layer`)**: Probamos la lógica de negocio de manera 100% aislada. Todos los servicios que interactúan con base de datos (SQL Server o MongoDB) deben simular (mockear) sus respectivos repositorios. **No se permiten conexiones reales a BD en las pruebas unitarias.**
2.  **Pruebas Unitarias de Middlewares**: Probamos que nuestros interceptores y guardias de seguridad Express alteren o verifiquen los objetos `req`, `res` y `next` de manera esperada sin interrumpir el flujo.
3.  **Pruebas de Integración de Rutas (API Endpoints)**: Próximamente se implementarán pruebas de endpoints reales simulando peticiones HTTP utilizando **Supertest** para asegurar que el ruteador de Express responda con los códigos de estado y JSONs de manera óptima.

---

## ⚙️ Estructura del Código de Pruebas

Los archivos de pruebas se colocan junto a los archivos de código que están evaluando, dentro de una carpeta llamada `__tests__` y utilizando la extensión `.spec.ts` o `.test.ts`.

**Ejemplo de Estructura:**
```bash
backend/src/services/sql/
├── UsuariosService.ts
└── __tests__/
    └── UsuariosService.spec.ts  # Suite de pruebas unitarias
```

Esta convención mantiene las pruebas organizadas, fáciles de localizar y simplifica la exclusión de tests del paquete de compilación de producción.

---

## 🚀 Comandos de Referencia

Dentro del directorio `backend/`, puedes ejecutar los siguientes scripts en tu terminal:

*   **Ejecutar todas las pruebas (Una vez):**
    ```bash
    npm run test
    ```
    *Ejecuta todas las especificaciones y proporciona un resumen del resultado.*

*   **Ejecutar pruebas en modo Interactivo (Watch Mode):**
    ```bash
    npm run test:watch
    ```
    *Mantiene el proceso activo. Cada vez que modifiques un archivo de servicio o de prueba, Vitest re-ejecutará automáticamente los tests afectados en milisegundos.*

*   **Medir la Cobertura de Código (Coverage):**
    ```bash
    npm run test:coverage
    ```
    *Analiza qué líneas del código fuente han sido ejecutadas por la suite de pruebas y genera reportes gráficos de porcentaje en terminal y en HTML.*

---

## 🛡️ Guía de Mocking de Repositorios (Prisma)

Dado que nuestros servicios importan repositorios que a su vez importan el cliente de Prisma (`sqlDb` o `mongoDb`), debemos simular el comportamiento de estos repositorios para que las pruebas no requieran conexión a base de datos.

### Paso a paso para mockear en Vitest:

1.  Usa `vi.mock` al inicio del archivo para interceptar la importación del repositorio:
    ```typescript
    import { describe, it, expect, vi, beforeEach } from 'vitest';
    import { MiService } from '../MiService.js';
    import { MiRepository } from '../../../repositories/sql/MiRepository.js';

    // Interceptamos y mockeamos la clase del repositorio
    vi.mock('../../../repositories/sql/MiRepository.js', () => {
      return {
        MiRepository: vi.fn().mockImplementation(() => ({
          findAll: vi.fn(),
          findById: vi.fn(),
          create: vi.fn(),
          // Declara aquí todos los métodos que consuma tu servicio
        })),
      };
    });
    ```

2.  Obtén la referencia del repositorio mockeado dentro de `beforeEach` para definir las respuestas simuladas:
    ```typescript
    describe('MiService', () => {
      let service: MiService;
      let mockRepo: any;

      beforeEach(() => {
        vi.clearAllMocks();
        service = new MiService();
        mockRepo = (service as any).repo; // Acceso a la propiedad privada 'repo'
      });
      
      it('debería retornar datos simulados', async () => {
        // Configuramos el mock para resolver una promesa con los datos deseados
        mockRepo.findAll.mockResolvedValue([{ id: 1, detalle: 'Test' }]);

        const result = await service.getAll();
        expect(result).toHaveLength(1);
        expect(mockRepo.findAll).toHaveBeenCalledTimes(1);
      });
    });
    ```

---

## 📝 Estándar de Redacción y Auto-documentación (BDD)

Para que las pruebas actúen como la documentación viva del proyecto, adoptamos las prácticas de **Desarrollo Guiado por Comportamiento (BDD)**.

### Reglas de oro:
1.  **Nombre del Componente**: El primer `describe` superior debe indicar exactamente la clase o función bajo prueba.
2.  **Agrupación de Funciones**: Utiliza `describe` anidados con el nombre del método (ej. `describe('login')`).
3.  **Especificación Clara**: Las sentencias `it` deben empezar por el verbo **"debería..."** (o **"should..."**) en español o inglés, describiendo con absoluta claridad la regla de negocio evaluada.

**Correcto (Legible y descriptivo):**
```typescript
describe('UsuariosService', () => {
  describe('login', () => {
    it('debería retornar el usuario autenticado si las credenciales son válidas', async () => { ... });
    it('debería lanzar un error de contraseña incorrecta si el hash no coincide', async () => { ... });
  });
});
```

**Incorrecto (Ambiguo):**
```typescript
describe('Tests de usuarios', () => {
  it('prueba login', () => { ... }); // ¿Qué evalúa? ¿Qué debería pasar?
});
```

---

## 📊 Medición de Cobertura de Código

Al ejecutar `npm run test:coverage`, Vitest compila y corre todos los casos. Al finalizar, genera:
1.  Un resumen interactivo en la terminal con columnas de cobertura de sentencias (`% Stmts`), ramas condicionales (`% Branch`), funciones (`% Funcs`) y líneas (`% Lines`).
2.  Un directorio físico llamado `coverage/` en la raíz del backend.

### Visualizar el reporte interactivo interactivo:
Para ver detalladamente qué líneas no se han cubierto, abre el archivo `backend/coverage/index.html` en cualquier navegador web. Tendrás un panel gráfico premium donde podrás dar doble clic sobre cada archivo de servicio y ver coloreadas de verde las líneas cubiertas, y de rojo las líneas que aún faltan por testear.
