<script setup lang="ts">
import BlockHeadingVue from '@/components/elements/BlockHeading.vue'
import SectionLinks from '@/components/contents/SectionLinks.vue'
import SectionSNS from '@/components/contents/SectionSNS.vue'
</script>

<template>
  <main class="flex flex-col gap-8">
    <BlockHeadingVue title="ポートフォリオ">
      <p class="text-center">鷺野谷 周 - Saginoya shu</p>
    </BlockHeadingVue>
    <SectionLinks />
    <SectionSNS />
  </main>
</template>
