<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
}

const menuOptions = [
  {
    label: "Food",
    url: "#"
  },
  {
    label: "Drink",
    url: "#"
  },
  {
    label: "Recipe Index",
    url: "#"
  },
  {
    label: "Features",
    url: "#"
  },
  {
    label: "Life",
    url: "#"
  },
];

const socialNetWorks = [
  {
    icon: "ph:github-logo-fill",
    url: "#"
  },
  {
    icon: "ph:linkedin-logo-fill",
    url: "#",
  },
  {
    icon: "ph:pinterest-logo-fill",
    url: "#",
  },
  {
    icon: "ph:envelope-fill",
    url: "#",
  }
]

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
  <header class="h-[10vh] w-[100vw] flex justify-center items-center relative shadow-sm">
    <nav class="flex justify-between items-center h-full px-2">
      <div class="gap-4 hidden md:flex">
        <NuxtLink to="#">About</NuxtLink>
        <NuxtLink to="#">Contact</NuxtLink>
      </div>

      <div>
        <button class="z-50 absolute w-full top-0 bottom-0 left-0 right-0 flex justify-center bg-white md:hidden" @click="toggleMenu()">
          <NuxtImg
            src="/food-good-principal.svg"
            sizes="sm:14vw"
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

  <transition name="slide-fade" mode="out-in" class="bg-white shadow-xl  md:hidden">
    <div v-if="isMenuOpen" @click.self="toggleMenu()" class="absolute w-full top-[10vh] h-[40vh] z-10 bg-red-400 flex flex-col justify-between p-8">
      <div class="flex flex-col justify-evenly items-start h-full gap-2">
        <NuxtLink
          v-for="option in menuOptions"
          :key="option.label"
          class="font-extrabold tracking-wide uppercase text-primary-dark font-questrial"
        >
          {{ option.label }}
        </NuxtLink>
      </div>

      <div class="flex justify-end gap-3">
        <NuxtLink
          v-for="network in socialNetWorks"
          :key="network.icon"
          :to="network.url"
        >
          <Icon :name="network.icon" class="w-7 h-7 text-secondary-dark" />
        </NuxtLink>
      </div>
    </div>
  </transition>
</div>
</template>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

</style>