
<template>
  <div class="flex flex-col md:flex-row w-full">
    <div class="w-full md:w-1/6">
      <div class="hidden md:block md:h-screen bg-[var(--secondary-color)] border-2 border-[var(primary)] ">
        <NavigationSideBar/>
      </div>
      <div class="block md:hidden h-auto bg-[var(--secondary-color)] border-2 border-[var(primary)] ">
        <NavigationBurgerSideMenuAdmin/>
      </div>
    </div>
    <div class="w-full md:w-5/6">
      <UiAdminTitle/>
      <p class="text-black text-xl p-8">Ici bientôt la gestion des Chiffres</p>
    </div>
  </div>
</template>
