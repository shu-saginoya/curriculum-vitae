<script setup lang="ts">
import { useLinks } from '@/composables/useLinks'
import MainSection from '@/components/elements/MainSection.vue'
import BlockCard from '@/components/elements/BlockCard.vue'

const { links } = useLinks()
</script>

<template>
  <MainSection>
    <ul class="flex justify-center gap-2">
      <li v-for="link in links" :key="link.to">
        <BlockCard :title="link.name" :to="link.to"> </BlockCard>
      </li>
    </ul>
  </MainSection>
</template>
