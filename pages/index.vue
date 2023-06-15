<template>
    <section>
        <HeroMedia id="hero" :media-url="data?.fields.hero.fields.file.url" />
    </section>
</template>

<script lang="ts" setup>
    const { $contentful } = useNuxtApp();
    const { data } = await useAsyncData("home", () =>
        $contentful.getEntry("2JMhHDn60WjfVWoAHIKkV8")
    );
</script>
