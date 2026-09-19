import { defineConfig } from "vite";

export default defineConfig({
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
