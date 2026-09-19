import { defineConfig } from "vite";

export default defineConfig({
  base: "/front-end_test_task/",
  build: {
    outDir: "dist",
    target: "esnext",
  },
  server: {
    port: 8081,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
