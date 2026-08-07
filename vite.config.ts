import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite configuration — Clínica Marfil (demo de sector: landing de captación dental)
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '8451'),
  },
  preview: {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '8451'),
  },
})
