<template>
  <div class="flex flex-col md:flex-row w-full">
    <div class="w-full md:w-1/6">
      <div class="hidden md:block md:h-screen bg-[#4b6447] border-2 border-[#eac684] ">
        <NavigationSidebar/>
      </div>
      <div class="block md:hidden h-auto bg-[#4b6447] border-2 border-[#eac684] ">
        <NavigationBurgerSideMenuAdmin/>
      </div>
    </div>
    <div class="w-full md:w-5/6">
      <UiAdminTitle/>
      <FormContentForm/>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>