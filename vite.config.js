// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".json"], // Ensure these extensions are resolved
  },
});
