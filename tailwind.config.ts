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
    daisyui: {
        themes: [
            {
                custom: {
                    primary: "#ca1f40",
                    "primary-content": "#ffffff",
                    secondary: "#222d66",
                    "secondary-content": "#ffffff",
                    accent: "#ffd700",
                    neutral: "#2b3440",
                    "base-100": "#ffffff",
                    info: "#3abff8",
                    success: "#36d399",
                    warning: "#ff5f15",
                    error: "#f87272",
                },
            },
        ],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
                serif: ["Libre Baskerville", ...defaultTheme.fontFamily.serif],
            },
        },
    },
};
