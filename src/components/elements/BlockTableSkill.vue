<script setup lang="ts">
defineProps<{
  items: {
    cat: string
    class: string[]
    years: number[]
    note: string
  }[]
}>()
const headers = ['カテゴリ', '種別', '経験年数', 'スキルレベル・備考']
</script>

<template>
  <table>
    <tr>
      <th v-for="(header, hIndex) in headers" :key="hIndex">{{ header }}</th>
    </tr>
    <tr v-for="(item, index) in items" :key="index">
      <td>{{ item.cat }}</td>
      <td>
        <ul>
          <li v-for="(cItem, cIndex) in item.class" :key="cIndex">{{ cItem }}</li>
        </ul>
      </td>
      <td>
        <ul>
          <li v-for="(yItem, yIndex) in item.years" :key="yIndex">{{ yItem }}</li>
        </ul>
      </td>
      <td>{{ item.note }}</td>
    </tr>
  </table>
</template>
