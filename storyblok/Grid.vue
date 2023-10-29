<template>
  <div
    v-editable="blok"
    class="container mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-10 my-12 place-items-center xl:grid-cols-4 overflow-hidden"
  >
    <StoryblokComponent
      v-for="blok in blok.columns"
      :key="blok._uid"
      :blok="blok"
    />
  </div>
</template>
 
<script setup>
defineProps({ blok: Object })
</script>