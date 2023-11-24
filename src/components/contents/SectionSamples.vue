<script setup lang="ts">
import MainSection from '@/components/elements/MainSection.vue'
import BlockListSamples from '@/components/elements/BlockListSamples.vue'

const title = '制作実績一覧'
const samples = [
  {
    name: '大学図書館（Nuxt2・microCMS）',
    src: ['https://www.library.ferris.ac.jp/'],
    note: '最近の実績のなかでは一番規模が大きかった大学図書館のリニューアル業務です。Nuxt2やVuetifyといった技術を利用しています。現在Nuxt3への移行作業がほぼ完了しています。CompositionAPIとTypeScriptが導入されました。'
  },
  {
    name: '気温と服装提案のアプリ (Vue3・Typescript・Tailwind)',
    src: ['https://shu-saginoya.github.io/nanikiru/', 'https://github.com/shu-saginoya/nanikiru'],
    note: 'プライベートで制作した気温と服装提案のアプリ。気象庁のサイトから予報を取得させていただいております。'
  },
  {
    name: '展示会サイト (Vue3)',
    src: ['https://www.n-expo.jp/', 'https://www.n-expo.jp/ui-sample.html'],
    note: '毎年行われる現所属会社主催の展示会サイト。マークアップコーダーが保守運用を行うため、HTMLファイルを修正すれば更新ができるように考えて制作しました。また、UIのサンプルページも制作して更新担当者にわかりやすくしています。'
  },
  {
    name: '書籍の購読申込フォーム (Vue3・Typescript・SCSSなど)',
    src: ['https://www.nippo.co.jp/subscribe-form/'],
    note: '様々なデバイスからのアクセスを想定して適切なHTMLの属性などにこだわって制作しました。'
  },
  {
    name: '真空ポンプの会社(Wordpress)',
    src: ['http://www.skott.co.jp/'],
    note: '何年も前の実績ですがデザインに力をいれました。真空ポンプの会社ということで“流れ”を意識しています。Wordpressのテンプレートも一から手づくりしています。'
  }
]
</script>

<template>
  <MainSection :title="title">
    <p>Web関連の制作実績となります。</p>
    <BlockListSamples :items="samples"></BlockListSamples>
  </MainSection>
</template>
