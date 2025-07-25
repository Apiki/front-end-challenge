import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000
    },
    preview: {
        port: 5000
    },
    resolve: {
        alias: {
            "~": resolve(__dirname, "./src")
        }
    }
});
