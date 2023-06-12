<template>
    <nav
        v-show="props.show"
        id="sidebar"
        aria-label="Sidebar navigation"
        role="navigation"
    >
        <div
            id="sidebar-backdrop"
            class="fixed left-0 top-0 z-[900] h-screen w-screen bg-neutral opacity-25"
        ></div>
        <div
            id="sidebar-panel"
            class="fixed right-0 top-0 z-[901] h-screen w-3/4 bg-base-100 p-4 transition-transform duration-300 ease-in-out"
            :class="slide ? 'translate-x-0' : 'translate-x-full'"
        >
            <button class="btn-primary btn" @click="emit('update:show', false)">
                Close
            </button>
            <div class="mt-8">
                <slot />
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
    const props = defineProps<{ show: boolean }>();
    const route = useRoute();
    const emit = defineEmits<{
        (event: "update:show", value: boolean): void;
    }>();
    const slide = ref<boolean>(false);

    watch(route, () => {
        emit("update:show", false);
    });

    watch(props, () => {
        if (props.show) {
            setTimeout(() => {
                slide.value = true;
            }, 100);
        } else {
            slide.value = false;
        }
    });
</script>
