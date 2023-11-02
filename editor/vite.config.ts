import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'types/auto-import.d.ts'
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'types/components.d.ts'
    }),
    vue(),
    vueJsx(),
    UnoCSS()
  ],
  base: '/',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  optimizeDeps: { esbuildOptions: { define: { global: 'globalThis' } } }
})
