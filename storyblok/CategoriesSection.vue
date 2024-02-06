<script setup lang="ts">
defineProps({ blok: Object })

const { categories, fetchCategories, formattedCategories } = useCategories()
await fetchCategories()

const returnCategoryIcon = (slug: string) => {
  if (slug == 'bebidas') return 'streamline-emojis:clinking-glasses-5'
  if (slug == 'doces') return 'streamline-emojis:shaved-ice'
  if (slug == 'comida-salgada') return 'streamline-emojis:pizza-1'

  return 'streamline-emojis:pizza-1'
}
</script>
<template>
  <section v-editable="blok" class="container mx-auto">
    <div class="flex justify-center items-center flex-wrap gap-4">
      <article
        class="flex group flex-col justify-center w-[200px] items-center relative p-4 border border-white hover:cursor-pointer"
        v-for="{ uuid, path, icon, name, slug } of formattedCategories"
        :key="uuid">
        <NuxtLink
          :to="`recipes?category=${name}`"
          class="absolute top-0 bottom-0 left-0 right-0" />

        <figure class="w-[50px] h-[50px] relative overflow-hidden">
          <Icon
            :name="returnCategoryIcon(slug)"
            class="w-[50px] h-[50px] text-secondary-dark" />
        </figure>
        <h3
          class="font-bold font-tilt text-primary-dark group-hover:text-secondary-dark transition-all mt-4">
          {{ name }}
        </h3>
      </article>
    </div>
  </section>
</template>
