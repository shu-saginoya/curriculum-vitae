<script setup lang="ts">
import sectionCareer from '@/components/sectionCareer.vue'
import sectionSkill from '@/components/sectionSkill.vue'
import sectionPR from '@/components/sectionPR.vue'
</script>

<template>
  <main class="bl_container">
    <section>
      <sectionCareer></sectionCareer>
    </section>
    <section>
      <sectionSkill></sectionSkill>
    </section>
    <section>
      <sectionPR></sectionPR>
    </section>
  </main>
</template>

<style scoped lang="scss">
.bl_container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
