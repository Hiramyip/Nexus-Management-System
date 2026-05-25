import { useState } from "react";
import { UserPlus, Edit2, Trash2, Search } from "lucide-react";
import { AVAILABLE_ROLES, UserRole } from "../types/roles";
import { useTheme } from "../contexts/theme-context";

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: UserRole;
  fechaRegistro: string;
}

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

  const usuarios: Usuario[] = [
    {
      id: 1,
      nombre: "María González",
      email: "maria.gonzalez@empresa.com",
      rol: "Developer",
      fechaRegistro: "01/02/2026",
    },
    {
      id: 2,
      nombre: "Juan Pérez",
      email: "juan.perez@empresa.com",
      rol: "Capturador",
      fechaRegistro: "15/03/2026",
    },
    {
      id: 3,
      nombre: "Ana Martínez",
      email: "ana.martinez@empresa.com",
      rol: "Analista",
      fechaRegistro: "22/04/2026",
    },
    {
      id: 4,
      nombre: "Carlos Rodríguez",
      email: "carlos.rodriguez@empresa.com",
      rol: "Coordinador",
      fechaRegistro: "10/05/2026",
    },
    {
      id: 5,
      nombre: "Laura Fernández",
      email: "laura.fernandez@empresa.com",
      rol: "Consultor Oficios",
      fechaRegistro: "12/05/2026",
    },
    {
      id: 6,
      nombre: "Pedro Sánchez",
      email: "pedro.sanchez@empresa.com",
      rol: "Consultor CIGA",
      fechaRegistro: "14/05/2026",
    },
    {
      id: 7,
      nombre: "Sofía López",
      email: "sofia.lopez@empresa.com",
      rol: "Consultor Escuelas",
      fechaRegistro: "16/05/2026",
    },
    {
      id: 8,
      nombre: "Diego Torres",
      email: "diego.torres@empresa.com",
      rol: "Consultor PCT",
      fechaRegistro: "17/05/2026",
    },
  ];

  const filteredUsers = usuarios.filter(
    (usuario) =>
      usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.rol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (usuario: Usuario) => {
    setEditingUser(usuario);
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("¿Estás seguro de eliminar este usuario?")) {
      alert(`Usuario ${id} eliminado`);
    }
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setShowModal(true);
  };

  const getRoleBadgeColor = (rol: UserRole) => {
    switch (rol) {
      case "Developer":
        return "#6B1D3E";
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
          className="px-6 py-2 text-white rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 w-fit"
          style={{ backgroundColor: "#0D5036" }}
        >
          <UserPlus size={18} />
          Agregar Usuario
        </button>
      </div>

      {/* Estadísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className={`rounded-lg shadow-sm p-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Total Usuarios</p>
          <p className="text-2xl mt-1" style={{ color: isDark ? "#D4869D" : "#6B1D3E" }}>
            {usuarios.length}
          </p>
        </div>
        <div className={`rounded-lg shadow-sm p-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Administradores</p>
          <p className="text-2xl mt-1" style={{ color: "#C09447" }}>
            {
              usuarios.filter(
                (u) => u.rol === "Developer" || u.rol === "Coordinador"
              ).length
            }
          </p>
        </div>
        <div className={`rounded-lg shadow-sm p-4 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Consultores</p>
          <p className="text-2xl mt-1" style={{ color: isDark ? "#D4869D" : "#6B1D3E" }}>
            {
              usuarios.filter((u) =>
                u.rol.startsWith("Consultor")
              ).length
            }
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
                ? 'bg-gray-700 border-gray-600 text-gray-100' 
                : 'border-gray-300'
            }`}
            style={{ focusRing: "#C09447" }}
          />
        </div>
      </div>

      {/* Tabla de Usuarios */}
      <div className={`rounded-lg shadow-sm overflow-hidden ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead style={{ backgroundColor: "#6B1D3E" }}>
              <tr>
                <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">
                  Usuario
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">Rol</th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">
                  Fecha Registro
                </th>
                <th className="px-4 lg:px-6 py-3 text-left text-xs sm:text-sm text-white whitespace-nowrap">
                  Acciones
                </th>
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
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white flex-shrink-0"
                        style={{ backgroundColor: "#C09447" }}
                      >
                        {usuario.nombre
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .toUpperCase()
                          .slice(0, 2)}
                      </div>
                      <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-200' : ''} break-words`}>{usuario.nombre}</span>
                    </div>
                  </td>
                  <td className="px-4 lg:px-6 py-4">
                    <span
                      className="px-2 sm:px-3 py-1 rounded-full text-xs text-white whitespace-nowrap"
                      style={{
                        backgroundColor: getRoleBadgeColor(usuario.rol),
                      }}
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
                        aria-label="Editar usuario"
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
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-lg shadow-xl max-w-md w-full p-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-xl mb-4 ${isDark ? 'text-amber-400' : ''}`} style={isDark ? {} : { color: "#6B1D3E" }}>
              {editingUser ? "Editar Usuario" : "Nuevo Usuario"}
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  editingUser
                    ? "Usuario actualizado exitosamente"
                    : "Usuario creado exitosamente"
                );
                setShowModal(false);
              }}
            >
              <div className="space-y-4">
                <div>
                  <label
                    className={`block text-sm mb-2 ${isDark ? 'text-gray-300' : ''}`}
                    style={isDark ? {} : { color: "#6B1D3E" }}
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    defaultValue={editingUser?.nombre}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-gray-100' 
                        : 'border-gray-300'
                    }`}
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm mb-2 ${isDark ? 'text-gray-300' : ''}`}
                    style={isDark ? {} : { color: "#6B1D3E" }}
                  >
                    Rol
                  </label>
                  <select
                    defaultValue={editingUser?.rol}
                    required
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                      isDark 
                        ? 'bg-gray-700 border-gray-600 text-gray-100' 
                        : 'border-gray-300'
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
                  className={`px-6 py-2 border rounded-lg transition-colors ${
                    isDark 
                      ? 'border-gray-600 hover:bg-gray-700' 
                      : 'border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#0D5036" }}
                >
                  {editingUser ? "Actualizar" : "Crear"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}