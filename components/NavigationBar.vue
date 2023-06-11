<template>
    <nav
        aria-label="Main Navigation"
        class="navbar h-[64px] w-full justify-between"
        role="navigation"
    >
        <div>
            <NuxtLink class="hover:cursor-pointer" to="/">
                <NuxtImg
                    src="/images/usa-map.png"
                    format="webp"
                    width="64"
                    height="64"
                />
            </NuxtLink>
        </div>
        <div>
            <ul class="hidden space-x-4 lg:flex lg:flex-row lg:justify-between">
                <li
                    v-for="(item, index) in navItems"
                    :key="index"
                    class="underline decoration-accent hover:cursor-pointer"
                >
                    <NuxtLink
                        :to="item.path"
                        class="text-lg normal-case"
                        :aria-label="item.name"
                    >
                        {{ item.name }}
                    </NuxtLink>
                </li>
            </ul>
            <button
                class="btn-secondary btn lg:hidden"
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
    <SideBar :show="showSideBar" @update:show="(show) => (showSideBar = show)">
        <ul class="flex flex-col gap-y-4">
            <li class="underline decoration-accent hover:cursor-pointer">
                <NuxtLink to="/" class="text-lg normal-case" aria-label="home">
                    Home
                </NuxtLink>
            </li>
            <li
                v-for="(item, index) in navItems"
                :key="index"
                class="underline decoration-accent hover:cursor-pointer"
            >
                <NuxtLink
                    :to="item.path"
                    class="text-lg normal-case"
                    :aria-label="item.name"
                >
                    {{ item.name }}
                </NuxtLink>
            </li>
        </ul></SideBar
    >
</template>

<script lang="ts" setup>
    const navItems = [
        {
            name: "About",
            path: "/about",
        },
        {
            name: "Constitution",
            path: "/constitution",
        },
        {
            name: "Founding Fathers",
            path: "/founding-fathers",
        },
    ];

    const showSideBar = ref<boolean>(false);
</script>
