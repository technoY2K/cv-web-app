<template>
    <div
        :id="props.id"
        class="relative h-[525px] w-full overflow-hidden md:h-[640px]"
    >
        <video
            class="absolute left-0 top-0 z-[100] min-h-full w-auto min-w-full object-cover"
            :src="props.mediaUrl"
            muted
            autoplay
            loop
            playsinline="true"
        />
        <div
            id="hero-overlay"
            class="absolute left-0 top-0 z-[110] h-full w-full bg-neutral opacity-30"
        ></div>
        <div
            id="hero-content"
            class="absolute left-0 top-20 z-[120] h-full w-full"
        >
            <div class="relative h-full w-full">
                <div
                    class="flex h-full w-full flex-col justify-center p-8 font-['Audiowide'] font-light text-white"
                >
                    <div>
                        <p class="text-xl sm:text-xl md:text-3xl">
                            Real estate research
                        </p>
                        <p class="text-xl sm:text-xl md:text-3xl">
                            with the help of AI
                        </p>
                    </div>
                    <div class="mt-8">
                        <button class="btn-primary btn w-[200px] font-sans">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps<{ id: string; mediaUrl: string }>();
</script>
