// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    nitro: {
        preset: "aws-lambda",
    },
    app: {
        cdnURL: "https://d302kctrc8u730.cloudfront.net",
    },
    modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
    googleFonts: {
        families: {
            Roboto: true,
        },
    },
});
