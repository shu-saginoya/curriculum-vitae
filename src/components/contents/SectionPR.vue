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
      '現在の業務の中での課題や問題点を意識して優先順位をつけながら改善に取り組んでいます。',
      'また、社内やメンバー間での意識のずれが生まれないように積極的にコミュニケーションをとって知識を共有するようにしています。'
    ]
  },
  {
    title: 'プログラミングの経歴',
    body: [
      '高校時代は情報技術科という学科に属しており、その中でC言語や機械語などの授業がありその体験が基礎となっています。',
      'その後、私が就職した3つの会社のうちはじめの会社（大知）の業務は主に出版でしたが、アプリケーション開発の機会があり、その際にPHPとMySQLをはじめてさわりました。（15年ほど前・2008年ころ）',
      '3つ目（現在）の会社では、HTML・CSSの業務が主体でしたが、PHPで簡単なバックエンドのシステムを開発（CMS・検索システムなど）も行っていました。フロントエンドの本格的な導入は2年半ほど前（2021年4月ころ）で、Vue.js・Nuxtを中心に大幅な開発環境の更新を行っています。また、事務作業などの効率化のためにローカル環境でPythonを利用しています。'
    ]
  },
  {
    title: '主体的にプロジェクトを運営',
    body: [
      '現在所属している会社では1人での作業がほとんどですが、1つ前の会社（ヘレナメディアリサーチ）ではプロデューサーのような役割も担っていました。',
      'その会社では、はじめ映像制作の部署に所属していましたが、途中から営業企画部に転属となります。しかし、単純な営業活動だけではなく、映像制作の際のノウハウや人脈をもとに、企画や人選・スケジュール管理などを行いプロジェクトを中心となって進めていました。',
      '過去を振り返れば、学生のころは生徒会や文化祭の実行委員長などの活動も多かったので、そのようにたくさんの人たちと関わりあいながら中心的に物事をすすめていく資質はあると思っております。'
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
