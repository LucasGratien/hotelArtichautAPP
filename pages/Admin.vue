
<template>
  <div class="flex w-full">

    <div class="w-1/6 bg-[#4b6447] border-2 border-[#eac684] ">
      <div class="hidden md:block navigationsidebar">
      <NavigationSidebar/>
      </div>
      <div class="block md:hidden navigationburgersidemenuadmin">
      <NavigationBurgerSideMenuAdmin/>
      </div>
    </div>

    <div class="w-5/6 ">
    <UiAdminTitle/>
      <FormContentForm/>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>