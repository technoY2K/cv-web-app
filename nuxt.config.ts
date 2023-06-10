// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    googleFonts: {
        families: {
            "Libre+Franklin": true,
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
});
