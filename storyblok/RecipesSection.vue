<script setup lang="ts">
import { useRecipes } from '~/composables/useRecipes';
import { useCategories } from '~/composables/useCategories';

defineProps({ blok: Object})

const { recipes, fetchRecipes, formatedRecipes } = useRecipes();
await fetchRecipes();



</script>
<template>
  <section v-editable="blok" class="flex flex-col justify-center items-center">
    <SectionTitle title="Receitas" />


    <!-- <pre class="overflow-hidden max-w-lg">
      <pre>{{ formatedRecipes[1] }}</pre>
      <pre>{{ recipes[1] }}</pre>
    </pre> -->

    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 content-start gap-4 my-12 ">
      <article
        class="group flex flex-col justify-center items-center relative p-4 border border-white hover:cursor-pointer"
        v-for="{ uuid, name, slug, image, category } of formatedRecipes"
        :key="uuid"
        >
          <NuxtLink
            :to="`/${slug}`"
            class="absolute top-0 bottom-0 left-0 right-0"
          />
    
          <figure class="w-[200px] h-[200px] relative overflow-hidden">
            <NuxtImg
              :src="image.filename"
              :alt="image.alt"
              class="abolute w-full h-full object-cover hover:scale-125 transition duration-500 cursor-pointer"
            />
          </figure>
          <h3
            class="font-bold font-tilt text-primary-dark mt-4 group-hover:text-secondary-dark"
          >
            {{ name }}
          </h3>
    
      </article>
    </div>
  </section>
</template>