import * as contentful from "contentful";

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig();
    const config =
        process.env.NODE_ENV === "development"
            ? {
                  space: runtimeConfig.public.CONTENTFUL_SPACE_ID,
                  accessToken: runtimeConfig.public.CONTENTFUL_PREVIEW_TOKEN,
                  host: "preview.contentful.com",
              }
            : {
                  space: runtimeConfig.public.CONTENTFUL_SPACE_ID,
                  accessToken: runtimeConfig.public.CONTENTFUL_PUBLISHED_TOKEN,
              };

    return {
        provide: {
            contentful: contentful.createClient(config),
        },
    };
});
