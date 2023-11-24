<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <section>
    <h2 v-if="title" class="text-lg font-bold">■ {{ title }}</h2>
    <slot />
  </section>
</template>
