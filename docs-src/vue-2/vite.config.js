import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: '../../docs/vue-2',
    emptyOutDir: true
  }
});
