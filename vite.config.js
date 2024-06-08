// vite.config.ts
import Inspect from "vite-plugin-inspect";
import checker from "vite-plugin-checker";
import { resolve } from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { defineConfig } from "vite";
import { strict } from "assert";
import  injectHTML  from "vite-plugin-html-inject";

export default {
  base: "/Nuts",
  server: {
    port: "3333",
    // strictPort: true,
    // headers: {

    // }
  },
  esbuild: {
    jsxFactory: "create",
  },
  plugins: [
    Inspect(),
    checker({
      // e.g. use TypeScript check
      typescript: true,
      eslint: {
        // for example, lint .ts and .tsx
        lintCommand: 'eslint "./**/*.{ts,tsx}"',
      },
    }),
    ViteImageOptimizer({
      /* pass your config */
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
      },
    }),
    injectHTML(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        // gallary: resolve(__dirname, "/pages/gallary/index.html"),
        gallary: resolve(__dirname, "src/html/pages/gallary.html"),
        payment: resolve(__dirname, "src/html/pages/payment.html"),
        forClients: resolve(__dirname, "src/html/pages/for-clients.html"),
        aboutUs: resolve(__dirname, "src/html/pages/about-us.html"),
        allNews: resolve(__dirname, "src/html/pages/news.html"),
        oneNew: resolve(__dirname, "src/html/pages/one-new.html"),
        catalogue: resolve(__dirname, "src/html/pages/catalogue.html"),
      },
    },
  },
};
