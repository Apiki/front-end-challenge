import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importHelpers from "eslint-plugin-import-helpers";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tsEslint from "typescript-eslint";

export default defineConfig([
    js.configs.recommended,
    tsEslint.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        files: ["**/*"],
        ignores: ["./node_modules"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: globals.browser
        },
        plugins: {
            "react-hooks": reactHooks,
            "react-refresh": reactRefresh,
            "import-helpers": importHelpers
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",
            "react-refresh/only-export-components": "error",
            "import-helpers/order-imports": [
                "warn",
                {
                    newlinesBetween: "never",
                    groups: ["module", "/^~/", ["parent", "sibling", "index"]],
                    alphabetize: { order: "asc", ignoreCase: true }
                }
            ]
        }
    },
    eslintConfigPrettier,
    eslintPluginPrettierRecommended
]);
