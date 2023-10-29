<template>
  <div v-editable="blok" class="pt-28">
    <div class="w-full max-w-6xl px-4">
      <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    </div>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>