<template>
  <nav class="navbar navbar-expand-md">
    <div class="flex justify-between items-center mx-auto w-full px-4"> <!--J'applique les class tailwind de cette facon sur les enfants-->

      <img class="h-10" src="public/assets/image/logoArtichaut.png" alt="Logo" />


     <div class="title-wrapper flex flex-col items-center justify-center">  <!-- tailwind sur l'enfant title-->
        <Tittle title="L'Artichaut"></Tittle>
        <p class="-mt-3">* * *</p>
      </div>


     <div class="hidden md:block menuhorizontal"><Menuhorizontal /></div>  <!-- Apelle du component Menuhorizontal le menu apparait a partir d'une taille medium et plus.-->
     <div class="block md:hidden menuburger"><Burgermenu /></div>  <!-- le menu apparait à partir d'une taille medium ou moin-->
    </div>
  </nav>
</template>

<script setup lang="js">
import Tittle from "~/components/ui/Tittle.vue"; //import de mon components title depuis le chemin donné
import Burgermenu from "@/components/navigation/Burgermenu.vue";
import Menuhorizontal from "~/components/navigation/Menuhorizontal.vue";
</script>

<style scoped>
.navbar {
  background-color: rgba(75, 101, 71, 1);
}

.title-wrapper p {
  color: rgba(234, 198, 132, 1);
}
img {
  @apply h-10;
}
</style>
