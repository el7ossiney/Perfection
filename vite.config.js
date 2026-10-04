import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // Own domain at the root — absolute asset paths (deep links like
  // /projects/:id need base "/", not the old GitHub Pages relative "./")
  base: "/",
  plugins: [react()],
  server: {
    port: 5173,
    open: false,
  },
});
