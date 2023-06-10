// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    googleFonts: {
        families: {
            "Libre+Franklin": true,
            "Libre+Baskerville": true,
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
});
