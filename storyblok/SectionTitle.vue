<script setup>
defineProps({ blok: Object })
</script>
<template>
  <div class="text-center flex w-full justify-center mt-20 md:mt-24 mb-16">
    <h3
      class="text-2xl text-primary-dark font-tilt font-bold border-b-2 pb-2 border-secondary-dark">
      {{ blok.title }}
    </h3>
  </div>
</template>
<style scoped></style>
