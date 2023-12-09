<template>
  <div v-editable="blok" class="w-full py-20 lg:py-24 overflow-x-hidden">
    <div class="">
      <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
    </div>
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>