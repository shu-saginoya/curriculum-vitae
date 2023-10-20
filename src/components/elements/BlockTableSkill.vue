<script setup lang="ts">
type Item = {
  cat: string
  class: string[]
  years: number[]
  note: string[]
}
defineProps<{
  items: Item[]
}>()
const headers = ['カテゴリ', '種別', '経験年数', 'スキルレベル・備考']
</script>

<template>
  <div class="overflow-x-scroll">
    <ul class="min-w-max border-2 border-slate-600 divide-y-2 divide-slate-600">
      <li class="grid grid-cols-6 divide-x-2 divide-slate-600 bg-slate-200 text-center">
        <div class="p-1">{{ headers[0] }}</div>
        <div class="p-1">{{ headers[1] }}</div>
        <div class="p-1">{{ headers[2] }}</div>
        <div class="p-1 col-span-3">{{ headers[3] }}</div>
      </li>
      <li
        v-for="(item, index) in items"
        :key="index"
        class="grid grid-cols-6 divide-x-2 divide-slate-600"
      >
        <div class="p-1">{{ item.cat }}</div>
        <div class="p-1">
          <p v-for="(cItem, cIndex) in item.class" :key="cIndex">{{ cItem }}</p>
        </div>
        <div class="p-1">
          <p v-for="(yItem, yIndex) in item.years" :key="yIndex">{{ yItem }}年</p>
        </div>
        <div class="p-1 col-span-3">
          <p v-for="(nItem, nIndex) in item.note" :key="nIndex">{{ nItem }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
