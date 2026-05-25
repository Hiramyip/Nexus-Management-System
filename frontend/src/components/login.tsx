import { useState } from "react";
import { LogIn, AlertCircle } from "lucide-react";
import { Session } from "../types/auth";
import { encryptData } from "../utils/crypto";

interface LoginCredentials {
  username: string;
  password: string;
}

const SESSION_STORAGE_KEY = "app_session";
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 horas

export function Login({ onLoginSuccess }: { onLoginSuccess: () => void }) {
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simulamos un pequeño delay para dar feedback visual
    setTimeout(() => {
      // Por ahora, permitimos el acceso sin validación
      // TODO: Implementar validación real de usuarios y contraseñas
      
      // Creamos un usuario demo basado en el username ingresado
      const mockUser = {
        id: "1",
        username: credentials.username,
        email: `${credentials.username}@empresa.com`,
        rol: "Developer" as const, // Por defecto damos rol Developer para acceso completo
        nombre: credentials.username.charAt(0).toUpperCase() + credentials.username.slice(1),
      };

      // Generamos un token aleatorio
      const token = Math.random().toString(36).substring(2) + Date.now().toString(36);

      // Creamos la sesión en el formato esperado por el servicio auth
      const session: Session = {
        user: mockUser,
        token: token,
        expiresAt: Date.now() + SESSION_DURATION,
        createdAt: Date.now(),
      };

      // Encriptamos y guardamos la sesión usando la misma clave que auth.ts
      const encryptedSession = encryptData(session);
      localStorage.setItem(SESSION_STORAGE_KEY, encryptedSession);
      
      setIsLoading(false);
      onLoginSuccess();
    }, 500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="min-h-screen h-screen flex items-center justify-center"
      style={{ backgroundColor: "#6B1D3E" }}
    >
      <div className="w-full max-w-md">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div
            className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#C09447" }}
          >
            <LogIn className="text-white" size={40} />
          </div>
          <h1 className="text-3xl text-white mb-2">
            Nexxus Management System
          </h1>
          <p style={{ color: "#C09447" }}>
            Ingresa tus credenciales para continuar
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg shadow-xl p-8">
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              {/* Error Message */}
              {error && (
                <div
                  className="p-4 rounded-lg flex items-center gap-3"
                  style={{ backgroundColor: "#FEE2E2" }}
                >
                  <AlertCircle size={20} style={{ color: "#6B1D3E" }} />
                  <span style={{ color: "#6B1D3E" }}>{error}</span>
                </div>
              )}

              {/* Username */}
              <div>
                <label
                  className="block text-sm mb-2"
                  style={{ color: "#6B1D3E" }}
                >
                  Usuario
                </label>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ focusRing: "#C09447" }}
                  placeholder="Ingresa tu usuario"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  className="block text-sm mb-2"
                  style={{ color: "#6B1D3E" }}
                >
                  Contraseña
                </label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ focusRing: "#C09447" }}
                  placeholder="Ingresa tu contraseña"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ backgroundColor: "#0D5036" }}
              >
                {isLoading ? (
                  <>
                    <div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                    />
                    <span>Iniciando sesión...</span>
                  </>
                ) : (
                  <>
                    <LogIn size={20} />
                    <span>Iniciar Sesión</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Usuarios de prueba */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-600 mb-2">Nota: Ingresa cualquier usuario y contraseña para acceder (sin validación por ahora)</p>
            <p className="text-xs text-gray-500 italic">La validación real se implementará posteriormente</p>
          </div>
        </div>
      </div>
    </div>
  );
}