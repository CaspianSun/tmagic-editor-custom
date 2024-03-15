import { defineConfig } from "vite"

export default defineConfig(({ mode }) => {
  const capitalToken = mode
    .split(":")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("")

  const fileName = mode.replace(":", "-")

  return {
    build: {
      cssCodeSplit: false,
      sourcemap: true,
      minify: false,
      target: "esnext",
      outDir: `../editor/public/entry/${fileName}`,

      lib: {
        entry: `.tmagic/${fileName}-entry.ts`,
        name: `magicPreset${capitalToken}s`,
        fileName: "index",
        formats: ["umd"]
      }
    }
  }
})
