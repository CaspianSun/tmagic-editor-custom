import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import UnoCSS from "unocss/vite"
import AutoImport from "unplugin-auto-import/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { visualizer } from "rollup-plugin-visualizer"

export default defineConfig({
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: "types/auto-import.d.ts"
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: "types/components.d.ts"
    }),
    vue(),
    vueJsx(),
    UnoCSS(),
    visualizer()
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  base: "/code/editor/",
  server: {
    host: "0.0.0.0",
    port: 8098,
    strictPort: true,
    proxy: {
      "^/code/runtime": {
        target: "http://127.0.0.1:8078",
        changeOrigin: true,
        prependPath: false
      }
    }
  },
  optimizeDeps: {
    esbuildOptions: { define: { global: "globalThis" } }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: (e) => {
          if (e.includes("/node_modules/monaco-editor/")) return "monaco"
          else if (e.includes("/node_modules/lodash-es")) return "lodash-es"
          else return "vendor"
        }
      }
    }
  }
})
