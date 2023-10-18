<script setup lang="ts">
import SectionSummary from '@/components/contents/SectionSummary.vue'
import SectionStrengths from '@/components/contents/SectionStrengths.vue'
import SectionCareer from '@/components/contents/SectionCareer.vue'
import SectionSkill from '@/components/contents/SectionSkill.vue'
import SectionPR from '@/components/contents/SectionPR.vue'
</script>

<template>
  <main class="flex flex-col gap-8">
    <SectionSummary></SectionSummary>
    <SectionStrengths></SectionStrengths>
    <SectionSkill></SectionSkill>
    <SectionCareer></SectionCareer>
    <SectionPR></SectionPR>
  </main>
</template>
