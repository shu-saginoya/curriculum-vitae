<script setup lang="ts">
defineProps<{
  items: {
    period: string
    contents: string
    job: string
    organization: string
    role: string
    env: string
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
      <div class="p-1 col-span-6 flex flex-col justify-between gap-4">
        <div>
          <p>【プロジェクト内容】</p>
          {{ item.contents }}
        </div>
        <div class="border-t-2 border-dotted">
          <p>【担当業務】</p>
          {{ item.job }}
        </div>
      </div>
      <div class="p-1 flex flex-col justify-between gap-4">
        <div>
          <p>【組織】</p>
          {{ item.organization }}
        </div>
        <div>
          <p>【役割】</p>
          {{ item.role }}
        </div>
        <div class="border-t-2 border-dotted">
          <p>【言語・環境】</p>
          {{ item.env }}
        </div>
      </div>
    </li>
  </ul>
</template>
