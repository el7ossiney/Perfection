import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages: مسارات نسبية عشان تشتغل تحت username.github.io/repo-name/
  base: "./",
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
});
