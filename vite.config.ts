/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    proxy: {
      '/api':
        'https://port-0-jamanchi-back-7xwyjq992llj9hm2l9.sel4.cloudtype.app',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/vitest-setup.ts'],
    coverage: {
      provider: 'v8',
      enabled: true,
      exclude: ['src/assets/**', 'src/style/**', 'src/constants/**'],
      reporter: ['text', 'json-summary', 'json'],
    },
  },
});
