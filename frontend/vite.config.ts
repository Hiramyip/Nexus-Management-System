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
      ignored: ['**/Dockerfile', '**/.dockerignore', '**/.env*']
    },
    hmr: {
      clientPort: 443,
    },
    allowedHosts: ["nexxusms.duckdns.org", "ft-nexxusms.duckdns.org", "localhost:3000"]
  },
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL || 'http://localhost:8000')
  }
})