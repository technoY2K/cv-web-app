<template>
    <div>
        <h1>Counter</h1>
        <p>{{ counter }}</p>
        <button @click="increment">Click Me</button>
    </div>
</template>

<script lang="ts" setup>
    const counter = ref(0);
    const increment = () => counter.value++;
</script>
