<script setup lang="ts">
const PRs = [
  {
    title: '経歴の遍歴について',
    body: '小学生のころから台本の制作などをはじめ、高校生の頃は市民劇団に所属し、専門学校では文芸創作科という学科に通っていました。はじめに入社した会社はDTP主体の出版系の会社で、2社目の会社では映像制作のためシナリオの制作などに注力していました。その後、短期間ですが同じ会社で営業職を経験し、その際勉強したWEBの知識を活かして、現在（3社目）の会社でWEB制作の仕事に就いています。現在の会社は私が入社した当時はいわゆるWEBサイト制作を業務としていて技術はHTMLとCSSだけという状況でしたが、前職の知識を活かしてレスポンシブデザインやWordpressの導入などを行い、最近ではJavaScriptのフレームワークを導入したり、モダンな開発環境を導入できるように尽力しております。'
  },
  {
    title: 'エンジニアとして',
    body: '高校の学科が情報技術科という学部でITの基礎やC言語などを学びました。ただ、この当時はあまりそれを仕事にするという意識はなく、卒業後はプログラミングから離れてしまいました。それからはじめに入社した会社でアプリケーション開発（PHP+MySQL）を突然任せられるなどの突発的なことはありましたが、コードを本格的に書くようになったのは現在のWEB制作の職についてからです。ただそれからも、独学だったこともあり次にどのような技術を導入していくかということに悩まされる期間が長くつづきます。そんななかで出会ったフレームワークに大きな衝撃を受けました。いろいろと検討した結果、まずはフロントエンドということでVue.jsを導入しました。それをきっかけに必要な技術や開発環境の課題が明確になりコロナ禍のなか夢中で勉強しました。そのため、現在の一番の得意分野はフロントエンドで開発環境の構築やコンポーネントの設計などは自信がもてるようになりました。'
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
        name: 'リマインダー(Nuxt3・まだ開発途中でお見苦しく申し訳ありません)',
        src: 'https://github.com/shu-saginoya/shared-reminder'
      },
      {
        name: '大学図書館（Nuxt2・microCMS）',
        src: 'https://www.library.ferris.ac.jp/'
      },
      {
        name: '真空ポンプの会社(Wordpress)',
        src: 'http://www.skott.co.jp/'
      }
    ]
  },
  {
    title: '参考書籍',
    body: '',
    list: [
      {
        name: '『HTML解体新書　仕様から紐解く本格入門』',
        src: '著・太田良典、中村直樹（ボーンデジタル）'
      },
      {
        name: '『CSS設計完全ガイド　詳細解説＋実践的モジュール集』',
        src: '著・半田惇志（技術評論社）'
      },
      {
        name: '『ステップアップJavaScript　フロントエンド開発の初級から中級へ進むために』',
        src: '著・サークルアラウンド株式会社、佐藤正志、小笠原寛（翔泳社）'
      },
      {
        name: '『TypeScriptハンズオン』',
        src: '著・掌田津耶乃（秀和システム）'
      },
      {
        name: '『Vue.jsプロフェッショナルWebプログラミング』',
        src: '著・山田典明、長澤賢、関口勇樹（エムディーエヌコーポレーション）'
      },
      {
        name: '『Vue.js入門　基礎から実践アプリケーション開発まで』',
        src: '著・川口和也、喜多啓介、野田陽平、手島拓也、片山信也（技術評論社）'
      },
      {
        name: '『Vue 3 フロントエンド開発の教科書',
        src: '著・WINGS プロジェクト、齊藤新三（技術評論社）'
      },
      {
        name: '『フロントエンド開発入門　プロフェッショナルな開発ツールと設計・実装』',
        src: '著・安達稜、武田諭（秀和システム）'
      },
      {
        name: '『実践力を身につけるPythonの教科書』',
        src: '著・クジラ飛行机（マイナビ出版）'
      },
      {
        name: '『Python　Django3　超入門』',
        src: '著・掌田津耶乃（秀和システム）'
      },
      {
        name: '『プロフェッショナルWebプログラミング　Laravel』',
        src: '著・久保田 賢二朗、荒井 和平、大橋 佑太（エムディエヌコーポレーション）'
      },
      {
        name: '『WEB＋DB PRESS Vol.120』（技術評論社）',
        src: '主な特集「自作OS×自作ブラウザで学ぶWebページが表示されるまで」「最新Vue.js3　基本から新機能まで完全網羅」'
      },
      {
        name: '『Software Design 2022年2月号』（技術評論社）',
        src: '主な特集「JavaScriptの関数を極める」「GitHub Actionsで簡単・快適CI／CD」'
      }
    ]
  }
]
</script>

<template>
  <section class="bl_container">
    <h2>自己PR</h2>
    <section v-for="(pr, index) in PRs" :key="index" class="bl_card">
      <h3>{{ pr.title }}</h3>
      <p>{{ pr.body }}</p>
      <ul v-if="pr.list" class="bl_list">
        <li v-for="(item, listIndex) in pr.list" :key="listIndex" class="bl_list_item">
          <div>{{ item.name }}</div>
          <div>{{ item.src }}</div>
        </li>
      </ul>
    </section>
  </section>
</template>

<style scoped lang="scss">
.bl_list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  padding-left: 0;
  font-size: 0.9rem;
  &_item {
    border-top: gray solid 1px;
  }
}
</style>
