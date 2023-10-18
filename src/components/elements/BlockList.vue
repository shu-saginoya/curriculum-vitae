<script setup lang="ts">
defineProps<{
  items: string[]
}>()
</script>

<template>
  <ul class="px-4 list-disc list-inside">
    <li v-for="(item, index) in items" :key="index">
      {{ item }}
    </li>
  </ul>
</template>
