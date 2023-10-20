<script setup lang="ts">
type Item = {
  period: string[]
  contents: string[]
  job: string[]
  organization: string
  role: string
  env: string[]
}
defineProps<{
  items: Item[]
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
      <div class="p-1">{{ item.period[0] }} ～ {{ item.period[1] }}</div>
      <div class="p-1 col-span-6 flex flex-col justify-between gap-4">
        <div>
          <p>【プロジェクト内容】</p>
          <ul class="list-disc list-inside">
            <li v-for="(cItem, cIndex) in item.contents" :key="cIndex">{{ cItem }}</li>
          </ul>
        </div>
        <div class="border-t-2 border-dotted">
          <p>【担当業務】</p>
          <ul class="list-disc list-inside">
            <li v-for="(jItem, jIndex) in item.job" :key="jIndex">{{ jItem }}</li>
          </ul>
        </div>
      </div>
      <div class="p-1 flex flex-col justify-between gap-4">
        <div>
          <p>【組織】</p>
          <p>{{ item.organization }}</p>
        </div>
        <div>
          <p>【役割】</p>
          <p>{{ item.role }}</p>
        </div>
        <div class="border-t-2 border-dotted">
          <p>【言語・環境】</p>
          <p v-for="(eItem, eIndex) in item.env" :key="eIndex">{{ eItem }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>
