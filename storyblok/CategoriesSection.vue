<script setup lang="ts">
defineProps({ blok: Object })

const { categories, fetchCategories, formattedCategories } = useCategories()
await fetchCategories()
</script>
<template>
  <section v-editable="blok" class="container mx-auto">
    <SectionTitle title="Categorias" />

    <div class="flex justify-center items-center flex-wrap gap-4">
      <article
        class="flex flex-col justify-center w-[200px] items-center relative p-4 border border-white hover:cursor-pointer"
        v-for="{ uuid, path, icon, name } of formattedCategories"
        :key="uuid">
        <NuxtLink :to="path" class="absolute top-0 bottom-0 left-0 right-0" />

        <figure class="w-[50px] h-[50px] relative overflow-hidden">
          <NuxtImg
            :src="icon"
            :alt="name"
            class="abolute w-full h-full object-cover cursor-pointer" />
        </figure>
        <h3 class="font-bold font-tilt text-primary-dark mt-4">
          {{ name }}
        </h3>
      </article>
    </div>
  </section>
</template>
