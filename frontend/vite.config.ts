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
    allowedHosts: [
      "nexxusms.duckdns.org",
      "ft-nexxusms.duckdns.org",
      "nexus-management-system-gamma.vercel.app",
      "localhost:3000"
    ]
  },
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify(
      process.env.VITE_API_URL || 'https://nexus-backend-2pm4.onrender.com'
    )
  }
})