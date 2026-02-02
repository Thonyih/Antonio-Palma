import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // repo name must match your Pages URL subpath
  base: "/Antonio-Palma/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
});