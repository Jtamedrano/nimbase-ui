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
      "@assets/*": path.resolve(__dirname, "src/resources/*"),
      "@components/*": path.resolve(__dirname, "src/components/*"),
      "@models/*": path.resolve(__dirname, "src/models/*"),
      "@utils/*": path.resolve(__dirname, "src/utils/*"),
    },
  },
})
