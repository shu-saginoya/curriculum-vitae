<script setup lang="ts">
const skillList = [
  {
    name: 'フロントエンド',
    id: 'frontend',
    body: [
      {
        name: 'HTML',
        started: '2014-09',
        note: 'なるべく最新のリファレンスを気にかけ、アクセシビリティやSEOにも配慮しながらコーディングしています。'
      },
      {
        name: 'CSS',
        started: '2014-09',
        note: '命名規則やモジュールの責任範囲を考慮しながら設計しています。SassはSCSS記法'
      },
      {
        name: 'JavaScript',
        started: '2014-09',
        note: ''
      },
      {
        name: 'TypeScript',
        started: '2022-04',
        note: ''
      },
      {
        name: 'Vue.js',
        started: '2021-04',
        note: ''
      },
      {
        name: 'Nuxt',
        started: '2021-04',
        note: ''
      }
    ]
  },
  {
    name: 'バックエンド',
    id: 'backend',
    body: [
      {
        name: 'PHP',
        started: '2016-09',
        note: 'なるべく最新のリファレンスを気にかけ、アクセシビリティやSEOにも配慮しながらコーディングしています。'
      },
      {
        name: 'WordPress',
        started: '2016-09',
        note: '命名規則やモジュールの責任範囲を考慮しながら設計しています。SassはSCSS記法'
      },
      {
        name: 'Laravel',
        started: '2014-09',
        note: ''
      },
      {
        name: 'Python',
        started: '2022-04',
        note: ''
      },
      {
        name: 'Django',
        started: 'なし',
        note: ''
      }
    ]
  }
]

const period = (startedInfo: string): string => {
  const started = new Date(startedInfo)
  const isInvalidDate = started.getTime()
  if (isInvalidDate) {
    const daysMonth = 365 / 12
    const daysYear = 365
    const now = new Date()
    const diff = now.getTime() - started.getTime()
    let elapsedDay = Math.floor(diff / 86400000)
    const elapsedYear = Math.floor(elapsedDay / daysYear)
    elapsedDay -= elapsedYear * 365
    const elapsedMonth = Math.floor(elapsedDay / daysMonth)
    return `${elapsedYear}年${elapsedMonth}カ月`
  } else {
    return startedInfo
  }
}
</script>

<template>
  <section class="bl_container">
    <h2>テクニカルスキル</h2>
    <section v-for="category in skillList" :key="category.id" class="bl_card">
      <h3>{{ category.name }}</h3>
      <ul class="bl_skillList">
        <li
          v-for="(skill, index) in category.body"
          :key="category.id + index"
          class="bl_skillList_item"
        >
          <div>{{ skill.name }}</div>
          <div class="bl_skillList_item_period">{{ period(skill.started) }}</div>
          <div>{{ skill.note }}</div>
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped lang="scss">
.bl_skillList {
  list-style: none;
  padding-left: 0;
}
.bl_skillList_item {
  display: grid;
  grid-template-columns: 1fr 1fr 4fr;
  padding: 4px 8px;
  &:nth-child(even) {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &_period {
    text-align: center;
  }
}
</style>
