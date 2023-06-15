import * as contentful from "contentful";

export default defineNuxtPlugin((nuxtAPP) => {
    const client = contentful.createClient({
        space: String(process.env.CTF_SPACE_ID),
        accessToken: String(process.env.CTF_PUBLISHED),
    });

    return {
        provide: {
            contentful: client,
        },
    };
});
