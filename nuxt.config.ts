// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            CTF_SPACE_ID: process.env.CTF_SPACE_ID,
            CTF_PREVIEW: process.env.CTF_PREVIEW,
            CTF_PUBLISHED: process.env.CTF_PUBLISHED,
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@nuxt/image"],
    googleFonts: {
        families: {
            Raleway: true,
            Audiowide: true,
        },
    },
    image: {
        domains: ["images.ctfassets.net"],
        contentful: {
            baseURL: "https://images.ctfassets.net/",
        },
    },
});
