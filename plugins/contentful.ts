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

    // contentful.default is used because of module interop issues regarding the contentful package
    // https://github.com/contentful/contentful.js/issues/1233
    const client = contentful.createClient
        ? contentful.createClient(config)
        : contentful.default.createClient(config);

    return {
        provide: {
            contentful: client,
        },
    };
});
