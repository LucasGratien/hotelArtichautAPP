<template>
  <nav class="navbar navbar-expand-md">
    <div class="flex justify-between items-center mx-auto w-full px-4">


      <div class="flex items-center space-x-2">
        <img class="h-16" src="public/assets/image/logoArtichaut.png" alt="Logo" />
        <div class="title-wrapper flex flex-col items-start ">
          <UiTittle title="L'Artichaut"></UiTittle>
          <p class="text-center w-full -mt-3">* * *</p>
        </div>
      </div>


      <div class="hidden lg:block menuhorizontal">
        <NavigationMenuhorizontal />
      </div>
      <div class="block lg:hidden menuburger">
        <NavigationBurgermenu />
      </div>
    </div>
  </nav>
</template>

<script setup lang="js">
</script>

<style scoped>
.navbar {
  background-color: rgba(75, 101, 71, 1);
}

.title-wrapper p {
  color: rgba(234, 198, 132, 1);
}
img {
  @apply h-16;
}
</style>
