<script setup lang="ts">
import { useRecipes } from '~/composables/useRecipes';

defineProps({ blok: Object})

const { recipes, fetchRecipes } = useRecipes();
await fetchRecipes();

</script>
<template>
  <section v-editable="blok" class="flex flex-col justify-center items-center">
    <SectionTitle title="Receitas" />

    <div class="">

    </div>
    <pre>{{ recipes }}</pre>

    <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 content-start gap-4 my-12">
      <!-- <article
        class="flex flex-col justify-center items-center relative p-4 border border-white hover:cursor-pointer"
        v-for="{ uuid, path, icon, name } of "
        :key="uuid"
        >
          <NuxtLink
            :to="path"
            class="absolute top-0 bottom-0 left-0 right-0"
          />
    
          <figure class="w-[50px] h-[50px] relative overflow-hidden">
            <NuxtImg
              :src="icon"
              :alt="name"
              class="abolute w-full h-full object-cover cursor-pointer"
            />
          </figure>
          <h3
            class="font-bold font-tilt text-primary-dark mt-4"
          >
            {{ name }}
          </h3>
    
      </article> -->
    </div>
  </section>
</template>