

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
      <div class="flex flex-col justify-center items-center h-full w-full p-4">
        <div class="relative rounded-lg shadow-lg p-8 ">
          <div class="absolute inset-0 bg-[var(--primary-color)] opacity-70 rounded-lg"></div>
          <div class="relative z-10 text-center">
            <h1 class="text-xl md:text-4xl text-[var(--secondary-color)] font-semibold underline mb-4">Section Administrateur</h1>
            <p class="text-lg text-[var(--secondary-color)] ">Bienvenue dans la section administrateur, où vous pouvez gérer toutes les configurations du système.</p>
          <UiLogo/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>