<script setup>
defineProps({ title: String })
</script>
<template>
  <div class="text-center flex w-full justify-center">
    <h3
      class="text-2xl text-primary-dark font-tilt font-bold border-b-2 pb-2 border-secondary-dark">
      {{ title }}
    </h3>
  </div>
</template>
<style scoped></style>
