import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

module.exports = {
    plugins: [
        require("daisyui"),
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: { fontSize: theme("fontSize.5xl") },
                h2: { fontSize: theme("fontSize.4xl") },
                h3: { fontSize: theme("fontSize.3xl") },
                h4: { fontSize: theme("fontSize.2xl") },
                h5: { fontSize: theme("fontSize.xl") },
                h6: { fontSize: theme("fontSize.lg") },
            });
        }),
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
            },
        },
    },
};
