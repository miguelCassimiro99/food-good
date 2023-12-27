<script setup lang="ts">
import { ref } from 'vue'
import type { FormatedRecipesType } from '~/types/recipes'

const filter = ref('')
const categoryFiltered = ref('')

const { fetchRecipes, formatedRecipes } = useRecipes(filter, categoryFiltered)
const { categories, fetchCategories } = useCategories()

await fetchCategories()
await fetchRecipes()

const filteredRecipes = computed<FormatedRecipesType[]>(() => {
  return formatedRecipes.value.filter(
    (recipe): any =>
      recipe.name
        .toLocaleLowerCase()
        .includes(filter.value.toLocaleLowerCase()) &&
      recipe.category.name
        .toLocaleLowerCase()
        .includes(categoryFiltered.value.toLocaleLowerCase())
  )
})
</script>
<template>
  <section class="recipes-list w-full">
    <div class="container mx-auto py-20">
      <HeaderTitle title="Receitas" />

      <div class="w-full flex justify-between py-4">
        <ClientOnly>
          <div
            class="form-control w-1/3 bg-gray-100 flex items-center px-2 rounded-lg">
            <input
              type="text"
              class="w-full bg-gray-100 px-4 py-2 text-sm focus:outline-0"
              v-model="filter" />
            <Icon
              name="ph:magnifying-glass-bold"
              class="w-6 h-6 text-gray-500 transition-all hover:text-secondary-dark" />
          </div>
        </ClientOnly>

        <div
          v-if="categories && categories.length > 0"
          class="form-control w-1/3 bg-gray-100 flex items-center px-2 rounded-md">
          <select
            class="w-full bg-gray-100 rounded-lg px-4 py-2 text-sm focus:outline-0"
            v-model="categoryFiltered">
            <option value="">Todas</option>
            <option
              v-for="category in categories"
              :key="category"
              :value="category.name">
              {{ category.name }}
            </option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-12 items-start">
        <Card
          class="col-span-1"
          v-for="recipe of filteredRecipes"
          :recipe="recipe" />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
