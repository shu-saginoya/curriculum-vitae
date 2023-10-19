<script setup lang="ts">
type book = {
  name: string
  note: string
}
defineProps<{
  items: book[]
}>()
</script>

<template>
  <ul class="divide-y-2">
    <li v-for="(item, index) in items" :key="index" class="py-2">
      <p class="font-bold">『{{ item.name }}』</p>
      <p>{{ item.note }}</p>
    </li>
  </ul>
</template>
