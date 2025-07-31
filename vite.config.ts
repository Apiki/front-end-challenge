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
            "~assets": resolve(__dirname, "./src/assets"),
            "~components": resolve(__dirname, "./src/components"),
            "~contexts": resolve(__dirname, "./src/contexts"),
            "~hooks": resolve(__dirname, "./src/hooks"),
            "~services": resolve(__dirname, "./src/services"),
            "~styles": resolve(__dirname, "./src/styles"),
            "~types": resolve(__dirname, "./src/types"),
            "~utils": resolve(__dirname, "./src/utils")
        }
    }
});
