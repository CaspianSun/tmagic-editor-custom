import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  server: {
    host: '0.0.0.0',
    port: 8078,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  root: './',
  base: '/code/runtime/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        preview: fileURLToPath(new URL('./preview.html', import.meta.url))
      }
    }
  },
  optimizeDeps: { esbuildOptions: { define: { global: 'globalThis' } } }
})
