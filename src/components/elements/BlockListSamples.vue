<script setup lang="ts">
type Sample = {
  name: string
  src: string[]
  note: string
}
defineProps<{
  items: Sample[]
}>()
</script>

<template>
  <ul class="divide-y-2">
    <li v-for="(item, index) in items" :key="index" class="py-2">
      <p class="font-bold">『{{ item.name }}』</p>
      <p>{{ item.note }}</p>
      <ul class="list-disc list-inside">
        <li v-for="link in item.src" :key="link">
          <a :href="link" target="_blank">{{ link }}</a>
        </li>
      </ul>
    </li>
  </ul>
</template>
