// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
    googleFonts: {
        families: {
            "Libre+Franklin": true,
            "Libre+Baskerville": true,
        },
    },
    image: {
        domains: ["images.ctfassets.net"],
        contentful: {
            baseURL: "https://images.ctfassets.net/",
        },
    },
});
