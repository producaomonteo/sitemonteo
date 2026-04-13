import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      '@Imagens': path.resolve(__dirname, 'Imagens'),
    },
  },
  plugins: [react()],
  server: {
    port: 8585,
    host: true
  }
})
