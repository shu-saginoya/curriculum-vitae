<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <div class="px-4">
    <p v-for="(item, index) in items" :key="index">
      {{ item }}
    </p>
  </div>
</template>
