<template>
    <div v-show="props.show" class="sidebar">
        <div
            class="sidebar-back-drop fixed left-0 top-0 z-[900] h-screen w-screen bg-neutral opacity-25"
        ></div>
        <Transition v-if="show" v-active-class="`duration-300 ease-out`">
            <div
                class="sidebar-panel fixed left-0 top-0 z-[901] h-screen w-[1000px] bg-base-100"
            >
                <button
                    class="btn-secondary btn"
                    @click="emit('update:show', false)"
                >
                    Close
                </button>
                <h1 class="text-primary">Stuff Aasdfaf</h1>
            </div>
        </Transition>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{ show: boolean }>();
    const emit = defineEmits<{
        (event: "update:show", value: boolean): void;
    }>();
</script>
