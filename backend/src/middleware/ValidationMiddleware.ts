import { Request, Response, NextFunction } from 'express';

export interface ValidationRule {
  required?: boolean;
  type?: 'string' | 'number' | 'boolean' | 'date' | 'email';
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
  pattern?: RegExp;
  enum?: string[];
  custom?: (value: any) => boolean | string;
}

export interface ValidationSchema {
  [key: string]: ValidationRule;
}

export function validateBody(schema: ValidationSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors: string[] = [];
    const body = req.body;

    for (const [field, rule] of Object.entries(schema)) {
      const value = body[field];

      // Validación de campo requerido
      if (rule.required && (value === undefined || value === null || value === '')) {
        errors.push(`${field} es obligatorio`);
        continue;
      }

      // Si el campo no es requerido y está vacío, saltar validaciones adicionales
      if (!rule.required && (value === undefined || value === null || value === '')) {
        continue;
      }

      // Validación de tipo
      if (rule.type) {
        switch (rule.type) {
          case 'string':
            if (typeof value !== 'string') {
              errors.push(`${field} debe ser un texto`);
            }
            break;
          case 'number':
            if (typeof value !== 'number' || isNaN(value)) {
              errors.push(`${field} debe ser un número`);
            }
            break;
          case 'boolean':
            if (typeof value !== 'boolean') {
              errors.push(`${field} debe ser un valor booleano`);
            }
            break;
          case 'date':
            if (!(value instanceof Date) && isNaN(Date.parse(value))) {
              errors.push(`${field} debe ser una fecha válida`);
            }
            break;
          case 'email':
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
              errors.push(`${field} debe ser un email válido`);
            }
            break;
        }
      }

      // Validación de longitud para strings
      if (rule.minLength && typeof value === 'string' && value.length < rule.minLength) {
        errors.push(`${field} debe tener al menos ${rule.minLength} caracteres`);
      }

      if (rule.maxLength && typeof value === 'string' && value.length > rule.maxLength) {
        errors.push(`${field} debe tener máximo ${rule.maxLength} caracteres`);
      }

      // Validación de rango para números
      if (rule.min !== undefined && typeof value === 'number' && value < rule.min) {
        errors.push(`${field} debe ser mayor o igual a ${rule.min}`);
      }

      if (rule.max !== undefined && typeof value === 'number' && value > rule.max) {
        errors.push(`${field} debe ser menor o igual a ${rule.max}`);
      }

      // Validación de patrón
      if (rule.pattern && typeof value === 'string' && !rule.pattern.test(value)) {
        errors.push(`${field} no cumple con el formato requerido`);
      }

      // Validación de enum
      if (rule.enum && !rule.enum.includes(value)) {
        errors.push(`${field} debe ser uno de: ${rule.enum.join(', ')}`);
      }

      // Validación personalizada
      if (rule.custom) {
        const customResult = rule.custom(value);
        if (customResult !== true) {
          errors.push(typeof customResult === 'string' ? customResult : `${field} no es válido`);
        }
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({
        error: 'Error de validación',
        details: errors
      });
    }

    next();
  };
}

// Esquemas de validación predefinidos
export const validationSchemas = {
  usuario: {
    nombre: {
      required: true,
      type: 'string' as const,
      minLength: 3,
      maxLength: 50,
      pattern: /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ\s]+$/
    },
    password_user: {
      required: true,
      type: 'string' as const,
      minLength: 8,
      maxLength: 100,
      custom: (value: string) => {
        if (!/[A-Z]/.test(value)) return 'La contraseña debe contener al menos una mayúscula';
        if (!/[a-z]/.test(value)) return 'La contraseña debe contener al menos una minúscula';
        if (!/[0-9]/.test(value)) return 'La contraseña debe contener al menos un número';
        return true;
      }
    },
    rol: {
      required: true,
      type: 'string' as const,
      enum: ['admin', 'usuario', 'moderador']
    }
  },

  login: {
    nombre: {
      required: true,
      type: 'string' as const,
      minLength: 3,
      maxLength: 50
    },
    password_user: {
      required: true,
      type: 'string' as const,
      minLength: 8
    }
  },

  eventoInicioSesion: {
    nombreUsuario: {
      required: true,
      type: 'string' as const,
      minLength: 3,
      maxLength: 50
    },
    rol: {
      required: true,
      type: 'string' as const,
      enum: ['admin', 'usuario', 'moderador']
    },
    ip: {
      required: false,
      type: 'string' as const,
      pattern: /^(\d{1,3}\.){3}\d{1,3}$|^::1$|^localhost$/
    }
  },

  infoOficios: {
    idOficio: {
      required: true,
      type: 'number' as const,
      min: 1
    },
    idGrupoTrabajo: {
      required: true,
      type: 'number' as const,
      min: 1
    },
    ubicacion: {
      required: true,
      type: 'string' as const,
      minLength: 3,
      maxLength: 200
    },
    metroLineal: {
      required: false,
      type: 'number' as const,
      min: 0
    },
    metroCuadrado: {
      required: false,
      type: 'number' as const,
      min: 0
    },
    metroCubico: {
      required: false,
      type: 'number' as const,
      min: 0
    },
    peso: {
      required: false,
      type: 'number' as const,
      min: 0
    }
  },

  logReportesGenerados: {
    tipoReporte: {
      required: true,
      type: 'string' as const,
      minLength: 3,
      maxLength: 100
    },
    usuario: {
      required: true,
      type: 'string' as const,
      minLength: 3,
      maxLength: 50
    },
    exito: {
      required: false,
      type: 'boolean' as const
    }
  }
};
