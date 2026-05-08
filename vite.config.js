import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base = "/cricket-demo/" porque el sitio se sirve desde
// https://<user>.github.io/cricket-demo/ cuando GitHub Pages está activo.
export default defineConfig({
  base: "/cricket-demo/",
  plugins: [react()],
});
