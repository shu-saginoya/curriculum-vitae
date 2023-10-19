<script setup lang="ts">
defineProps<{
  items: string[]
  title?: string
}>()
</script>

<template>
  <div class="px-4">
    <h3 v-if="title" class="font-bold">◆{{ title }}</h3>
    <p v-for="(item, index) in items" :key="index">
      {{ item }}
    </p>
  </div>
</template>
