// https://vitejs.dev/config/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Keep this as "/" if deploying to the root domain
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure the dist folder is properly configured
  },
});
