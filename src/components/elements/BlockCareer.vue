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
    <div class="sm:flex justify-between border-b border-black">
      <p>勤務先： {{ name }}</p>
      <p>（勤務期間： {{ period[0] }}～{{ period[1] }}）</p>
    </div>
    <div class="sm:grid grid-cols-2 mb-2">
      <p>◆資本金： {{ capital }}</p>
      <p>◆従業員数： {{ employees }}名</p>
    </div>

    <BlockTableCareer :items="items" />
  </div>
</template>
