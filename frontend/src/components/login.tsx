import { useState } from "react";
import { LogIn, AlertCircle } from "lucide-react";
import { login } from "../services/auth"; // <-- Importamos la función centralizada de tu auth.ts

interface LoginCredentials {
  username: string;
  password: string;
}

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

    console.log("➡️ [login.tsx] Formulario enviado. Conectando con auth.ts...");

    // Llamamos directamente al servicio centralizado
    const response = await login(credentials);

    setIsLoading(false);

    if (response.success) {
      console.log("🎉 [login.tsx] Login correcto, ejecutando redirección...");
      onLoginSuccess();
    } else {
      // Captura el mensaje de error personalizado que configuramos en auth.ts
      setError(response.message || "Usuario o contraseña incorrectos.");
    }
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
                  <span style={{ color: "#6B1D3E" }} className="text-sm font-medium">{error}</span>
                </div>
              )}

              {/* Username */}
              <div>
                <label
                  className="block text-sm mb-2 font-semibold"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C09447] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Ingresa tu usuario"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  className="block text-sm mb-2 font-semibold"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C09447] focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Ingresa tu contraseña"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 text-white rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ backgroundColor: "#0D5036" }}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Verificando credenciales...</span>
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

          {/* Estado de Seguridad */}
          <div className="mt-6 pt-4 border-t border-gray-100 text-center">
            <p className="text-xs text-gray-400">
              Conexión cifrada hacia servidor Nexxus MS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}