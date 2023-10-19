<script setup lang="ts">
import MainSection from '@/components/elements/MainSection.vue'
import BlockListBooks from '@/components/elements/BlockListBooks.vue'

const title = '参考書籍の記録'
const books = [
  {
    name: 'HTML解体新書　仕様から紐解く本格入門',
    note: '著・太田良典、中村直樹（ボーンデジタル）'
  },
  {
    name: 'CSS設計完全ガイド　詳細解説＋実践的モジュール集',
    note: '著・半田惇志（技術評論社）'
  },
  {
    name: 'ステップアップJavaScript　フロントエンド開発の初級から中級へ進むために',
    note: '著・サークルアラウンド株式会社、佐藤正志、小笠原寛（翔泳社）'
  },
  {
    name: 'TypeScriptハンズオン',
    note: '著・掌田津耶乃（秀和システム）'
  },
  {
    name: 'プロを目指す人のためのTypeScript入門',
    note: '著・鈴木僚太（技術評論社）'
  },
  {
    name: 'Vue.jsプロフェッショナルWebプログラミング',
    note: '著・山田典明、長澤賢、関口勇樹（エムディーエヌコーポレーション）'
  },
  {
    name: 'Vue.js入門　基礎から実践アプリケーション開発まで',
    note: '著・川口和也、喜多啓介、野田陽平、手島拓也、片山信也（技術評論社）'
  },
  {
    name: 'Vue 3 フロントエンド開発の教科書',
    note: '著・WINGS プロジェクト、齊藤新三（技術評論社）'
  },
  {
    name: 'フロントエンド開発入門　プロフェッショナルな開発ツールと設計・実装',
    note: '著・安達稜、武田諭（秀和システム）'
  },
  {
    name: 'フロントエンド開発のためのセキュリティ入門',
    note: '著・平野昌士（翔泳社）'
  },
  {
    name: 'UIデザイン必携',
    note: '著・原田秀司（翔泳社）'
  },
  {
    name: '実践力を身につけるPythonの教科書',
    note: '著・クジラ飛行机（マイナビ出版）'
  },
  {
    name: 'Python　Django3　超入門',
    note: '著・掌田津耶乃（秀和システム）'
  },
  {
    name: 'プロフェッショナルWebプログラミング　Laravel',
    note: '著・久保田 賢二朗、荒井 和平、大橋 佑太（エムディエヌコーポレーション）'
  },
  {
    name: 'WEB＋DB PRESS Vol.120',
    note: '主な特集「自作OS×自作ブラウザで学ぶWebページが表示されるまで」「最新Vue.js3　基本から新機能まで完全網羅」（技術評論社）'
  },
  {
    name: 'Software Design 2022年2月号',
    note: '主な特集「JavaScriptの関数を極める」「GitHub Actionsで簡単・快適CI／CD」（技術評論社）'
  }
]
</script>

<template>
  <MainSection :title="title">
    <p>技術の導入のために利用してきた書籍をまとめました。</p>
    <BlockListBooks :items="books"></BlockListBooks>
  </MainSection>
</template>
