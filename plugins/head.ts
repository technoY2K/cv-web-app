export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    useHead({
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: `${config.app.cdnURL}/favicon.ico`,
            },
        ],
    });
});
