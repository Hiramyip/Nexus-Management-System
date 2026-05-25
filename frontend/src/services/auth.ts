import { User, Session, LoginCredentials, AuthResponse } from "../types/auth";
import { encryptData, decryptData, hashPassword } from "../utils/crypto";
import { UserRole } from "../types/roles";

const SESSION_STORAGE_KEY = "app_session";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 horas
const API_URL = "https://ft-api-nexxusms.duckdns.org/api/sql/usuarios";

/**
 * Conexión real al API de autenticación en SQL Server
 */
async function apiAuth(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  try {
    // 1. Consultamos la lista de usuarios reales desde el backend
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return {
        success: false,
        message: "No se pudo conectar con el servidor de credenciales.",
      };
    }

    const usuarios: any[] = await response.json();

    // 2. Pasamos la contraseña ingresada por el algoritmo SHA-256 del front
    const hashedPassword = await hashPassword(credentials.password);

    // 3. Buscamos el registro que coincida (nombre y password_user con hash)
    const userRecord = usuarios.find(
      (u) =>
        u.nombre?.toLowerCase() === credentials.username.toLowerCase() &&
        u.password_user === hashedPassword
    );

    if (!userRecord) {
      return {
        success: false,
        message: "Usuario o contraseña incorrectos",
      };
    }

    // 4. Mapeamos el rol de minúsculas (db) a formato Capitalizado (frontend)
    // Ejemplo: "developer" -> "Developer"
    const normalRole = (userRecord.rol.charAt(0).toUpperCase() + userRecord.rol.slice(1)) as UserRole;

    // 5. Estructuramos la respuesta exitosa para el estado global
    return {
      success: true,
      user: {
        id: userRecord.id?.toString() || "gen-" + Math.random().toString(36).substring(4),
        username: userRecord.nombre,
        email: userRecord.email || `${userRecord.nombre.toLowerCase()}@empresa.com`,
        rol: normalRole,
        nombre: userRecord.nombre,
      },
      token: Math.random().toString(36).substring(2) + Date.now().toString(36),
    };

  } catch (error) {
    console.error("Error en el servicio de autenticación:", error);
    return {
      success: false,
      message: "Error de red al conectar con el servidor de base de datos.",
    };
  }
}

/**
 * LOGIN: Autentica al usuario y crea sesión en el LocalStorage
 */
export async function login(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  try {
    const response = await apiAuth(credentials);

    if (response.success && response.user && response.token) {
      const session: Session = {
        user: response.user,
        token: response.token,
        expiresAt: Date.now() + SESSION_DURATION,
        createdAt: Date.now(),
      };

      // Encriptar y guardar sesión en LocalStorage
      const encryptedSession = encryptData(session);
      localStorage.setItem(SESSION_STORAGE_KEY, encryptedSession);
    }

    return response;
  } catch (error) {
    return {
      success: false,
      message: "Error crítico al procesar el inicio de sesión",
    };
  }
}

/**
 * GET SESSION: Obtiene y desencripta la sesión actual del almacenamiento
 */
export function getSession(): Session | null {
  try {
    const encryptedSession = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!encryptedSession) return null;

    const session = decryptData<Session>(encryptedSession);
    if (!session) {
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
 * GET CURRENT USER: Obtiene el objeto del usuario logueado
 */
export function getCurrentUser(): User | null {
  const session = getSession();
  return session?.user || null;
}

/**
 * HAS ROLE: Verifica si el usuario cuenta con los roles solicitados
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
 * LOGOUT: Cierra la sesión borrando los tokens locales
 */
export function logout(): void {
  localStorage.removeItem(SESSION_STORAGE_KEY);
}

/**
 * RENEW SESSION: Extiende el tiempo de expiración de la sesión actual
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
 * GET SESSION TIME REMAINING: Obtiene el tiempo restante en minutos
 */
export function getSessionTimeRemaining(): number {
  const session = getSession();
  if (!session) return 0;

  const remaining = session.expiresAt - Date.now();
  return Math.floor(remaining / (60 * 1000));
}