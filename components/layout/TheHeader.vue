<template>
  <nav class="bg-[var(--secondary-color)] navbar-expand-md ">
    <div class="flex justify-between items-center mx-auto w-full px-4">
      <div class="flex items-center space-x-2">
        <NuxtLink to="/">
          <img
            class="h-10 md:h-16"
            src="@/assets/images/logoArtichaut.png"
            alt="Logo"
          />
        </NuxtLink>
        <div class="title-wrapper flex flex-col items-start">
          <NuxtLink to="/">
            <UiTittle title="L'Artichaut"></UiTittle>
            <p class="text-center w-full -mt-3">* * *</p>
          </NuxtLink>
        </div>
      </div>

      <div class="hidden lg:block">
        <NavigationMenuHorizontal />
      </div>
      <div class="block lg:hidden">
        <NavigationBurgerMenu />
      </div>
    </div>
  </nav>
</template>

<script setup lang="js"></script>

<style scoped>


.title-wrapper p {
  color: var(--primary-color);
}
</style>
