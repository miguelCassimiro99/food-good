<script setup lang="ts">
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const menuOptions = [
  {
    label: 'Receitas',
    url: '/recipes',
  },
  {
    label: 'Contato',
    url: '/#contato',
  },
]

const socialNetWorks = [
  {
    icon: 'ph:github-logo-fill',
    url: 'https://github.com/miguelCassimiro99',
  },
  {
    icon: 'ph:linkedin-logo-fill',
    url: 'https://www.linkedin.com/in/miguel-cassimiro',
  },
  {
    icon: 'ph:pinterest-logo-fill',
    url: 'https://pin.it/2eoXHcf',
  },
  {
    icon: 'ph:envelope-fill',
    url: 'mailto:miguel.cassimiro99@gmail.com',
  },
]
</script>
<template>
  <div class="flex flex-col w-full relative">
    <div
      class="justify-between items-center hidden md:flex px-0 md:px-12 md:py-4 font-tilt uppercase font-extrabold text-sm text-secondary-dark">
      <div class="flex gap-3">
        <NuxtLink to="/#contact" class="hover:text-primary-dark transition-all"
          >Contact</NuxtLink
        >
      </div>
      <div class="flex gap-3">
        <NuxtLink
          v-for="network in socialNetWorks"
          :key="network.icon"
          :to="network.url">
          <Icon
            :name="network.icon"
            class="w-5 h-5 text-secondary-dark hover:text-primary-dark transition-all" />
        </NuxtLink>
      </div>
    </div>
    <header
      class="h-[10vh] w-[100vw] flex justify-center items-center relative shadow-md">
      <nav
        class="flex justify-center items-center h-full px-2 md:gap-20 w-full max-w-7xl font- uppercase font-extrabold font-tilt text-lg text-primary-dark">
        <div class="gap-8 hidden md:flex">
          <NuxtLink
            to="/recipes"
            class="hover:text-secondary-dark transition-all"
            >Receitas</NuxtLink
          >
        </div>

        <div>
          <button
            class="z-50 absolute w-full top-0 bottom-0 left-0 right-0 flex justify-center bg-white md:hidden"
            @click="toggleMenu()">
            <NuxtImg src="/food-good-principal.png" sizes="sm:35vw" />
          </button>

          <NuxtLink to="/" class="hidden md:block mt-20">
            <NuxtImg src="/food-good-principal.png" sizes="md:15vw" />
          </NuxtLink>
        </div>

        <div class="gap-8 hidden md:flex">
          <NuxtLink to="#" class="hover:text-secondary-dark transition-all"
            >Ingredientes</NuxtLink
          >
        </div>
      </nav>
    </header>

    <transition
      name="slide-fade"
      mode="out-in"
      class="bg-white shadow-xl md:hidden">
      <div
        v-if="isMenuOpen"
        @click.self="toggleMenu()"
        class="absolute w-full top-[10vh] h-[40vh] z-10 bg-red-400 flex flex-col justify-between p-8">
        <div
          class="flex flex-col justify-evenly items-start h-full gap-2 relative">
          <NuxtLink
            :to="option.url"
            v-for="option in menuOptions"
            :key="option.label"
            class="font-extrabold tracking-wide uppercase text-primary-dark font-tilt z-20">
            {{ option.label }}
          </NuxtLink>
        </div>

        <div class="flex justify-end gap-3">
          <NuxtLink
            v-for="network in socialNetWorks"
            :key="network.icon"
            :to="network.url">
            <Icon
              :name="network.icon"
              class="w-7 h-7 text-secondary-dark hover:text-primary-dark transition-all" />
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
