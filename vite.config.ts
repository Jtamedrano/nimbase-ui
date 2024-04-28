import { defineConfig } from "vitest/config"
import reactRefresh from "@vitejs/plugin-react-refresh"
import path from "path"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), tsconfigPaths()],
  server: {
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
  resolve: {
    alias: {
      "@components/*": path.resolve(__dirname, "src/components/*"),
      "@assets/*": path.resolve(__dirname, "src/resources/*"),
    },
  },
})
