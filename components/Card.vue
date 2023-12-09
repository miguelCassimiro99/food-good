<script setup lang="ts">
import { type FormatedRecipesType } from '@/types/recipes'

defineProps<{
  recipe: FormatedRecipesType
}>()
</script>
<template>
  <article
    class="group flex flex-col justify-center items-center relative p-4 border border-white hover:cursor-pointer">
    <span>{{ recipe.category.name }}</span>
    <figure class="w-[200px] h-[200px] relative overflow-hidden">
      <NuxtImg
        :src="recipe.image.filename"
        :alt="recipe.image.alt"
        class="abolute w-full h-full object-cover hover:scale-125 transition duration-500 cursor-pointer" />
      <div
        class="w-10 h-10 rounded-full bg-white shadow-sm absolute flex justify-center items-center p-1 z-20 right-2 bottom-2">
        <figure class="w-[30px] h-[30px] relative overflow-hidden">
          <NuxtImg
            :src="recipe.category.content.media.filename"
            :alt="recipe.category.name"
            class="abolute w-full h-full object-cover cursor-pointer" />
        </figure>
      </div>
    </figure>

    <h3
      class="font-bold font-tilt text-center text-primary-dark py-4 group-hover:text-secondary-dark">
      <NuxtLink :to="`/recipes/${recipe.slug}`">
        {{ recipe.name }}
      </NuxtLink>
    </h3>
  </article>
</template>
