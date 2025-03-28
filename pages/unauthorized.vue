
<template>
  <div  class="unauthorized-container" >
    <h1>Accès refusé</h1>
    <p>Vous n'avez pas les autorisations nécessaires pour accéder à cette page.</p>
    <UButton color="neutral" variant="outline">
    <NuxtLink to="/">Retour à l'accueil</NuxtLink>
    </UButton>
  </div>
</template>

<style scoped >
.unauthorized-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background-color: var(--background-color);
  color: var(--black-color);
}

h1 {
  color: var(--secondary-color);
  font-size: 2.5rem;
}

p {
  color: var(--champ-color);
  font-size: 1.2rem;
  margin-bottom: 20px;
}

UButton {
  background-color: var(--primary-color);
  border: 2px solid var(--secondary-color);
  color: var(--black-color);
  padding: 10px 20px;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

UButton:hover {
  background-color: var(--secondary-color);
  color: var(--background-color);
}
</style>

<script setup>
import {useAuthStore} from '~/stores/auth';
const authStore = useAuthStore();
onMounted(() => {
  authStore.initializeAuth();
});
</script>