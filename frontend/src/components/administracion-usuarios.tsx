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

const API_URL = `${import.meta.env.VITE_API_URL}/api/sql/usuarios`;

export function AdministracionUsuarios() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<Usuario | null>(null);
  
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState({
    nombre: "",
    password_user: "",
    rol: "Capturador" as UserRole,
  });
  const [isSaving, setIsSaving] = useState(false);
  const [formError, setFormError] = useState("");

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

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const filteredUsers = usuarios.filter(
    (usuario) =>
      usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.rol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    setIsSaving(true);

    try {
      const url = editingUser ? `${API_URL}/${editingUser.id}` : API_URL;
      const method = editingUser ? "PUT" : "POST";
      
      const bodyData: any = {
        nombre: formData.nombre,
        rol: formData.rol.toLowerCase(),
      };
      
      // La contraseña solo se envía si es un usuario nuevo o si se escribe algo al editar
      if (!editingUser || formData.password_user) {
        bodyData.password_user = formData.password_user;
      }

      const response = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const responseData = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(responseData.error || "Error al procesar la solicitud en SQL Server.");
      }

      await fetchUsuarios();
      setShowModal(false);
      setFormData({ nombre: "", password_user: "", rol: "Capturador" });
      alert(editingUser ? "¡Usuario actualizado correctamente!" : "¡Usuario creado exitosamente!");

    } catch (error: any) {
      console.error("Error en operación de usuario:", error);
      setFormError(error.message || "Error interno de red al guardar.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleEdit = (usuario: Usuario) => {
    setEditingUser(usuario);
    setFormData({
      nombre: usuario.nombre,
      password_user: "", // En blanco por seguridad al editar
      rol: usuario.rol,
    });
    setFormError("");
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("¿Estás seguro de que deseas eliminar permanentemente este usuario?")) {
      try {
        const response = await fetch(`${API_URL}/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          const errData = await response.json().catch(() => ({}));
          throw new Error(errData.error || "No se pudo eliminar el usuario.");
        }
        alert("Usuario eliminado correctamente.");
        await fetchUsuarios();
      } catch (error: any) {
        alert(error.message || "Error al conectar con el servidor.");
      }
    }
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setFormData({ nombre: "", password_user: "", rol: "Capturador" });
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
      default:
        return "#8B4789";
    }
  };

  const getRoleDisplayName = (rol: UserRole) => {
    if (rol.startsWith("Consultor")) {
      return `C. ${rol.split(" ")[1] || ""}`;
    }
    return rol;
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

      {/* Estadísticas */}
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

      {/* Buscador */}
      <div className={`rounded-lg shadow-sm p-6 mb-6 ${isDark ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar por nombre o rol..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              isDark ? 'bg-gray-700 border-gray-600 text-gray-100 focus:ring-amber-400' : 'border-gray-300 focus:ring-[#6B1D3E]'
            }`}
          />
        </div>
      </div>

      {/* Tabla */}
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
                  <th className="px-4 lg:px-6 py-3 text-left text-sm text-white">Usuario</th>
                  <th className="px-4 lg:px-6 py-3 text-left text-sm text-white">Rol</th>
                  <th className="px-4 lg:px-6 py-3 text-left text-sm text-white">Fecha Registro</th>
                  <th className="px-4 lg:px-6 py-3 text-left text-sm text-white">Acciones</th>
                </tr>
              </thead>
              <tbody className={isDark ? "divide-y divide-gray-700" : "divide-y divide-gray-200"}>
                {filteredUsers.map((usuario) => (
                  <tr key={usuario.id} className={isDark ? "hover:bg-gray-700 transition-colors" : "hover:bg-gray-50 transition-colors"}>
                    <td className="px-4 lg:px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-medium" style={{ backgroundColor: "#C09447" }}>
                          {usuario.nombre.slice(0, 2).toUpperCase()}
                        </div>
                        <span className={`text-sm ${isDark ? 'text-gray-200' : ''} font-medium`}>{usuario.nombre}</span>
                      </div>
                    </td>
                    <td className="px-4 lg:px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs text-white font-medium" style={{ backgroundColor: getRoleBadgeColor(usuario.rol) }}>
                        {getRoleDisplayName(usuario.rol)}
                      </span>
                    </td>
                    <td className={`px-4 lg:px-6 py-4 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{usuario.fechaRegistro}</td>
                    <td className="px-4 lg:px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button onClick={() => handleEdit(usuario)} className="p-2 rounded-lg" style={{ color: "#C09447" }}>
                          <Edit2 size={16} />
                        </button>
                        <button onClick={() => handleDelete(usuario.id)} className="p-2 rounded-lg" style={{ color: isDark ? "#D4869D" : "#6B1D3E" }}>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className={`rounded-lg shadow-xl max-w-md w-full p-6 relative ${isDark ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-800'}`}>
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
              <X size={20} />
            </button>

            <h3 className="text-xl mb-4 font-semibold" style={{ color: isDark ? "#F59E0B" : "#6B1D3E" }}>
              {editingUser ? "Modificar Usuario" : "Crear Nuevo Usuario"}
            </h3>

            <form onSubmit={handleFormSubmit}>
              {formError && <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-800 text-xs font-medium">{formError}</div>}

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
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 font-medium">
                    {editingUser ? "Contraseña (dejar en blanco para no cambiar)" : "Contraseña Inicial"}
                  </label>
                  <input
                    type="password"
                    required={!editingUser}
                    placeholder="Mínimo 4 caracteres"
                    value={formData.password_user}
                    onChange={(e) => setFormData({ ...formData, password_user: e.target.value })}
                    disabled={isSaving}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 font-medium">Rol del Sistema</label>
                  <select
                    value={formData.rol}
                    onChange={(e) => setFormData({ ...formData, rol: e.target.value as UserRole })}
                    disabled={isSaving}
                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${isDark ? 'bg-gray-700 border-gray-600 text-white' : 'border-gray-300'}`}
                  >
                    {AVAILABLE_ROLES.map((rol) => (
                      <option key={rol} value={rol}>{rol}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <button type="button" onClick={() => setShowModal(false)} disabled={isSaving} className={`px-5 py-2 border rounded-lg text-sm ${isDark ? 'border-gray-600 hover:bg-gray-700' : 'border-gray-300 hover:bg-gray-50'}`}>
                  Cancelar
                </button>
                <button type="submit" disabled={isSaving} className="px-5 py-2 text-white rounded-lg text-sm font-medium flex items-center gap-2" style={{ backgroundColor: "#0D5036" }}>
                  {isSaving ? "Guardando..." : editingUser ? "Actualizar" : "Crear Usuario"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}