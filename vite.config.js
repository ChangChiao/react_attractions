import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Mirror the old sass-resources-loader behaviour: inject these globally
// into every scss module (same as config-overrides.js used to do).
const globalScss = [
  path.resolve(__dirname, "src/style/setting/base.scss"),
  path.resolve(__dirname, "src/style/tools/all.scss"),
]
  .map((file) => `@import "${file.replace(/\\/g, "/")}";`)
  .join("\n");

export default defineConfig({
  plugins: [react()],
  // gh-pages serves from /docs with relative asset paths
  base: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: globalScss,
      },
    },
  },
});
