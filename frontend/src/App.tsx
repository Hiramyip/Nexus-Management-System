import { useState, useEffect } from "react";
import { FileText, BarChart3, Users, LogOut, Menu, X, Moon, Sun } from "lucide-react";
import { CapturaReportes } from "./components/captura-reportes";
import { GeneracionReportes } from "./components/generacion-reportes";
import { AdministracionUsuarios } from "./components/administracion-usuarios";
import { Login } from "./components/login";
import { User, getRolePermissions } from "./types/roles";
import {
  isAuthenticated,
  getCurrentUser,
  logout as authLogout,
  getSessionTimeRemaining,
} from "./services/auth";
import { ThemeProvider, useTheme } from "./contexts/theme-context";
import "./styles/global.css"
import "./styles/scrollbar.css";

function AppContent() {
  const { theme, toggleTheme } = useTheme();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [activeSection, setActiveSection] = useState("generacion");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDark = theme === "dark";

  // Limpiar datos antiguos del localStorage al iniciar
  useEffect(() => {
    // Limpiar claves antiguas que ya no usamos
    localStorage.removeItem("currentUser");
    localStorage.removeItem("authToken");
    localStorage.removeItem("sessionExpiry");
  }, []);

  useEffect(() => {
    checkSession();
    const interval = setInterval(() => {
      checkSession();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Agregar o quitar la clase 'dark' del elemento raíz para los estilos del scrollbar
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const checkSession = () => {
    // Si ya tenemos usuario, mantenemos la sesión
    if (currentUser) {
      setIsLoggedIn(true);
      return;
    }
    
    // Verificar si hay una sesión guardada
    if (isAuthenticated()) {
      const user = getCurrentUser();
      if (user) {
        setCurrentUser(user);
        setIsLoggedIn(true);

        const timeRemaining = getSessionTimeRemaining();
        if (timeRemaining < 5 && timeRemaining > 0) {
          console.warn(`La sesión expirará en ${timeRemaining} minutos`);
        }
      }
    }
  };

  const handleLoginSuccess = () => {
    checkSession();
  };

  const handleLogout = () => {
    if (confirm("¿Estás seguro de cerrar sesión?")) {
      authLogout();
      setIsLoggedIn(false);
      setCurrentUser(null);
      setActiveSection("captura");
    }
  };

  if (!isLoggedIn || !currentUser) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }

  const permissions = getRolePermissions(currentUser.rol);

  const menuItems = [
    {
      id: "captura",
      label: "Captura de Reportes",
      icon: FileText,
      visible: permissions.canAccessCaptura,
    },
    {
      id: "generacion",
      label: "Generación de Reportes",
      icon: BarChart3,
      visible: permissions.canAccessGeneracion,
    },
    {
      id: "usuarios",
      label: "Administración de Usuarios",
      icon: Users,
      visible: permissions.canAccessAdminUsuarios,
    },
    { id: "logout", label: "Cerrar Sesión", icon: LogOut, visible: true },
  ].filter((item) => item.visible);

  const handleMenuClick = (id: string) => {
    if (id === "logout") {
      handleLogout();
      return;
    }
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  const renderContent = () => {
    switch (activeSection) {
      case "captura":
        return permissions.canAccessCaptura ? (
          <CapturaReportes
            canEdit={permissions.canEditCaptura}
            canViewTables={permissions.canViewTables}
          />
        ) : (
          <AccessDenied />
        );
      case "generacion":
        return permissions.canAccessGeneracion ? (
          <GeneracionReportes
            allowedReportTypes={permissions.allowedReportTypes}
            userRole={currentUser.rol}
          />
        ) : (
          <AccessDenied />
        );
      case "usuarios":
        return permissions.canAccessAdminUsuarios ? (
          <AdministracionUsuarios currentUserRole={currentUser.rol} />
        ) : (
          <AccessDenied />
        );
      default:
        return menuItems.length > 0 ? renderDefaultSection() : <AccessDenied />;
    }
  };

  const renderDefaultSection = () => {
    const firstAvailableSection = menuItems.find(
      (item) => item.id !== "logout"
    );
    if (firstAvailableSection && activeSection === "captura") {
      return null;
    }
    return <AccessDenied />;
  };

  return (
    <div className={`flex h-screen overflow-hidden ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar Desktop */}
      <aside
        className="hidden md:flex md:w-64 lg:w-72 flex-col"
        style={{ backgroundColor: isDark ? "#4A1229" : "#6B1D3E" }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 lg:p-6 border-b" style={{ borderColor: "#C09447" }}>
            <h1 className="text-lg lg:text-xl xl:text-2xl text-white leading-tight break-words">
              Coordinación de Servicios y Limpieza Urbana
            </h1>
            <p className="text-xs lg:text-sm mt-1" style={{ color: "#C09447" }}>
              Nexxus Management System
            </p>
          </div>

          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                const isLogout = item.id === "logout";

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMenuClick(item.id)}
                      className={`w-full flex items-center gap-3 px-3 lg:px-4 py-3 rounded-lg transition-all ${
                        isActive && !isLogout
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      } ${isLogout ? "mt-4" : ""}`}
                      style={
                        isActive && !isLogout
                          ? { backgroundColor: "#C09447" }
                          : {}
                      }
                    >
                      <Icon size={20} className="flex-shrink-0" />
                      <span className="text-xs lg:text-sm break-words leading-tight">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-4 border-t" style={{ borderColor: "#C09447" }}>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm"
                style={{ backgroundColor: "#0D5036" }}
              >
                {currentUser.nombre
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-white text-sm truncate">
                  {currentUser.nombre}
                </p>
                <p className="text-xs truncate" style={{ color: "#C09447" }}>
                  {currentUser.rol}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 sm:w-80 transform transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backgroundColor: isDark ? "#4A1229" : "#6B1D3E" }}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b" style={{ borderColor: "#C09447" }}>
            <div className="flex items-start justify-between gap-2 mb-2">
              <h1 className="text-base sm:text-lg text-white leading-tight break-words flex-1">
                Coordinación de Servicios y Limpieza Urbana
              </h1>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-1 flex-shrink-0"
              >
                <X size={24} />
              </button>
            </div>
            <p className="text-xs" style={{ color: "#C09447" }}>
              Nexxus Management System
            </p>
          </div>

          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                const isLogout = item.id === "logout";

                return (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMenuClick(item.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive && !isLogout
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      } ${isLogout ? "mt-4" : ""}`}
                      style={
                        isActive && !isLogout
                          ? { backgroundColor: "#C09447" }
                          : {}
                      }
                    >
                      <Icon size={20} className="flex-shrink-0" />
                      <span className="text-sm break-words leading-tight">{item.label}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="p-4 border-t" style={{ borderColor: "#C09447" }}>
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm"
                style={{ backgroundColor: "#0D5036" }}
              >
                {currentUser.nombre
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2)}
              </div>
              <div className="flex-1 overflow-hidden">
                <p className="text-white text-sm truncate">
                  {currentUser.nombre}
                </p>
                <p className="text-xs truncate" style={{ color: "#C09447" }}>
                  {currentUser.rol}
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        {/* Top Bar */}
        <header
          className={`px-4 md:px-6 py-3 md:py-4 border-b flex items-center justify-between gap-3 md:gap-4 ${
            isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}
        >
          <div className="flex items-center gap-3 md:gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
              style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}
            >
              <Menu size={24} />
            </button>
            <h2 className={`text-lg md:text-2xl truncate ${isDark ? 'text-gray-100' : ''}`} style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>
              {menuItems.find((item) => item.id === activeSection)?.label ||
                "Dashboard"}
            </h2>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all ${
              isDark 
                ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' 
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
            style={{ color: isDark ? "#F59E0B" : "#6B1D3E" }}
            title={isDark ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-3 md:p-6">{renderContent()}</main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AccessDenied() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex items-center justify-center h-full p-4">
      <div className="text-center">
        <div
          className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: isDark ? "#7B2D4A" : "#6B1D3E" }}
        >
          <LogOut className="text-white" size={32} />
        </div>
        <h3 className={`text-xl md:text-2xl mb-2 ${isDark ? 'text-gray-100' : ''}`} style={{ color: isDark ? "#D4A574" : "#6B1D3E" }}>
          Acceso Denegado
        </h3>
        <p className={`text-sm md:text-base ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          No tienes permisos para acceder a esta sección
        </p>
      </div>
    </div>
  );
}

