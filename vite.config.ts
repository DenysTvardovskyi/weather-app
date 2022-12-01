import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/views/components'),
      containers: path.resolve(__dirname, './src/views/containers'),
      pages: path.resolve(__dirname, './src/views/pages'),
      interfaces: path.resolve(__dirname, './src/application/interfaces'),
      hook: path.resolve(__dirname, './src/application/hooks'),
      router: path.resolve(__dirname, './src/routes'),
      assets: path.resolve(__dirname, './src/assets'),
      theme: path.resolve(__dirname, './src/theme'),
    },
  },
});