

<template>
  <div class="flex flex-col md:flex-row w-full">
    <div class="w-full md:w-1/6">
      <div class="hidden md:block md:h-screen bg-[var(--secondary-color)] border-2 border-[var(--primary-color)] ">
        <NavigationSideBar/>
      </div>
      <div class="block md:hidden h-auto bg-[var(--secondary-color)] border-2 border-[var(--primary-color)] ">
        <NavigationBurgerSideMenuAdmin/>
      </div>
    </div>
    <div class="w-full md:w-5/6">
      <UiAdminTitle
          title="Accueil-Admin"
      />
      <div class="flex flex-col justify-center items-center h-full w-full" >
        <div class="bg-[var(--primary-color)] rounded-lg shadow-md p-6">
      <h1 class="text-xl md:text-6xl text-[var(--secondary-color)] "> Section Administrateur</h1>
          <UiLogo/>
      </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>