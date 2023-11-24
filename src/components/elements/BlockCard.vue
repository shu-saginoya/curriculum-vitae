<script setup lang="ts">
defineProps<{
  title: string
  to?: string
}>()
</script>

<template>
  <component
    :is="to ? 'RouterLink' : 'div'"
    :to="to"
    class="block p-2 border border-slate-400 hover:bg-slate-100"
  >
    <div>{{ title }}</div>
    <slot />
  </component>
</template>
