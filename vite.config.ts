import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    rollupOptions:{
      external:["node_modules/todomvc-app-css/index.css"]
    }
  },
});
