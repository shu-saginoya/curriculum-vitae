<script setup lang="ts">
import BlockTableCareer from '@/components/elements/BlockTableCareer.vue'

type Item = {
  period: string[]
  contents: string[]
  job: string[]
  organization: string
  role: string
  env: string[]
}
defineProps<{
  name: string
  period: string[]
  capital: string
  employees: number
  items: Item[]
}>()
</script>

<template>
  <div>
    <p class="flex justify-between border-b border-black">
      <span>勤務先： {{ name }}</span>
      <span>（勤務期間： {{ period[0] }}～{{ period[1] }}）</span>
    </p>
    <p class="grid grid-cols-2 mb-2">
      <span>◆資本金： {{ capital }}</span>
      <span>◆従業員数： {{ employees }}名</span>
    </p>

    <BlockTableCareer :items="items" />
  </div>
</template>
