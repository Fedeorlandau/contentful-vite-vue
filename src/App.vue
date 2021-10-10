<script setup>
import Hero from "./components/Hero.vue";
</script>

<template>
  <Suspense>
    <Hero />
  </Suspense>
</template>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
