<script setup lang="ts">
import MainSection from '@/components/elements/MainSection.vue'
import BlockTableSkill from '@/components/elements/BlockTableSkill.vue'
import { useFormat } from '@/composables/useFormat'

const title = 'PCスキル／テクニカルスキル'

const { period } = useFormat()

const items = [
  {
    cat: '担当業務',
    class: ['aaa', 'bbb'],
    years: [3, 4],
    note: 'あいうえ'
  },
  {
    cat: 'OS',
    class: [''],
    years: [],
    note: ''
  },
  {
    cat: '言語',
    class: [''],
    years: [],
    note: ''
  },
  {
    cat: 'フレームワーク',
    class: [''],
    years: [],
    note: ''
  },
  {
    cat: 'DB',
    class: [''],
    years: [],
    note: ''
  },
  {
    cat: 'その他',
    class: [''],
    years: [],
    note: ''
  }
]

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
        note: '命名規則やモジュールの責任範囲を考慮しながら設計しています。Sassも利用しています。'
      },
      {
        name: 'JavaScript',
        started: '2014-09',
        note: 'シンプルでわかりやすいコードを心掛けています。'
      },
      {
        name: 'TypeScript',
        started: '2022-04',
        note: 'Vue.jsのバージョン3導入と同時に業務に導入しました。作業が楽になり重宝しています。'
      },
      {
        name: 'Vue.js',
        started: '2021-04',
        note: '段階的な導入が容易という点に惹かれて導入しました。最近ではバージョン2.x系から3.x系への移行にともない、composition APIとTypeScriptの導入で業務効率がアップしたように感じます。日本ユーザーグループなどのイベントにも参加することがあります。'
      },
      {
        name: 'Nuxt',
        started: '2021-04',
        note: '大学図書館の案件などでmicroCMSとNetlifyと組み合わせてJamstack構成で運営しています。'
      },
      {
        name: 'その他・開発環境など',
        started: '-',
        note: 'VSCode	Git	GitHub SourceTree	Node.js npm	webpack	babel	Vite	ESLint Prettier	Volta	Volar Vitest'
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
        note: '簡易的なCMSや検索システム・メール送信システムの制作などで利用してきました。'
      },
      {
        name: 'WordPress',
        started: '2016-09',
        note: '数年前までは業務の中心でした。'
      },
      {
        name: 'Laravel',
        started: '実務なし',
        note: '技術選定の一環で簡単なアプリの制作経験あり。'
      },
      {
        name: 'Python',
        started: '2022-04',
        note: '基本的なプログラミングが可能。ローカル環境での事務作業の自動化など。'
      },
      {
        name: 'Django',
        started: '実務なし',
        note: '技術選定の一環で簡単なアプリの制作経験あり。'
      },
      {
        name: 'その他・開発環境など',
        started: '-',
        note: 'WSL Docker Ubuntu MySQL'
      }
    ]
  },
  {
    name: 'そのほか',
    id: 'others',
    body: [
      {
        name: 'DTP',
        started: '-',
        note: '書籍の版組やイラストの制作など。Adobe InDesign・Illustrator・Photoshop'
      },
      {
        name: '映像制作',
        started: '-',
        note: '企画・シナリオ・絵コンテなどの制作から、業務用ビデオカメラでの撮影、Adobe Premiere ProやAfter Effectsでの編集、撮影時やナレーション収録時のディレクションなどが可能。'
      }
    ]
  }
]
</script>

<template>
  <MainSection :title="title">
    <BlockTableSkill :items="items"></BlockTableSkill>
  </MainSection>
</template>
