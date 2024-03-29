<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useRecipes } from '~/composables/useRecipes'
import { RichTextRenderer } from '@marvr/storyblok-rich-text-vue-renderer'

const route = useRoute()
const { slug } = route.params

const { fetchRecipeBySlug } = useRecipes()

const story = await fetchRecipeBySlug(slug as string)

const recipeIngredientsContent = computed(() =>
  renderRichText(story.content.ingredients)
)
const recipeSteps = computed(() => renderRichText(story.content.steps))

useHead({
  title: `${story?.content.title} - Sushi Wuut`,
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: `Como preparar ${story?.content.title}`,
    },
    // og
    {
      hid: 'og:description',
      property: 'og:description',
      content: story?.content.excerpt,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: `${story?.content.title} - Food Good`,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: 'article',
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: `https://recipez-book.netlify.app/recipes/${slug}`,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: story?.content.media.filename,
    },
    {
      hid: 'og:image:alt',
      property: 'og:image:alt',
      content: story?.content.media?.alt,
    },
    {
      hid: 'og:publish_date',
      property: 'og:publish_date',
      content: story?.published_at,
    },
  ],
})
</script>
<template>
  <div
    class="container mx-auto py-10 md:py-20 flex flex-col items-center justify-start min-h-screen overflow-x-hidden">
    <header v-if="story" class="relative">
      <NuxtImg
        :src="story.content.media.filename"
        :alt="story.content.media.alt"
        class="aspect-square md:rounded-lg" />

      <div
        class="bg-white rounded-xl overflow-hidden shadow-md p-8 relative mx-auto -mt-6 md:mx-0 md:absolute right-0 md:w-full md:top-[40%] md:-right-20 max-w-sm">
        <h1 class="font-bold font-tilt text-2xl text-secondary-dark">
          {{ story.name }}
        </h1>

        <ul
          class="flex justify-start gap-12 mt-4 border-b-2 border-accent/20 py-2 w-full">
          <li class="flex items-center">
            <Icon
              name="ph:clock-countdown-bold"
              class="w-5 h-5 text-accent/60" />
            <span class="ml-2 text-accent/60 font-bold">{{
              story.content.prep_time
            }}</span>
          </li>
          <li class="flex items-center">
            <Icon name="ph:users-bold" class="w-5 h-5 text-accent/60" />
            <span class="ml-2 text-accent/60 font-bold">{{
              story.content.diners
            }}</span>
          </li>
        </ul>
        <div
          v-html="recipeIngredientsContent"
          class="text-ellipsis py-4 text-primary-dark text-sm"></div>
      </div>
    </header>

    <article class="md:mt-20 recipe-steps-section px-4">
      <h2 class="my-8 text-2xl font-bold text-primary">Modo de Preparo</h2>

      <div v-html="recipeSteps" class="text-primary-dark"></div>
    </article>

    <div class="relative w-full max-w-[400px] h-[300px] overflow-hidden mt-20">
      <NuxtImg
        :src="story.content.media.filename"
        :alt="story.content.media.alt"
        class="aspect-square md:rounded-lg absolute w-full h-full object-center" />
    </div>
  </div>
</template>
<style scoped></style>
