import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["firebase/app", "firebase/firestore/lite"]
    }
  },
  esbuild: {
    loader: "jsx", // Ensure JSX files are properly handled
    include: /src\/.*\.jsx?$/, // Include your source files
  }
})