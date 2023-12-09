<script setup lang="ts">
const { recipes, fetchRecipes, formatedRecipes } = useRecipes()
await fetchRecipes()
</script>
<template>
  <section class="recipes-list w-full">
    <div class="container mx-auto py-20">
      <SectionTitle title="Receitas" />

      <div class="grid grid-cols-4 gap-12 items-start">
        <Card
          class="col-span-1"
          v-for="recipe of formatedRecipes"
          :recipe="recipe" />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
