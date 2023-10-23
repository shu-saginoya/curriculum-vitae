<script setup lang="ts">
import MainSection from '@/components/elements/MainSection.vue'
import BlockSentence from '@/components/elements/BlockSentence.vue'

const title = '自己PR'

const PRs = [
  {
    title: '継続的なキャッチアップと技術導入',
    body: [
      '現在の会社にはWEB未経験での配属となりましたが、会社での開発環境や技術を覚えた後もそれで満足することなく継続的な情報収集と技術の導入を行ってきました。',
      '初期のころにはレスポンシブデザインやWordPressなど、最近ではモダンな開発環境を意識して、フレームワークやビルドツール・リントツール・TypeScriptなど様々な技術を導入してきました。',
      'また、社内やメンバー間での意識のずれが生まれないように積極的にコミュニケーションをとって知識を共有するようにしています。'
    ]
  },
  {
    title: '一貫したサービス開発経験',
    body: [
      '前職では営業の経験もありお客様と直接コミュニケーションをとりながら作業をすることも得意です。要望を伺い、技術やデザインの提案をして、実装からデプロイまで独りで行うことができます。'
    ]
  },
  {
    title: '自己研鑽',
    body: [
      '毎日通勤しているため、電車の中で電子書籍やWEBの記事などを読んで情報収集しています。また、勉強会などにも積極的に参加するようにして、他社のエンジニアの方々と接する機会を多くするように心掛けています。',
      'また、プライベートでアプリ開発などを行いその経験を業務で活かしています。'
    ]
  }
]
</script>

<template>
  <MainSection :title="title">
    <div class="flex flex-col gap-6">
      <BlockSentence
        v-for="(pr, index) in PRs"
        :key="index"
        :items="pr.body"
        :title="pr.title"
      ></BlockSentence>
    </div>
  </MainSection>
</template>
