<script setup lang="ts">
defineProps<{
  items: {
    period: string
    contents: string
    organization: string
  }[]
}>()
const headers = ['期間', '業務内容', '組織／役割']
</script>

<template>
  <ul class="border-2 border-slate-600 divide-y-2 divide-slate-600">
    <li class="grid grid-cols-8 divide-x-2 divide-slate-600 bg-slate-200 text-center">
      <div class="p-1">{{ headers[0] }}</div>
      <div class="p-1 col-span-6">{{ headers[1] }}</div>
      <div class="p-1">{{ headers[2] }}</div>
    </li>
    <li
      v-for="(item, index) in items"
      :key="index"
      class="grid grid-cols-8 divide-x-2 divide-slate-600"
    >
      <div class="p-1">{{ item.period }}</div>
      <div class="p-1 col-span-6">
        {{ item.contents }}
      </div>
      <div class="p-1">
        {{ item.organization }}
      </div>
    </li>
  </ul>
</template>
