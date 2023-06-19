<template>
    <section>
        <HeroMedia id="hero" :media-url="data" />
    </section>
</template>

<script lang="ts" setup>
    const { $contentful } = useNuxtApp();
    const { data } = await useAsyncData(
        "home",
        () => $contentful.getEntry("2JMhHDn60WjfVWoAHIKkV8"),
        {
            transform: (data) => {
                if (data?.fields.hero.fields.file.url) {
                    return data?.fields.hero.fields.file.url;
                } else {
                    return "";
                }
            },
        }
    );
</script>
