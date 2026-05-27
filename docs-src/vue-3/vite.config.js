import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: '../../docs/vue-3',
    emptyOutDir: true
  }
});
