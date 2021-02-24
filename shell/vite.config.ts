import { defineConfig } from "vite";
// import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // "@microfrontend/package": "http://localhost:5000/main.mjs",
      react: "https://cdn.skypack.dev/react",
      "react-dom": "https://cdn.skypack.dev/react-dom",
    },
  },
  // plugins: [reactRefresh()],
});
