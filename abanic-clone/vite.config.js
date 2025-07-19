import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Garante que a aplicação funcione na raiz do domínio
  build: {
    outDir: 'dist', // Diretório de saída para o build
    assetsDir: 'assets', // Diretório para os assets
    sourcemap: true, // Opcional: gera sourcemaps para debugging
  },
  server: {
    port: 3000, // Opcional: define a porta para o servidor de desenvolvimento
  },
});