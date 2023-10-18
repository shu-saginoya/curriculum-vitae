<script setup lang="ts">
import { RouterView } from 'vue-router'

const updateDate = '2023年10月18日'
const name = '鷺野谷 周'
const engName = 'Shu Saginoya'
</script>

<template>
  <div class="max-w-4xl mx-auto py-10">
    <header>
      <h1 class="text-xl font-bold tracking-widest text-center">職務経歴書</h1>
      <ul class="text-right">
        <li>
          <time>{{ updateDate }}</time> 現在
        </li>
        <li>氏名： {{ name }}<br />({{ engName }})</li>
      </ul>
    </header>
    <RouterView />
    <footer>
      <p class="text-right">以上</p>
    </footer>
  </div>
</template>
