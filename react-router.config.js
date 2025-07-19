import { vercelSPA } from '@vercel/react-router/vite';

export default {
  ssr: false, // Modo SPA
  presets: [vercelSPA()],
};