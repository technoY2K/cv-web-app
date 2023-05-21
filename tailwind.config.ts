import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
    plugins: [require("daisyui")],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Roboto", ...defaultTheme.fontFamily.sans],
            },
        },
    },
};
