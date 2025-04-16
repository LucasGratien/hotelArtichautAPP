<script setup>
// import du store et méthodes de vue // router pour la redirection après l'enregistrement
import {useAuthStore} from '~/stores/auth';
import {ref, reactive} from 'vue';

//injection du store
const authStore = useAuthStore();
//gestion de la modale
const isOpenRegister = defineModel();
//récupération des credentials
const credentials = reactive({
  email: '',
  password: '',
  confirmPassword: '',
  firstname: '',
  lastname: '',
  address: '',
  city: '',
  postal_code: '',
  phone: '',
  images: '',
  is_pro: false
});
//variables d'état
const errorMsg = ref('');
const pending = ref(false);

//vérification des password et de l'état de la requête d'inscription,
// si la requête est ok message confirmation et
// fermeture modale

const register = async () => {
  //vérification des password identiques
  if (credentials.password !== credentials.confirmPassword) {
    errorMsg.value = "Les mots de passe ne correspondent pas.";
    return;
  }
  //gestion de l'état de la requête // en cours= vrai et errorMsg. est initialisé
  pending.value = true;
  errorMsg.value = '';
  try {
    //appel de la fonction register du store afin de charger les données rentrée par l'utilisateur.
    await authStore.register(credentials);
    //message (temporaire de bienvenue)
    alert(`Compte créé avec succès, bienvenue ${credentials.firstname} ${credentials.lastname}, vous pouvez vous login !`);
    // Fermer la modale après une inscription réussie
    isOpenRegister.value = false;
    // reset des champs
    Object.assign(credentials, {
      email: '',
      password: '',
      confirmPassword: '',
      firstname: '',
      lastname: '',
      address: '',
      city: '',
      postal_code: '',
      phone: '',
      is_pro: false
    });
  } catch (error) {
    console.error("Erreur d'inscription :", error);
    errorMsg.value = "Une erreur est survenue lors de l'inscription.";
  } finally {
    pending.value = false;
  }
};
</script>

<template>

<!--  lancement de la modale -->
  <UModal v-model="isOpenRegister" prevent-close>
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
<!--      header de la modale-->
      <template #header>
        <div class="flex items-center justify-between">
          <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
            Inscription
          </h3>
<!--          bouton de fermeture de modale-->
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                   @click="isOpenRegister = false"/>
        </div>
      </template>
      <section>
<!--        tableau d'insertion des renseignements d'enregistrement-->
        <form @submit.prevent="register">
          <p class="text-red-500" v-if="errorMsg">{{ errorMsg }}</p>
          <UInput v-model="credentials.email" type="email" placeholder="Email" class="mb-2"/>
          <UInput v-model="credentials.password" type="password" placeholder="Mot de passe" class="mb-2"/>
          <UInput v-model="credentials.confirmPassword" type="password" placeholder="Confirmer le mot de passe" class="mb-2"/>
          <UInput v-model="credentials.firstname" type="text" placeholder="Nom" class="mb-4"/>
          <UInput v-model="credentials.lastname" type="text" placeholder="Prenom" class="mb-4"/>
          <UInput v-model="credentials.address" type="text" placeholder="Adresse" class="mb-4"/>
          <UInput v-model="credentials.city" type="text" placeholder="Ville" class="mb-4"/>
          <UInput v-model="credentials.postal_code" type="text" placeholder="Code Postale" class="mb-4"/>
          <UInput v-model="credentials.phone" type="text" placeholder="Telephone" class="mb-4"/>
          <UInput v-model="credentials.images" type="file" placeholder="Select a picture" class="mb-4"/>

<!--          sur cet input ce serai mieux un selector (a avoir pour plus tard)-->
          <UInput v-model="credentials.is_pro" type="text" placeholder="Professionnel ? True ou False" class="mb-4"/>
<!--          bouton de validation-->
          <UButton color="gray" variant="ghost" type="submit" :disabled="pending" class="w-full">
            {{ pending ? 'Inscription...' : "S'inscrire" }}
          </UButton>
        </form>
      </section>
    </UCard>
  </UModal>
</template>