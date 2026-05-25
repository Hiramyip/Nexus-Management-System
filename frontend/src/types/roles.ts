export type UserRole =
  | "Developer"
  | "Analista"
  | "Capturador"
  | "Coordinador"
  | "Consultor Oficios"
  | "Consultor CIGA"
  | "Consultor Escuelas"
  | "Consultor PCT";

export interface User {
  id: string;
  username?: string; // Opcional para compatibilidad con auth
  nombre: string;
  email: string;
  rol: UserRole;
}

export interface RolePermissions {
  canAccessCaptura: boolean;
  canAccessGeneracion: boolean;
  canAccessAdminUsuarios: boolean;
  canEditCaptura: boolean;
  canViewTables: boolean;
  allowedReportTypes?: string[]; // Para consultores específicos
}

export const getRolePermissions = (role: UserRole): RolePermissions => {
  switch (role) {
    case "Developer":
      return {
        canAccessCaptura: true,
        canAccessGeneracion: true,
        canAccessAdminUsuarios: true,
        canEditCaptura: true,
        canViewTables: true,
      };

    case "Analista":
      return {
        canAccessCaptura: false,
        canAccessGeneracion: true,
        canAccessAdminUsuarios: false,
        canEditCaptura: false,
        canViewTables: true,
      };

    case "Capturador":
      return {
        canAccessCaptura: true,
        canAccessGeneracion: false,
        canAccessAdminUsuarios: false,
        canEditCaptura: true,
        canViewTables: false,
      };

    case "Coordinador":
      return {
        canAccessCaptura: true,
        canAccessGeneracion: true,
        canAccessAdminUsuarios: true,
        canEditCaptura: true,
        canViewTables: true,
      };

    case "Consultor Oficios":
      return {
        canAccessCaptura: false,
        canAccessGeneracion: true,
        canAccessAdminUsuarios: false,
        canEditCaptura: false,
        canViewTables: true,
        allowedReportTypes: ["Oficios"],
      };

    case "Consultor CIGA":
      return {
        canAccessCaptura: false,
        canAccessGeneracion: true,
        canAccessAdminUsuarios: false,
        canEditCaptura: false,
        canViewTables: true,
        allowedReportTypes: ["CIGA"],
      };

    case "Consultor Escuelas":
      return {
        canAccessCaptura: false,
        canAccessGeneracion: true,
        canAccessAdminUsuarios: false,
        canEditCaptura: false,
        canViewTables: true,
        allowedReportTypes: ["Escuelas"],
      };

    case "Consultor PCT":
      return {
        canAccessCaptura: false,
        canAccessGeneracion: true,
        canAccessAdminUsuarios: false,
        canEditCaptura: false,
        canViewTables: true,
        allowedReportTypes: ["PCT"],
      };

    default:
      return {
        canAccessCaptura: false,
        canAccessGeneracion: false,
        canAccessAdminUsuarios: false,
        canEditCaptura: false,
        canViewTables: false,
      };
  }
};

export const AVAILABLE_ROLES: UserRole[] = [
  "Developer",
  "Analista",
  "Capturador",
  "Coordinador",
  "Consultor Oficios",
  "Consultor CIGA",
  "Consultor Escuelas",
  "Consultor PCT",
];