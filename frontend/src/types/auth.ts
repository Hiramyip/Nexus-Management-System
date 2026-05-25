import { UserRole } from "./roles";

// Reutilizar la interfaz User de roles.ts para consistencia
export interface User {
  id: string;
  username: string;
  email: string;
  rol: UserRole;  // Usar 'rol' como en roles.ts
  nombre: string;
}

export interface Session {
  user: User;
  token: string;
  expiresAt: number;
  createdAt: number;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  user?: User;
  token?: string;
  message?: string;
}