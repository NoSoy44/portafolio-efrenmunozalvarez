import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portafolio-efrenmunozalvarez/', // ← esto debe coincidir con el nombre del repo
  plugins: [
    tailwindcss(),
    react()
  ],
})