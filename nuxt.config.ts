// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        cdnURL: "https://d302kctrc8u730.cloudfront.net",
    },
    googleFonts: {
        families: {
            Roboto: true,
        },
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
    nitro: {
        preset: "aws-lambda",
    },
});
