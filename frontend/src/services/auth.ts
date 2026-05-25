import { User, Session, LoginCredentials, AuthResponse } from "../types/auth";
import { encryptData, decryptData, hashPassword } from "../utils/crypto";
import { UserRole } from "../types/roles";

const SESSION_STORAGE_KEY = "app_session";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 horas

/**
 * Mock de base de datos de usuarios
 * En producción esto vendría del backend
 */
const MOCK_USERS: Record<string, { password: string; user: User }> = {
  admin: {
    password:
      "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918", // admin123 en SHA-256
    user: {
      id: "1",
      username: "admin",
      email: "admin@empresa.com",
      rol: "Developer",
      nombre: "Administrador",
    },
  },
  capturador: {
    password:
      "e606e38b0d8c19b24cf0ee3808183162ea7cd63ff7912dbb22b5e803286b4446", // captura123 en SHA-256
    user: {
      id: "2",
      username: "capturador",
      email: "capturador@empresa.com",
      rol: "Capturador",
      nombre: "Usuario Capturador",
    },
  },
  analista: {
    password:
      "4e66af5f21f4eedce914e76bfb3c1c8e5e5f1c46b3651b07f5a5a8e8e3f77d6e", // analista123 en SHA-256
    user: {
      id: "3",
      username: "analista",
      email: "analista@empresa.com",
      rol: "Analista",
      nombre: "Usuario Analista",
    },
  },
  coordinador: {
    password:
      "d404559f602eab6fd602ac7680dacbfaadd13630335e951f097af3900e9de176", // coord123 en SHA-256
    user: {
      id: "4",
      username: "coordinador",
      email: "coordinador@empresa.com",
      rol: "Coordinador",
      nombre: "Usuario Coordinador",
    },
  },
  oficios: {
    password:
      "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", // password en SHA-256
    user: {
      id: "5",
      username: "oficios",
      email: "oficios@empresa.com",
      rol: "Consultor Oficios",
      nombre: "Consultor de Oficios",
    },
  },
  ciga: {
    password:
      "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", // password en SHA-256
    user: {
      id: "6",
      username: "ciga",
      email: "ciga@empresa.com",
      rol: "Consultor CIGA",
      nombre: "Consultor CIGA",
    },
  },
  escuelas: {
    password:
      "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", // password en SHA-256
    user: {
      id: "7",
      username: "escuelas",
      email: "escuelas@empresa.com",
      rol: "Consultor Escuelas",
      nombre: "Consultor de Escuelas",
    },
  },
  pct: {
    password:
      "5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8", // password en SHA-256
    user: {
      id: "8",
      username: "pct",
      email: "pct@empresa.com",
      rol: "Consultor PCT",
      nombre: "Consultor PCT",
    },
  },
};

/**
 * Simula llamada al API de autenticación
 */
async function mockAuthAPI(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  // Simular delay del servidor
  await new Promise((resolve) => setTimeout(resolve, 800));

  const hashedPassword = await hashPassword(credentials.password);
  const userRecord = MOCK_USERS[credentials.username];

  if (!userRecord || userRecord.password !== hashedPassword) {
    return {
      success: false,
      message: "Usuario o contraseña incorrectos",
    };
  }

  return {
    success: true,
    user: userRecord.user,
    token: generateToken(),
  };
}

/**
 * Genera un token aleatorio
 */
function generateToken(): string {
  return (
    Math.random().toString(36).substring(2) +
    Date.now().toString(36) +
    Math.random().toString(36).substring(2)
  );
}

/**
 * LOGIN: Autentica al usuario y crea sesión
 */
export async function login(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  try {
    const response = await mockAuthAPI(credentials);

    if (response.success && response.user && response.token) {
      const session: Session = {
        user: response.user,
        token: response.token,
        expiresAt: Date.now() + SESSION_DURATION,
        createdAt: Date.now(),
      };

      // Encriptar y guardar sesión
      const encryptedSession = encryptData(session);
      localStorage.setItem(SESSION_STORAGE_KEY, encryptedSession);
    }

    return response;
  } catch (error) {
    return {
      success: false,
      message: "Error al iniciar sesión",
    };
  }
}

/**
 * GET SESSION: Obtiene la sesión actual
 */
export function getSession(): Session | null {
  try {
    const encryptedSession = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!encryptedSession) return null;

    const session = decryptData<Session>(encryptedSession);
    if (!session) {
      // Si hay error al desencriptar, limpiamos la sesión corrupta
      localStorage.removeItem(SESSION_STORAGE_KEY);
      return null;
    }

    // Verificar si la sesión ha expirado
    if (Date.now() > session.expiresAt) {
      logout();
      return null;
    }

    return session;
  } catch (error) {
    console.error("Error obteniendo sesión:", error);
    // Limpiar sesión corrupta
    localStorage.removeItem(SESSION_STORAGE_KEY);
    return null;
  }
}

/**
 * IS AUTHENTICATED: Verifica si hay sesión activa
 */
export function isAuthenticated(): boolean {
  return getSession() !== null;
}

/**
 * GET CURRENT USER: Obtiene el usuario actual
 */
export function getCurrentUser(): User | null {
  const session = getSession();
  return session?.user || null;
}

/**
 * HAS ROLE: Verifica si el usuario tiene un rol específico
 */
export function hasRole(role: UserRole | UserRole[]): boolean {
  const user = getCurrentUser();
  if (!user) return false;

  if (Array.isArray(role)) {
    return role.includes(user.rol);
  }

  return user.rol === role;
}

/**
 * LOGOUT: Cierra la sesión
 */
export function logout(): void {
  localStorage.removeItem(SESSION_STORAGE_KEY);
}

/**
 * RENEW SESSION: Renueva la sesión
 */
export async function renewSession(): Promise<boolean> {
  const session = getSession();
  if (!session) return false;

  session.expiresAt = Date.now() + SESSION_DURATION;
  const encryptedSession = encryptData(session);
  localStorage.setItem(SESSION_STORAGE_KEY, encryptedSession);

  return true;
}

/**
 * GET SESSION TIME REMAINING: Tiempo restante en minutos
 */
export function getSessionTimeRemaining(): number {
  const session = getSession();
  if (!session) return 0;

  const remaining = session.expiresAt - Date.now();
  return Math.floor(remaining / (60 * 1000));
}