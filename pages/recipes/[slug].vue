<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useRecipes } from '~/composables/useRecipes';
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer';

const route = useRoute();
const { slug } = route.params;

const { fetchRecipeBySlug } = useRecipes();

const story = await fetchRecipeBySlug(slug as string);

const recipeIngredientsContent = computed(() => renderRichText(story.content.ingredients))
const recipeSteps = computed(() => renderRichText(story.content.steps));

</script>
<template>
  <div class="container mx-auto py-10 md:py-20 flex flex-col items-center justify-start min-h-screen overflow-x-hidden">
    <header v-if="story" class="relative">
      <NuxtImg
        :src="story.content.media.filename"
        :alt="story.content.media.alt"
        class="aspect-square md:rounded-lg"
      />

      <div class="bg-white rounded-xl overflow-hidden shadow-md p-8 relative mx-auto -mt-6 md:mx-0 md:absolute right-0 md:w-full md:top-24 md:-right-40 max-w-lg">
        <h1
          class="font-bold font-tilt text-3xl text-secondary-dark"
        >
          {{ story.name }}
        </h1>

        <ul class="flex  justify-start gap-12 mt-4 border-b-2 border-accent/20 py-2 w-full">
          <li class="flex items-center">
            <Icon name="ph:clock-countdown-bold" class="w-5 h-5 text-accent/60" />
            <span class="ml-2 text-accent/60 font-bold">{{ story.content.prep_time }}</span>
          </li>
          <li class="flex items-center">
            <Icon name="ph:users-bold" class="w-5 h-5 text-accent/60" />
            <span class="ml-2 text-accent/60 font-bold">{{ story.content.diners }}</span>
          </li>
        </ul>
        <div v-html="recipeIngredientsContent" class="text-ellipsis py-4 text-primary-dark"></div>
      </div>
    </header>

    <article class="md:mt-20 recipe-steps-section px-4">
      <h2 class="my-8 text-2xl font-bold text-primary">Modo de Preparo</h2>

      <div v-html="recipeSteps" class="text-primary-dark"></div>
    </article>
  </div>
</template>
<style scoped>

</style>