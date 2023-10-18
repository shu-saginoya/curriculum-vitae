<script setup lang="ts">
import { RouterView } from 'vue-router'

const updateDate = '2023年10月18日'
const name = '鷺野谷周'
</script>

<template>
  <div class="max-w-4xl mx-auto py-8">
    <header>
      <h1 class="text-xl font-bold text-center">職務経歴書</h1>
      <ul class="text-right">
        <li>
          <time>{{ updateDate }}</time
          >現在
        </li>
        <li>氏名：{{ name }}</li>
      </ul>
    </header>
    <RouterView />
    <footer>
      <p class="text-right">以上</p>
    </footer>
  </div>
</template>
