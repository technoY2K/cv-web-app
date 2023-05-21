<template>
    <div class="card bg-base-100 w-96 p-6 shadow-xl">
        <section class="card-body">
            <h2 class="card-title">Counter</h2>
            <p>{{ counter }}</p>
        </section>
        <section class="card-actions justify-end">
            <button class="btn btn-primary" @click="increment">Click Me</button>
        </section>
    </div>
</template>

<script lang="ts" setup>
    const counter = ref(0);
    const increment = () => counter.value++;
</script>
