import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path'; // Importe o módulo path

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer()
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Configuração correta do alias
      '@/lib/utils': path.resolve(__dirname, './src/lib/utils.js') // Caminho absoluto
    }
  }
});