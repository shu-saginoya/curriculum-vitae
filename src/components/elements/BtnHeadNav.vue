<script setup lang="ts">
defineProps<{
  to: string
}>()
</script>

<template>
  <RouterLink :to="to" class="hover:bg-slate-500 px-2 rounded">
    <slot />
  </RouterLink>
</template>
