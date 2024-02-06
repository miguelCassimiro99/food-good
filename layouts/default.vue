<template>
  <div class="w-[100vw] max-w-[100vw] min-h-screen overflow-hidden bg-[#fff]">
    <LayoutNavbar />
    <main>
      <slot />
    </main>

    <footer
      class="h-20 bg-gray-100 shadow-md w-[100vw] flex justify-center items-center">
      <span>@food_good</span>
    </footer>
  </div>
</template>
