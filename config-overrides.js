const {alias} = require("react-app-rewire-alias");

module.exports = function overrides(config) {
    alias({
        "~/assets": "src/assets",
        "~/configs": "src/configs",
        "~/components": "src/components",
        "~/pages": "src/pages",
        "~/services": "src/services",
        "~/utils": "src/utils"
    })(config);

    return config;
};