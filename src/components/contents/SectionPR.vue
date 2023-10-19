<script setup lang="ts">
import MainSection from '@/components/elements/MainSection.vue'

const title = '自己PR'

const PRs = [
  {
    title: '経歴の遍歴について',
    body: '若いころは物語を作ったり小説やシナリオを書くことが好きでした。小学生のころから台本の制作などをはじめ、高校生の頃は市民劇団に所属し、専門学校では文芸創作科という学科に通っていました。はじめに入社した会社はDTP主体の出版系の会社で、2社目の会社では映像制作のためシナリオの制作などに注力していました。その後、短期間ですが同じ会社で営業職を経験し、その際勉強したWEBの知識を活かして、現在（3社目）の会社でWEB制作の仕事に就いています。現在の会社では私が入社した当時はいわゆるWEBサイト制作を業務としていて技術はHTMLとCSSだけという状況でしたが、前職の知識を活かしてレスポンシブデザインやWordpressの導入などを行い、最近ではJavaScriptのフレームワークを導入したり、モダンな開発環境を導入できるように尽力しております。'
  },
  {
    title: 'エンジニアとして',
    body: '高校の学科が情報技術科という学部でITの基礎やC言語などを学びました。ただ、この当時はあまりそれを仕事にするという意識はなく、卒業後はプログラミングから離れてしまいました。それからはじめに入社した会社でアプリケーション開発（PHP+MySQL）を突然任せられるなどの突発的なことはありましたが、コードを本格的に書くようになったのは現在のWEB制作の職についてからです。ただそれからも、独学だったこともあり次にどのような技術を導入していくかということに悩まされる期間が長くつづきます。そんななかで実験的にDjangoを扱う機会があり、はじめて出会ったフレームワークに大きな衝撃を受けました。いろいろと検討した結果、まずはフロントエンドということでVue.js・Nuxt.jsを導入しました。それをきっかけに必要な技術や開発環境の課題が明確になりコロナ禍のなか夢中で勉強しました。そのため、現在の一番の得意分野はフロントエンドです。'
  },
  {
    title: '担当フェーズ・役割',
    body: '独りでの作業が多いためヒアリングや技術選定から環境構築・実際のコーディング・デプロイまですべて行います。また、情報収集や新しい技術の実験を行い、既存のプロジェクトに導入したりメンバーに共有するような役割も担っています。'
  },
  {
    title: '転職にもとめること',
    body: '現在の会社では技術的に改善が可能であっても、その他の諸々の理由（例えば組織的な問題など）で改善案を実行に移せないケースが多くあります。そのため新しい会社は日常的な改善に前向きで実現可能な環境が望ましいです。'
  },
  {
    title: 'サンプル',
    body: '外部に公開できないソースコードが多いためサンプルが少ないのですが参考にしていただければと思います。',
    list: [
      {
        name: '書籍の購読申込フォーム (Vue3・Typescript・SCSSなど)',
        src: 'https://github.com/shu-saginoya/example-form'
      },
      {
        name: '大学図書館（Nuxt2・microCMS）',
        src: 'https://www.library.ferris.ac.jp/',
        note: '現在Nuxt3に移行作業をすすめています。'
      },
      {
        name: '真空ポンプの会社(Wordpress)',
        src: 'http://www.skott.co.jp/'
      }
    ]
  }
]
</script>

<template>
  <MainSection :title="title">
    <section v-for="(pr, index) in PRs" :key="index" class="bl_card">
      <h3>{{ pr.title }}</h3>
      <p>{{ pr.body }}</p>
      <ul v-if="pr.list" class="bl_list">
        <li v-for="(item, listIndex) in pr.list" :key="listIndex" class="bl_list_item">
          <div>{{ item.name }}</div>
          <div>{{ item.src }}</div>
          <div v-if="item.note">{{ item.note }}</div>
        </li>
      </ul>
    </section>
  </MainSection>
</template>
