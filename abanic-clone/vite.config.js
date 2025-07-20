import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Importações explícitas para PostCSS
const tailwindcss = await import('tailwindcss')
const autoprefixer = await import('autoprefixer')

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss.default(),
        autoprefixer.default()
      ]
    }
  }
})