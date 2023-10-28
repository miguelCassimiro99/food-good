<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

</script>
<template>
<div class="flex flex-col w-full px-0 md:px-8 relative">
  <div class="justify-between items-center hidden md:flex">
    <div class="flex gap-3">
      <NuxtLink to="#">About</NuxtLink>
      <NuxtLink to="#">Contact</NuxtLink>
    </div>

    <div class="flex gap-3">
      <NuxtLink to="#">Instagram</NuxtLink>
      <NuxtLink to="#">Github</NuxtLink>
      <NuxtLink to="#">Discord</NuxtLink>
      <NuxtLink to="#">Pinteres</NuxtLink>
    </div>
  </div>
  <header class="h-[10vh] w-[100vw] flex justify-center items-center relative">
    <nav class="flex justify-between items-center h-full px-2">
      <div class="gap-4 hidden md:flex">
        <NuxtLink to="#">About</NuxtLink>
        <NuxtLink to="#">Contact</NuxtLink>
      </div>

      <div>
        <button class="z-50 absolute w-full top-0 bottom-0 left-0 right-0 flex justify-center bg-white md:hidden" @click="toggleMenu()">
          <NuxtImg
            src="/food-good-principal.png"
            sizes="sm:40vw"
          />
        </button>

        <NuxtLink to="/" class="hidden md:block">
          <NuxtImg
            src="/food-good-principal.svg"
            sizes="20vw"
          />
        </NuxtLink>
      </div>


      <div class="gap-4 hidden md:flex">
        <NuxtLink to="#">About</NuxtLink>
        <NuxtLink to="#">Contact</NuxtLink>
      </div>
    </nav>
  </header>

  <transition name="slide-fade" mode="out-in" class="bg-white shadow-xl border-t  md:hidden">
    <div v-if="isMenuOpen" @click.self="toggleMenu()" class="absolute w-full top-[10vh] h-[40vh] z-10 bg-red-400 flex flex-col justify-between p-4">
      <div class="flex flex-col justify-start items-start h-full gap-4">
        <NuxtLink>Food teste</NuxtLink>
        <NuxtLink>Drink</NuxtLink>
        <NuxtLink>Recipe Index</NuxtLink>
        <NuxtLink>Features</NuxtLink>
        <NuxtLink>Life</NuxtLink>
      </div>

      <div class="border flex justify-end gap-3">
        <Icon name="uil:github" color="black" />
        <Icon name="uil:github" color="black" />
        <Icon name="uil:github" color="black" />
      </div>
    </div>
  </transition>
</div>
</template>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

</style>