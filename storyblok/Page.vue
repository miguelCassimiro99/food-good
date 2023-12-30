<template>
  <div v-editable="blok" class="w-full overflow-x-hidden">
    <div class="">
      <StoryblokComponent
        v-for="blok in blok.body"
        :key="blok._uid"
        :blok="blok" />
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
