<script setup lang="ts">
import MainSection from '@/components/elements/MainSection.vue'
import BlockTableSkill from '@/components/elements/BlockTableSkill.vue'
import { useFormat } from '@/composables/utils/useFormat'

const { yearsExp } = useFormat()

const title = 'PCスキル／テクニカルスキル'
const items = [
  {
    cat: '担当業務',
    class: ['実装', 'テスト', '運用保守'],
    years: [yearsExp('2014-09'), 0, yearsExp('2014-09')],
    note: ['メンバーとしてクライアントとのやり取り経験あり']
  },
  {
    cat: 'OS',
    class: ['Windows'],
    years: [yearsExp('1994-06')],
    note: ['通常使用に問題なしで、指導も可能']
  },
  {
    cat: '言語',
    class: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'Python'],
    years: [
      yearsExp('2014-09'),
      yearsExp('2014-09'),
      yearsExp('2014-09'),
      yearsExp('2022-04'),
      yearsExp('2016-09'),
      yearsExp('2021-04')
    ],
    note: [
      '通常使用に問題なしで、指導も可能',
      '通常使用に問題なしで、指導も可能',
      '通常使用に問題なしで、指導も可能',
      '通常使用に問題なし',
      '調べながらであれば作業可能',
      '調べながらであれば作業可能'
    ]
  },
  {
    cat: 'フレームワーク',
    class: ['Vue.js', 'Nuxt', 'Laravel', 'Django'],
    years: [yearsExp('2021-04'), yearsExp('2021-04'), 0, 0],
    note: [
      '通常使用に問題なしで、指導も可能',
      '通常使用に問題なしで、指導も可能',
      '書籍に従いアプリケーション制作経験',
      '書籍に従いアプリケーション制作経験'
    ]
  },
  {
    cat: 'DB',
    class: ['MySQL', 'SQLite'],
    years: [yearsExp('2016-09'), 0],
    note: ['調べながらであれば作業可能', '調べながらであれば作業可能']
  },
  {
    cat: 'その他',
    class: ['Git', 'GitHub', 'WordPress', 'Docker', 'Node.js'],
    years: [yearsExp('2021-04'), yearsExp('2021-04'), yearsExp('2016-09'), 0, yearsExp('2021-04')],
    note: [
      '通常使用に問題なし',
      '通常使用に問題なし',
      '調べながらであれば作業可能',
      '調べながらであれば作業可能',
      '通常使用に問題なし'
    ]
  }
]
</script>

<template>
  <MainSection :title="title">
    <BlockTableSkill :items="items"></BlockTableSkill>
  </MainSection>
</template>
