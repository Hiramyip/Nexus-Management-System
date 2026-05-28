import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Cargar variables de entorno del proceso y de archivos .env sin prefijo restrictivo
  const env = loadEnv(mode, process.cwd(), '');
  const hmrPort = env.VITE_HMR_PORT || process.env.VITE_HMR_PORT;
  const clientPort = hmrPort ? parseInt(hmrPort) : undefined;

  return {
    plugins: [react()],
    server: {
      port: 3000,
      host: true,
      strictPort: true,
      watch: {
        usePolling: true,
        ignored: ['**/Dockerfile', '**/.dockerignore', '**/.env*'] // <-- EL ESCUDO CONTRA EL ERROR
      },
      hmr: clientPort ? { clientPort } : undefined,
      allowedHosts: ["nexxusms.duckdns.org", "ft-nexxusms.duckdns.org", "localhost:3000"]
    }
  }
})