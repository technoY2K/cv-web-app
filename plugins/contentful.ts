import * as contentful from "contentful";

export default defineNuxtPlugin(() => {
    const runtimeConfig = useRuntimeConfig();
    const config =
        process.env.NODE_ENV === "development"
            ? {
                  space: runtimeConfig.public.CTF_SPACE_ID,
                  accessToken: runtimeConfig.public.CTF_PREVIEW,
                  host: "preview.contentful.com",
              }
            : {
                  space: runtimeConfig.public.CTF_SPACE_ID,
                  accessToken: runtimeConfig.public.CTF_PUBLISHED,
              };

    return {
        provide: {
            contentful: contentful.createClient(config),
        },
    };
});
