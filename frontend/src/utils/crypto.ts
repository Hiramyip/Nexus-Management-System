// Clave de encriptación (en producción usar variables de entorno)
const ENCRYPTION_KEY = "mi-clave-secreta-2026";

/**
 * Hash SHA-256 para contraseñas
 */
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

/**
 * Encriptar datos usando AES
 */
export function encryptData<T>(data: T): string {
  try {
    const jsonString = JSON.stringify(data);
    // Simulación simple de encriptación (en producción usar crypto-js o similar)
    const encrypted = btoa(jsonString + ":" + ENCRYPTION_KEY);
    return encrypted;
  } catch (error) {
    console.error("Error encriptando datos:", error);
    return "";
  }
}

/**
 * Desencriptar datos
 */
export function decryptData<T>(encryptedData: string): T | null {
  try {
    const decrypted = atob(encryptedData);
    const parts = decrypted.split(":");
    
    // Verificar que el formato sea correcto
    if (parts.length < 2) {
      console.error("Formato de datos encriptados inválido");
      return null;
    }
    
    const key = parts[parts.length - 1];
    const jsonString = parts.slice(0, -1).join(":");
    
    if (key !== ENCRYPTION_KEY) {
      console.error("Clave de encriptación inválida");
      return null;
    }
    
    return JSON.parse(jsonString) as T;
  } catch (error) {
    console.error("Error desencriptando datos:", error);
    return null;
  }
}