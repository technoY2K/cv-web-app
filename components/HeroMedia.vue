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
            class="absolute left-0 top-0 z-[110] h-full w-full bg-neutral opacity-40"
        ></div>
        <div
            id="hero-content"
            class="absolute left-0 top-0 z-[120] h-full w-full"
        >
            <div class="relative h-full w-full">
                <div
                    class="flex h-full w-full flex-col items-center justify-center p-8 font-['Montserrat'] font-light text-white"
                >
                    <div class="container mx-auto text-center">
                        <p class="text-3xl md:text-4xl lg:text-5xl">
                            Digital Marketing Forecasting With AI Vision
                        </p>

                        <button
                            class="btn-primary btn mt-8 w-[200px] font-sans"
                        >
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
