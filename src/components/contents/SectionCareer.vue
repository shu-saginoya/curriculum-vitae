<script setup lang="ts">
import MainSection from '@/components/elements/MainSection.vue'
import BlockCareer from '@/components/elements/BlockCareer.vue'

const title = '職務経歴'

const careers = [
  {
    name: '株式会社大知',
    period: ['2007年4月', '2009年3月'],
    capital: '1500万円',
    employees: 10,
    items: [
      {
        period: ['2007年4月', '2009年3月'],
        contents: ['教科書など出版物の版組', 'WEBサイトの修正'],
        job: ['DTP業務', 'HTML/CSSのコーディング'],
        organization: 'チーム:10名',
        role: 'メンバー',
        env: ['Adobe InDesign', 'Photoshop', 'Illustrator']
      }
    ]
  },
  {
    name: '株式会社ヘレナメディアリサーチ',
    period: ['2011年2月', '2014年5月'],
    capital: '1000万円',
    employees: 15,
    items: [
      {
        period: ['2011年2月', '2013年3月'],
        contents: [
          'つくば市役所 モビリティロボット実験特区のプロモーションビデオ制作',
          '筑波銀行 社員研修用ビデオ制作',
          'サイバーダイン（株） HAL福祉用プロモーションビデオ・講習ビデオ制作',
          '予科練平和記念館 戦争体験者インタービュー映像記録制作',
          '幼稚園などの発表会ビデオの制作・販売'
        ],
        job: ['ディレクション', 'シナリオ制作', 'カメラ撮影', '映像編集'],
        organization: 'チーム:2名',
        role: 'リーダー／メンバー',
        env: ['Adobe Premiere Pro', 'After Effects']
      },
      {
        period: ['2013年3月', '2014年5月'],
        contents: [
          '茨城県庁土木部 偕楽園ウェブサイトの保守運営リニューアル',
          '一般財団法人茨城県メディカルセンターウェブサイトの保守運営リニューアル',
          '多数の市役所ウェブサイトの保守運営リニューアル',
          '多数の社会福祉協議会ウェブサイトの保守運営リニューアル',
          '（一社）いばらき出会いサポートセンタープロモーションビデオ制作'
        ],
        job: ['企画・営業', '参画メンバーの選定や人材の開拓', 'スケジューリング調整'],
        organization: '全体:5～10名',
        role: '営業',
        env: ['特になし']
      }
    ]
  },
  {
    name: '株式会社クリエイト日報（株式会社日報）',
    period: ['2014年9月', '現在'],
    capital: '9000万円',
    employees: 100,
    items: [
      {
        period: ['2014年9月', '現在'],
        contents: [
          '日報ビジネスウェブサイト保守管理',
          'NEW環境展ウェブサイト保守管理',
          'フェリス女学院大学ウェブサイト保守管理',
          'フェリス女学院大学附属図書館ウェブサイト保守管理リニューアル'
        ],
        job: [
          '要件定義/基本設計/実装/運用保守',
          '画面デザイン作成',
          'ビルド/デプロイ/環境構築',
          '顧客折衝/資料作成'
        ],
        organization: 'チーム:2名',
        role: 'リーダー／メンバー',
        env: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'Vue.js', 'Nuxt']
      }
    ]
  }
]
</script>

<template>
  <MainSection :title="title">
    <div class="flex flex-col gap-6">
      <BlockCareer
        v-for="(career, index) in careers"
        :key="index"
        :name="career.name"
        :period="career.period"
        :capital="career.capital"
        :employees="career.employees"
        :items="career.items"
      ></BlockCareer>
    </div>
  </MainSection>
</template>
