module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: [
        "@nuxtjs/eslint-config-typescript",
        "plugin:prettier/recommended",
    ],
    rules: {
        "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
        "@typescript-eslint/no-unused-vars": "warn",
    },
};
