<script setup lang="ts">
import BlockHeadingVue from '@/components/elements/BlockHeading.vue'
import SectionSummary from '@/components/contents/SectionSummary.vue'
import SectionStrengths from '@/components/contents/SectionStrengths.vue'
import SectionCareer from '@/components/contents/SectionCareer.vue'
import SectionSkill from '@/components/contents/SectionSkill.vue'
import SectionPR from '@/components/contents/SectionPR.vue'

const updateDate = '2023年10月18日'
const name = '鷺野谷 周'
</script>

<template>
  <main class="flex flex-col gap-8">
    <BlockHeadingVue title="職務経歴書">
      <ul class="text-right">
        <li>更新日：{{ updateDate }}</li>
        <li>氏名：{{ name }}</li>
      </ul>
    </BlockHeadingVue>
    <SectionSummary></SectionSummary>
    <SectionStrengths></SectionStrengths>
    <SectionSkill></SectionSkill>
    <SectionCareer></SectionCareer>
    <SectionPR></SectionPR>
  </main>
</template>
