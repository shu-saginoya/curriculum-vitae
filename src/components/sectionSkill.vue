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
        note: '大学図書館の案件でmicroCMSとNetlifyと組み合わせてJamstack構成で運営しています。3.0系についても試験的に利用しています。'
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
