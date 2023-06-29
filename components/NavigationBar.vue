<template>
    <nav
        aria-label="Main navigation bar"
        class="navbar z-[900] mb-8 flex h-[64px] w-full flex-row justify-between px-8"
        :class="isHome ? 'absolute' : 'block'"
        role="navigation"
    >
        <div v-if="data" id="logo">
            <NuxtLink class="hover:cursor-pointer" to="/">
                <NuxtImg
                    provider="contentful"
                    :src="data.logo"
                    format="webp"
                    width="64"
                    height="64"
                />
            </NuxtLink>
        </div>
        <div v-if="data" id="nav-items" class="hidden lg:block">
            <ul class="flex flex-row justify-between space-x-8">
                <li
                    v-for="(link, index) in data.links"
                    :key="index"
                    class="text-white hover:cursor-pointer"
                >
                    <NuxtLink
                        :to="link.url"
                        class="text-lg font-bold capitalize"
                        :aria-label="link.label"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </li>
            </ul>
        </div>
        <div id="nav-actions">
            <ul class="hidden lg:block">
                <li class="hover:cursor-pointer">
                    <NuxtLink
                        to="/auth"
                        class="btn-primary btn text-lg font-bold capitalize text-white"
                        aria-label="Login button"
                    >
                        Login
                    </NuxtLink>
                </li>
            </ul>
            <button
                :aria-expanded="showSideBar ? 'true' : 'false'"
                aria-label="Open sidebar"
                aria-controls="sidebar"
                class="btn-primary btn lg:hidden"
                @click="showSideBar = !showSideBar"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-5 w-5 stroke-current"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>
        </div>
    </nav>
    <SideBar
        class="z-[901]"
        :show="showSideBar"
        @update:show="(show) => (showSideBar = show)"
    >
        <ul v-if="data" class="flex flex-col gap-y-4" role="menu">
            <li
                class="underline decoration-accent hover:cursor-pointer"
                role="menuitem"
            >
                <NuxtLink to="/" class="text-lg normal-case" aria-label="home">
                    Home
                </NuxtLink>
            </li>
            <li
                v-for="(link, index) in data.links"
                :key="index"
                class="underline decoration-accent hover:cursor-pointer"
                role="menuitem"
            >
                <NuxtLink
                    :to="link.url"
                    class="text-lg capitalize"
                    :aria-label="link.label"
                >
                    {{ link.label }}
                </NuxtLink>
            </li>
        </ul></SideBar
    >
</template>

<script lang="ts" setup>
    const { $contentful } = useNuxtApp();
    const route = useRoute();
    const isHome = computed(() => route.path === "/");
    const { data } = await useAsyncData(
        "navigation",
        () =>
            $contentful.getEntries({
                content_type: "navigation",
                "fields.name": "Mercury",
            }),
        {
            transform: (data) => {
                const temp: {
                    logo: string;
                    links: { label: string; url: string }[];
                } = {
                    logo: "",
                    links: [],
                };

                if (data?.items[0]) {
                    temp.logo = data?.items[0].fields.logo.fields.file.url;
                }

                if (data?.items[0]) {
                    temp.links = data?.items[0].fields.links.fields.data;
                }

                return temp;
            },
        }
    );

    const showSideBar = ref<boolean>(false);
</script>
