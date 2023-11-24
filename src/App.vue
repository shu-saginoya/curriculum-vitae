<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useLinks } from '@/composables/useLinks'
import BtnHeadNav from '@/components/elements/BtnHeadNav.vue'

const { links } = useLinks()
</script>

<template>
  <header
    class="print:hidden bg-slate-700 text-white flex justify-between py-2 px-6 fixed top-0 w-full"
  >
    <p class="font-bold">ポートフォリオ</p>
    <nav class="flex gap-4">
      <BtnHeadNav v-for="link in links" :key="link.to" :to="link.to">
        {{ link.name }}
      </BtnHeadNav>
    </nav>
  </header>
  <div class="max-w-4xl mx-auto my-8">
    <RouterView />
  </div>
</template>
