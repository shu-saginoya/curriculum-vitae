<script setup lang="ts">
import MainSection from '@/components/elements/MainSection.vue'
import BlockListSamples from '@/components/elements/BlockListSamples.vue'

const title = '制作実績一覧'
const samples = [
  {
    name: '書籍の購読申込フォーム (Vue3・Typescript・SCSSなど)',
    src: 'https://github.com/shu-saginoya/example-form',
    note: ''
  },
  {
    name: '大学図書館（Nuxt2・microCMS）',
    src: 'https://www.library.ferris.ac.jp/',
    note: '現在Nuxt3に移行作業をすすめています。'
  },
  {
    name: '真空ポンプの会社(Wordpress)',
    src: 'http://www.skott.co.jp/',
    note: ''
  }
]
</script>

<template>
  <MainSection :title="title">
    <p>Web関連の制作実績となります。</p>
    <BlockListSamples :items="samples"></BlockListSamples>
  </MainSection>
</template>
