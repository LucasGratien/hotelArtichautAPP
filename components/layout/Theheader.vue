<template>
  <nav class="navbar navbar-expand-md " >
    <div class="flex justify-between mx-2 items-center">
      <img class="h-10" src="@/components/assets/image/logoArtichaut.png" alt=""></img>
      <div class="title-wrapper">
        <div class="flex flex-col items-center justify-center">
          <Tittle title="L'Artichaut"></Tittle>
          <p class="-mt-3"> * * * </p>
        </div>
      </div>
      <div class="menuburger " ><Burgermenu/></div>
    </div>
  </nav>
</template>
<script setup lang="ts">
import Tittle from "~/components/ui/Tittle.vue";
import Burgermenu from "~/components/navigation/Burgermenu.vue";
</script>
<style scoped>
.title-wrapper{
  @apply flex flex-row items-center justify-center;
}
.navbar{
  background-color: rgba(75, 101, 71, 1);
}
.title-wrapper p{
  color: rgba(234, 198, 132, 1);
}
</style>