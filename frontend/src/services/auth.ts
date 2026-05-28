import { User, Session, LoginCredentials, AuthResponse } from "../types/auth";
import { encryptData, decryptData } from "../utils/crypto";
import { UserRole } from "../types/roles";

const SESSION_STORAGE_KEY = "app_session";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 horas
const LOGIN_API_URL = "https://ft-api-nexxusms.duckdns.org/api/sql/usuarios/login";

/**
 * Conexión real al endpoint POST /login del Backend
 */
async function apiAuth(
  credentials: LoginCredentials
): Promise<AuthResponse> {
  try {
    console.log("🚀 [auth.ts] Enviando POST /login para:", credentials.username);

    // 1. Petición POST con texto plano directo hacia el backend
    const response = await fetch(LOGIN_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: credentials.username,
        password_user: credentials.password // Texto plano puro para hacer match directo
      }),
    });

    // 2. Si el backend responde con error (401, etc.)
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error("❌ [auth.ts] Error devuelto por el backend:", errorData);
      return {
        success: false,
        message: errorData.error || "Usuario o contraseña incorrectos.",
      };
    }

    // 3. Respuesta exitosa del backend
    const userRecord = await response.json();
    console.log("✅ [auth.ts] Autenticado con éxito. Datos recibidos:", userRecord);

    // 4. Normalizar el rol de minúsculas de la BD a Capitalizado para el Frontend
    const dbRole = userRecord.rol || "Capturador";
    const normalRole = (dbRole.charAt(0).toUpperCase() + dbRole.slice(1)) as UserRole;

    return {
      success: true,
      user: {
        id: (userRecord.idUsuario || userRecord.id || "1").toString(),
        username: userRecord.nombre,
        email: userRecord.email || `${userRecord.nombre.toLowerCase()}@empresa.com`,
        rol: normalRole,
        nombre: userRecord.nombre,
      },
      token: "session-token-" + Math.random().toString(36).substring(2),
    };

  } catch (error) {
    console.error("💥 [auth.ts] Error crítico de red:", error);
    return {
      success: false,
      message: "No se pudo conectar con el servidor. Verifica tu internet o proxy.",
    };
  }
}

/**
 * LOGIN: Autentica al usuario mediante el API y guarda la sesión cifrada
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

export function getSession(): Session | null {
  try {
    const encryptedSession = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!encryptedSession) return null;

    const session = decryptData<Session>(encryptedSession);
    if (!session) {
      localStorage.removeItem(SESSION_STORAGE_KEY);
      return null;
    }

    if (Date.now() > session.expiresAt) {
      logout();
      return null;
    }

    return session;
  } catch (error) {
    localStorage.removeItem(SESSION_STORAGE_KEY);
    return null;
  }
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}

export function getCurrentUser(): User | null {
  const session = getSession();
  return session?.user || null;
}

export function hasRole(role: UserRole | UserRole[]): boolean {
  const user = getCurrentUser();
  if (!user) return false;

  if (Array.isArray(role)) {
    return role.includes(user.rol);
  }
  return user.rol === role;
}

export function logout(): void {
  localStorage.removeItem(SESSION_STORAGE_KEY);
}

export function renewSession(): Promise<boolean> {
  const session = getSession();
  if (!session) return Promise.resolve(false);

  session.expiresAt = Date.now() + SESSION_DURATION;
  const encryptedSession = encryptData(session);
  localStorage.setItem(SESSION_STORAGE_KEY, encryptedSession);
  return Promise.resolve(true);
}

export function getSessionTimeRemaining(): number {
  const session = getSession();
  if (!session) return 0;

  const remaining = session.expiresAt - Date.now();
  return Math.floor(remaining / (60 * 1000));
}