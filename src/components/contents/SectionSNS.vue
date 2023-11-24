<script setup lang="ts">
const items = [
  {
    id: 'email',
    name: 'E-Mail',
    mail: 'shu.saginoya@gmail.com'
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/shu-saginoya'
  },
  {
    id: 'zenn',
    name: 'Zenn',
    url: 'https://zenn.dev/shu_saginoya'
  }
]
</script>

<template>
  <dl v-for="item in items" :key="item.id" class="text-center">
    <dt class="font-bold">{{ item.name }}</dt>
    <dd v-if="item.mail">
      <span>{{ item.mail }}</span>
    </dd>
    <dd v-if="item.url">
      <a :href="item.url" target="_blank" class="text-blue-500">{{ item.url }}</a>
    </dd>
  </dl>
</template>
