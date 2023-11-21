<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useRecipes } from '~/composables/useRecipes';

const route = useRoute();
const { slug } = route.params;

const { fetchRecipeBySlug } = useRecipes();

const story = await fetchRecipeBySlug(slug as string);
</script>
<template>
  <div>
    <header v-if="story">
      <NuxtImg
        :src="story.content.media.filename"
        :alt="story.content.media.alt"
        class="aspect-square"
      />

      <div class="bg-white roudned-lg overflow-hidden shadow-md p-4">
        <h1
          class="font-bold font-tilt text-3xl text-secondary-dark"
        >
          {{ story.name }}
        </h1>

        <ul class="flex w-1/2 justify-start gap-12 mt-4">
          <li class="flex items-center">
            <Icon name="ph:clock-countdown-bold" class="w-5 h-5 text-accent/60" />
            <span class="ml-2 text-accent/60 font-bold">{{ story.content.prep_time }}</span>
          </li>
          <li class="flex items-center">
            <Icon name="ph:users-bold" class="w-5 h-5 text-accent/60" />
            <span class="ml-2 text-accent/60 font-bold">{{ story.content.diners }}</span>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>
<style scoped>
</style>