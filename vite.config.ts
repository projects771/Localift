import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Base path for GitHub Pages deployment (https://projects771.github.io/localift/)
  base: process.env.NODE_ENV === 'production' ? '/localift/' : '/',
})
