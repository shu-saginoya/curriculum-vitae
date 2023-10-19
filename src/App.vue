<script setup lang="ts">
import { RouterView, RouterLink } from 'vue-router'

const updateDate = '2023年10月18日'
const name = '鷺野谷 周'
const engName = 'Shu Saginoya'
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <header>
      <nav class="print:hidden bg-slate-700 text-white flex gap-4 px-6">
        <RouterLink to="/">HOME</RouterLink>
        <RouterLink to="/books">参考書籍</RouterLink>
      </nav>
      <h1 class="text-xl font-bold tracking-widest text-center pt-10">職務経歴書</h1>
      <ul class="text-right">
        <li>
          <time>{{ updateDate }}</time> 現在
        </li>
        <li>
          氏名： {{ name }}<span class="text-sm">({{ engName }})</span>
        </li>
      </ul>
    </header>
    <RouterView />
    <footer class="pb-10">
      <p class="text-right">以上</p>
    </footer>
  </div>
</template>
