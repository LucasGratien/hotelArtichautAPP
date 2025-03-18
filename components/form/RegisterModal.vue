<script setup>
import { useAuthStore } from '~/stores/auth';
import { ref, reactive } from 'vue';

const authStore = useAuthStore();
const isOpen = ref(false);
const credentials = reactive({
  email: '',
  password: '',
  confirmPassword: '',
});
const errorMsg = ref('');
const pending = ref(false);

const register = async () => {
  if (credentials.password !== credentials.confirmPassword) {
    errorMsg.value = "Les mots de passe ne correspondent pas.";
    return;
  }

  pending.value = true;
  errorMsg.value = '';

  try {
    const response = await authStore.register({
      email: credentials.email,
      password: credentials.password,
    });

    if (authStore.isLoggedIn) {
      isOpen.value = false;
      alert(`Compte créé avec succès, bienvenue ${authStore.user.email} !`);
    } else {
      errorMsg.value = "L'inscription a échoué.";
    }
  } catch (error) {
    console.error("Erreur d'inscription :", error);
    errorMsg.value = "Une erreur est survenue lors de l'inscription.";
  } finally {
    pending.value = false;
  }
};
</script>

<template>
  <UModal v-model="isOpen" prevent-close>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Inscription
          </h3>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                   @click="isOpen = false"/>
        </div>
      </template>
      <section>
        <form @submit.prevent="register">
          <p class="text-red-500" v-if="errorMsg">{{ errorMsg }}</p>
          <UInput v-model="credentials.email" type="email" placeholder="Email" class="mb-2" />
          <UInput v-model="credentials.password" type="password" placeholder="Mot de passe" class="mb-2" />
          <UInput v-model="credentials.confirmPassword" type="password" placeholder="Confirmer le mot de passe" class="mb-4" />
          <UButton color="gray" variant="ghost" type="submit" :disabled="pending" class="w-full">
            {{ pending ? 'Inscription...' : "S'inscrire" }}
          </UButton>
        </form>
      </section>
    </UCard>
  </UModal>
</template>