<script setup lang="ts">
import MainSection from '@/components/elements/MainSection.vue'
import BlockSentence from '@/components/elements/BlockSentence.vue'

const title = '職務要約'
const sentence = [
  '2014年、株式会社クリエイト日報に入社しました。',
  '入社後5年間、主にHTML/CSS/JavaScript/PHPを用いたwebサイト/webアプリの基本設計/詳細設計/コーディング/運用保守に従事し、入社後5年以降はVue.js/TypeScriptやモダンな開発環境の導入など積極的な技術導入をリードしてきました。'
]
</script>

<template>
  <MainSection :title="title">
    <BlockSentence :items="sentence"></BlockSentence>
  </MainSection>
</template>
