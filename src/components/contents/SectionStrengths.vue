<script setup lang="ts">
import MainSection from '@/components/elements/MainSection.vue'
import BlockList from '@/components/elements/BlockList.vue'

const title = '得意とする分野・スキル'
const list = [
  'HTML/CSS/JavaScript/TypeScriptによるwebサイト/webアプリケーションの基本設計/詳細設計/実装/コーディング/テスト/運用保守',
  'Vue.js/Nuxt.jsのフレームワークを用いた開発',
  'フロントエンドからバックエンドまでの開発',
  '映像制作時代のプロデューサー経験からの円滑なコミュニケーション',
  '顧客折衝'
]
</script>

<template>
  <MainSection :title="title">
    <BlockList :items="list"></BlockList>
  </MainSection>
</template>
