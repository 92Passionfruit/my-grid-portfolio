import { defineConfig } from "vite";
import fs from "fs/promises";
import react from "@vitejs/plugin-react";

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

export default defineConfig(() => ({
  test: {
    globals: true,
    environment: "happy-dom",
  },
  server: {
    host: "0.0.0.0",
    port: port, // Ensure port is a number
  },
  plugins: [react()],
  esbuild: {
    loader: "tsx",
    include: /src\/.*\.[tj]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
}));
