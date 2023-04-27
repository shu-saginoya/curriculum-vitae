<script setup lang="ts">
import { RouterView } from 'vue-router'

const updateDate = '2023-04-27'
</script>

<template>
  <header class="bl_header">
    <h1>職務経歴書</h1>
    <p>
      更新日：<time :datetime="updateDate">{{ updateDate }}</time>
    </p>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
.bl_header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
</style>
