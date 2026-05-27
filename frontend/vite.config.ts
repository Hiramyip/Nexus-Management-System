import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    strictPort: true,
    watch: {
      usePolling: true,
      ignored: ['**/Dockerfile', '**/.dockerignore', '**/.env*'] // <-- EL ESCUDO CONTRA EL ERROR
    },
    hmr: {
      clientPort: 443, // Le dice a Vite que use el puerto seguro estándar de Nginx
    },
    allowedHosts: ["nexxusms.duckdns.org", "ft-nexxusms.duckdns.org", "localhost:3000"]
  }
})