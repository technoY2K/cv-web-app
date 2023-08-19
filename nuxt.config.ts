// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
            CONTENTFUL_PREVIEW_TOKEN: process.env.CONTENTFUL_PREVIEW_TOKEN,
            CONTENTFUL_PUBLISHED_TOKEN: process.env.CONTENTFUL_PUBLISHED_TOKEN,
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
    googleFonts: {
        families: {
            Raleway: true,
            Montserrat: true,
        },
    },
    image: {
        domains: ["images.ctfassets.net"],
        contentful: {
            baseURL: "https://images.ctfassets.net/",
        },
    },
});
