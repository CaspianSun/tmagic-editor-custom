import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import vueJsx from "@vitejs/plugin-vue-jsx"
import UnoCSS from "unocss/vite"
import { visualizer } from "rollup-plugin-visualizer"

export default defineConfig({
  base: "/code/runtime",
  plugins: [vue(), vueJsx(), UnoCSS(), visualizer()],
  server: {
    host: "0.0.0.0",
    port: 8078,
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@ui": fileURLToPath(new URL("./ui", import.meta.url)),
      "@store": fileURLToPath(new URL("../editor/src/stores", import.meta.url))
    }
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL("./index.html", import.meta.url)),
        preview: fileURLToPath(new URL("./preview.html", import.meta.url))
      }
    }
  },
  optimizeDeps: { esbuildOptions: { define: { global: "globalThis" } } }
})
