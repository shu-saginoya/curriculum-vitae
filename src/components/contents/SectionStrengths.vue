<script setup lang="ts">
import MainSection from '@/components/elements/MainSection.vue'
import BlockList from '@/components/elements/BlockList.vue'

const title = '得意とする分野・スキル'
const list = ['aaaa', 'bbbbb']
</script>

<template>
  <MainSection :title="title">
    <BlockList :items="list"></BlockList>
  </MainSection>
</template>
