<script setup lang="ts">
import MainSection from '@/components/elements/MainSection.vue'
import BlockSentence from '@/components/elements/BlockSentence.vue'

const title = '職務要約'
const sentence = ['aaaa', 'bbbbb']
</script>

<template>
  <MainSection :title="title">
    <BlockSentence :items="sentence"></BlockSentence>
  </MainSection>
</template>
