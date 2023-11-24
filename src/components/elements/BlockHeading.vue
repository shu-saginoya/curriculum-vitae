<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <header>
    <h1 class="text-2xl font-bold text-center py-6">{{ title }}</h1>
    <slot />
  </header>
</template>
