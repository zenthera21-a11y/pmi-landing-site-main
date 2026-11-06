import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

export default defineConfig(({ mode }) => {
  const webEnv = loadEnv(mode, __dirname, "VITE_");
  const backendEnv = loadEnv(
    mode,
    path.resolve(__dirname, "../../packages/backend"),
    "CONVEX_URL"
  );
  const convexUrl =
    process.env.VITE_CONVEX_URL ??
    webEnv.VITE_CONVEX_URL ??
    backendEnv.CONVEX_URL;

  return {
    define: convexUrl
      ? { "import.meta.env.VITE_CONVEX_URL": JSON.stringify(convexUrl) }
      : undefined,
    plugins: [tailwindcss(), tanstackRouter({}), react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    server: {
      port: 3001,
    },
  };
});
