import { useState, useEffect } from "react";
import { UserPlus, Edit2, Trash2, Search, X } from "lucide-react";
import { AVAILABLE_ROLES, UserRole } from "../types/roles";
import { useTheme } from "../contexts/theme-context";

interface Usuario {
  id: number;
  nombre: string;
  rol: UserRole;
  fechaRegistro: string;
}

const API_URL = "https://ft-api-nexxusms.duckdns.org/api/sql/usuarios";

export function AdministracionUsuarios({
  currentUserRole,
}: {
  currentUserRole: string;
}) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<Usuario | null>(null);
  
  // Estados para la carga y lista de usuarios
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Estados para el formulario de nuevo usuario
  const [formData, setFormData] = useState({
    nombre: "",
    password_user: "",
    rol: "Capturador" as UserRole,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [formError, setFormError] = useState("");

  // Función centralizada para traer los usuarios del backend
  const fetchUsuarios = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error("Fallo al conectar con el API.");
      
      const data = await response.json();
      
      const mappedUsuarios: Usuario[] = data.map((u: any) => {
        const dbRole = u.rol || "Capturador";
        const formattedRole = (dbRole.charAt(0).toUpperCase() + dbRole.slice(1)) as UserRole;
        
        const fechaLegible = u.fechaRegistro 
          ? new Date(u.fechaRegistro).toLocaleDateString("es-MX", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric"
            })
          : "Sin Fecha";

        return {
          id: u.idUsuario,
          nombre: u.nombre || "Usuario sin nombre",
          rol: formattedRole,
          fechaRegistro: fechaLegible
        };
      });

      setUsuarios(mappedUsuarios);
    } catch (error) {
      console.error("Error cargando usuarios:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Cargar usuarios al montar el componente
  useEffect(() => {
    fetchUsuarios();
  }, []);

  const filteredUsers = usuarios.filter(
    (usuario) =>
      usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.rol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Manejador para enviar el formulario de creación de usuario
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setIsSaving(true);

    try {
      // Enviamos los campos con la contraseña tal cual (en texto plano)
      // para que coincida con la configuración actual de tu API /login
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          password_user: formData.password_user,
          rol: formData.rol.toLowerCase(), // Lo mandamos en minúsculas como lo guarda tu DB
        }),
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(responseData.error || "No se pudo registrar el usuario en SQL Server.");
      }

      // Si todo sale bien, refrescamos la tabla, cerramos modal y reseteamos campos
      await fetchUsuarios();
      setShowModal(false);
      setFormData({ nombre: "", password_user: "", rol: "Capturador" });
      alert("¡Usuario creado exitosamente en el sistema!");

    } catch (error: any) {
      console.error("Error al crear usuario:", error);
      setFormError(error.message || "Error interno de red al guardar.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = (usuario: Usuario) => {
    setEditingUser(usuario);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("¿Estás seguro de eliminar este usuario?")) {
      alert(`La función de eliminación está desactivada temporalmente. Usuario afectando: ${id}`);
    }
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setFormError("");
    setShowModal(true);
  };

  const getRoleBadgeColor = (rol: UserRole) => {
    switch (rol) {
      case "Developer":
      case "Coordinador":
        return "#6B1D3E";
      case "Analista":
        return "#C09447";
      case "Capturador":
        return "#0D5036";
      case "Consultor Oficios":
      case "Consultor CIGA":
      case "Consultor Escuelas":
      case "Consultor PCT":
        return "#8B4789";
      default:
        return "#0D5036";
    }
  };

  const getRoleDisplayName = (rol: UserRole) => {
    switch (rol) {
      case "Consultor Oficios":
        return "C. Oficios";
      case "Consultor CIGA":
        return "C. CIGA";
      case "Consultor Escuelas":
        return "C. Escuelas";
      case "Consultor PCT":
        return "C. PCT";
      default:
        return rol;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h3 className={`text-xl mb-1 ${isDark ? 'text-amber-400' : ''}`} style={isDark ? {} : { color: "#6B1D3E" }}>
            Gestión de Usuarios
          </h3>
          <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>Administra los usuarios del sistema</p>
        </div>
        <button
          onClick={handleAddUser}
          className="px-6 py-2 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 w-fit font-medium"
          style={{ backgroundColor: "#0D5036" }}
        >
          <UserPlus size={18} />
          Agregar Usuario
        </button>
      </div>

      {/* Estadísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className={`rounded-lg shadow-sm p-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Usuarios en Red</p>
          <p className="text-2xl mt-1 font-bold" style={{ color: isDark ? "#D4869D" : "#6B1D3E" }}>
            {isLoading ? "..." : usuarios.length}
          </p>
        </div>
        <div className={`rounded-lg shadow-sm p-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Administradores / Devs</p>
          <p className="text-2xl mt-1 font-bold" style={{ color: "#C09447" }}>
            {isLoading ? "..." : usuarios.filter((u) => u.rol === "Developer" || u.rol === "Coordinador").length}
          </p>
        </div>
        <div className={`rounded-lg shadow-sm p-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Consultores Especializados</p>
          <p className="text-2xl mt-1 font-bold" style={{ color: isDark ? "#D4869D" : "#6B1D3E" }}>
            {isLoading ? "..." : usuarios.filter((u) => u.rol.startsWith("Consultor")).length}
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className={`rounded-lg shadow-sm p-6 mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Buscar por nombre o rol..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              isDark 
                ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-amber-400' 
                : 'border-gray-300 focus:ring-[#6B1D3E]'
            }`}
          />
        </div>
      </div>

      {/* Tabla de Usuarios */}
      <div className={`rounded-lg shadow-sm overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="overflow-x-auto">
          {isLoading ? (
            <div className="p-10 text-center flex flex-col items-center justify-center gap-3">
              <div className="w-8 h-8 border-4 border-[#6B1D3E] border-t-transparent rounded-full animate-spin" />
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>Sincronizando con base de datos SQL Server...</p>
            </div>
          ) : (
            <table className="w-full min-w-[640px]">
              <thead style={{ backgroundColor: "#6B1D3E" }}>
                <tr>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">Usuario</th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">Rol</th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">Fecha Registro</th>
                  <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">Acciones</th>
                </tr>
              </thead>
              <tbody className={isDark ? "divide-y divide-gray-700" : "divide-y divide-gray-200"}>
                {filteredUsers.map((usuario) => (
                  <tr
                    key={usuario.id}
                    className={isDark ? "hover:bg-gray-700 transition-colors" : "hover:bg-gray-50 transition-colors"}
                  >
                    <td className="px-4 lg:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0 font-medium animate-fade-in"
                          style={{ backgroundColor: "#C09447" }}
                        >
                          {usuario.nombre
                            .split(" ")
                            .map((n) => n)
                            .join("")
                            .toUpperCase()
                            .slice(0, 2)}
                        </div>
                        <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-200' : ''} break-words font-medium`}>{usuario.nombre}</span>
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4">
                      <span
                        className="px-2 sm:px-3 py-1 rounded-full text-xs text-white whitespace-nowrap font-medium"
                        style={{ backgroundColor: getRoleBadgeColor(usuario.rol) }}
                      >
                        {getRoleDisplayName(usuario.rol)}
                      </span>
                    </td>
                    <td className={`px-4 lg:px-6 py-4 text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} whitespace-nowrap`}>
                      {usuario.fechaRegistro}
                    </td>
                    <td className="px-4 lg:px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEdit(usuario)}
                          className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}
                          style={{ color: "#C09447" }}
                          aria-label="Ver detalle de usuario"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(usuario.id)}
                          className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-gray-600' : 'hover:bg-gray-100'}`}
                          style={{ color: isDark ? "#D4869D" : "#6B1D3E" }}
                          aria-label="Eliminar usuario"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Modal Re-Activado para Crear e Inyectar Datos */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className={`rounded-lg shadow-xl max-w-md w-full p-6 relative ${isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}>
            
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl mb-4 font-semibold" style={{ color: isDark ? "#F59E0B" : "#6B1D3E" }}>
              {editingUser ? "Detalle del Usuario" : "Crear Nuevo Usuario"}
            </h3>

            {editingUser ? (
              /* MODO DETALLE (SOLO LECTURA) */
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Nombre Completo</p>
                  <p className="text-base font-medium">{editingUser.nombre}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Rol de Acceso</p>
                  <p className="text-base font-medium">{getRoleDisplayName(editingUser.rol)}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Fecha de Alta en SQL</p>
                  <p className="text-base font-medium">{editingUser.fechaRegistro}</p>
                </div>
                <div className="flex justify-end mt-6">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-6 py-2 text-white rounded-lg font-medium hover:opacity-90"
                    style={{ backgroundColor: "#0D5036" }}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            ) : (
              /* MODO CREACIÓN (FORMULARIO ACTIVO HACIENDO POST) */
              <form onSubmit={handleFormSubmit}>
                {formError && (
                  <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-800 text-xs font-medium">
                    {formError}
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1 font-medium">Nombre de Usuario / Alias</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej: DaniDev"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      disabled={isSaving}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        isDark ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1 font-medium">Contraseña Inicial</label>
                    <input
                      type="password"
                      required
                      placeholder="Mínimo 4 caracteres"
                      value={formData.password_user}
                      onChange={(e) => setFormData({ ...formData, password_user: e.target.value })}
                      disabled={isSaving}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        isDark ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-sm mb-1 font-medium">Rol del Sistema</label>
                    <select
                      value={formData.rol}
                      onChange={(e) => setFormData({ ...formData, rol: e.target.value as UserRole })}
                      disabled={isSaving}
                      className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                        isDark ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'
                      }`}
                    >
                      {AVAILABLE_ROLES.map((rol) => (
                        <option key={rol} value={rol}>
                          {rol}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    disabled={isSaving}
                    className={`px-5 py-2 border rounded-lg text-sm font-medium ${
                      isDark ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-5 py-2 text-white rounded-lg text-sm font-medium hover:opacity-90 disabled:opacity-50 flex items-center gap-2"
                    style={{ backgroundColor: "#0D5036" }}
                  >
                    {isSaving ? "Guardando..." : "Crear Usuario"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  