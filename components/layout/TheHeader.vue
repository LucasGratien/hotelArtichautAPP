<template>
  <nav class="navbar navbar-expand-md">
    <div class="flex justify-between items-center mx-auto w-full px-4">


      <div class="flex items-center space-x-2">
        <img class="h-10 md:h-16" src="public/assets/image/logoArtichaut.png" alt="Logo" />
        <div class="title-wrapper flex flex-col items-start ">
          <UiTittle title="L'Artichaut"></UiTittle>
          <p class="text-center w-full -mt-3">* * *</p>
        </div>
      </div>


      <div class="hidden lg:block ">
        <NavigationMenuHorizontal />
      </div>
      <div class="block lg:hidden">
        <NavigationBurgerMenu/>
      </div>
    </div>
  </nav>
</template>

<script setup lang="js">
</script>

<style scoped>
.navbar {
  background-color: var(--secondary-color);
}

.title-wrapper p {
 color: var(--primary-color);
}

</style>
