import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Node.js backend ishga tushganda shu yerga ulanadi
      "/api": "http://localhost:4000",
    },
  },
});
