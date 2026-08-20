import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const vueRuntime = fileURLToPath(new URL('./node_modules/vue/dist/vue.esm-bundler.js', import.meta.url));

export default defineConfig({
  base: './',
  resolve: {
    dedupe: ['vue'],
    alias: [{ find: /^vue$/, replacement: vueRuntime }]
  },
  define: {
    __VUE_OPTIONS_API__: true,
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  },
  build: {
    outDir: '../../docs/vue-3',
    emptyOutDir: true
  }
});
