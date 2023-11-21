<script setup lang="ts">
defineProps({ blok: Object })
</script>

<template>
  <div v-editable="blok">
    <article class="group flex flex-col justify-center items-center relative w-[250px]">
      <NuxtLink
        :to="blok ? blok.path : '/'"
        class="absolute top-0 bottom-0 left-0 right-0"
      />
      <figure class="w-[250px] h-[250px] relative overflow-hidden">
        <NuxtImg
          :src="blok ? blok.image.filename : '/food-good-principal.png'"
          :alt="blok ? blok.title : 'receita'"
          class="abolute w-full h-full object-cover hover:scale-125 transition duration-500 cursor-pointer"
        />
      </figure>
      <h3
        class="font-bold font-tilt text-primary-dark mt-4 group-hover:text-secondary-dark"
      >
        {{ blok ? blok.title : "receita" }}
      </h3>
    </article>
  </div>
</template>